import * as React from 'react'
import { getLocalStorage, postCollection } from '@/utils'
import { ICollection } from '@/types'
import { useCollectionDetailCtx } from '@/context/CollectionDetailCtx'
import { useNavigate } from 'react-router-dom'

export const useController = () => {
  const {
    state: {
      newName,
      collectionEdited,
      showModalEditCollection: isOpen,
      collections,
      newCollection,
      isUnique,
      thisCollection,
    },
    setNewName,
    setShowModalEditCollection,
    setCollectionEdited,
    setCollections,
    setSelectedCollection,
    setIsUnique,
    setIsLoading,
  } = useCollectionDetailCtx()

  const currentCollectionList = getLocalStorage('collection')

  const navigate = useNavigate()

  const handleClose = () => {
    setShowModalEditCollection(false)
  }

  const checkIfValueIsUnique = (value: string) => {
    const existingValues = currentCollectionList.map(
      (item: ICollection) => item.name
    )
    return !existingValues.includes(value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^[a-zA-Z0-9 ]*$/.test(value)) {
      setNewName(value)
    }
    if (currentCollectionList) {
      const isValueUnique = checkIfValueIsUnique(value)
      setIsUnique(isValueUnique)
    }
  }

  const handleEdit = () => {
    if (isUnique && newName.length <= 16) {
      const updatedArr = currentCollectionList.map((obj: ICollection) => {
        if (obj.name === thisCollection) {
          return { ...obj, name: newName }
        }
        return obj
      })
      setSelectedCollection(updatedArr)
      setCollections(updatedArr)
      navigate(`/collection/${newName}`)
      setIsLoading(true)
      setCollectionEdited(true)
      handleClose()
    } else {
      alert(
        'Value is not unique or have more than 16 character. Cannot perform edit action.'
      )
    }
  }

  React.useEffect(() => {
    if (collections.length > 0 && collectionEdited) {
      postCollection(collections)
      setCollectionEdited(false)
      setNewName('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionEdited])

  const handleOpenModalNewCollection = () => {
    setShowModalEditCollection(false)
  }
  return {
    newName,
    currentCollectionList,
    isOpen,
    handleClose,
    handleOpenModalNewCollection,
    handleChange,
    newCollection,
    isUnique,
    handleEdit,
  }
}
