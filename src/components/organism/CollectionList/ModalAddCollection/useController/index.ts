import * as React from 'react'
import { getLocalStorage, postCollection } from '@/utils'
import { useCollectionListCtx } from '@/context/CollectionListCtx'
import { TCollections } from '@/context/AnimeDetailCtx/types'

export const useController = () => {
  const {
    state: {
      collectionAdded,
      showModalAddCollection: isOpen,
      collections,
      newCollection,
      isUnique,
    },
    setShowModalAddCollection,
    setCollectionAdded,
    setCollections,
    setNewCollection,
    setIsUnique,
  } = useCollectionListCtx()

  const currentCollectionList = getLocalStorage('collection')

  const handleClose = () => {
    setShowModalAddCollection(false)
  }

  const handleAddToCollection = () => {
    setCollectionAdded(true)
    handleClose()
  }

  const checkIfValueIsUnique = (value: string) => {
    const existingValues = currentCollectionList.map(
      (item: TCollections) => item.name
    )
    return !existingValues.includes(value)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^[a-zA-Z0-9]*$/.test(value)) {
      setNewCollection({
        ...newCollection,
        name: value,
        animes: [],
      })
    }
    if (currentCollectionList) {
      const isValueUnique = checkIfValueIsUnique(value)
      setIsUnique(isValueUnique)
    }
  }

  const handleCreate = () => {
    if (isUnique) {
      if (currentCollectionList) {
        setCollections([...currentCollectionList, newCollection])
      } else {
        setCollections([...collections, newCollection])
      }
      setCollectionAdded(true)
      handleClose()
    } else {
      console.log('Value is not unique. Cannot perform create action.')
    }
  }

  React.useEffect(() => {
    if (collections.length > 0 && collectionAdded) {
      postCollection(collections)
      setCollectionAdded(false)
      setNewCollection({
        name: '',
        animes: [],
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionAdded])

  const handleOpenModalNewCollection = () => {
    setShowModalAddCollection(false)
  }
  return {
    currentCollectionList,
    isOpen,
    handleClose,
    handleAddToCollection,
    handleOpenModalNewCollection,
    handleChange,
    newCollection,
    isUnique,
    handleCreate,
  }
}
