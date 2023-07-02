import * as React from 'react'
import { useAnimeListCtx } from '@/context/AnimeListCtx'
import { postCollection, getLocalStorage } from '@/utils'
import { ICollection } from '@/types'

export const useController = () => {
  const {
    state: {
      showModalCreateCollection: isOpen,
      selectedAnime,
      collections,
      newCollection,
      isUnique,
      collectionAdded,
    },
    setCollections,
    setNewCollection,
    setIsUnique,
    setCollectionAdded,
    setShowModalCreateCollection,
  } = useAnimeListCtx()

  const currentCollectionList = getLocalStorage('collection')

  const handleClose = () => {
    setShowModalCreateCollection(false)
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
      setNewCollection({
        ...newCollection,
        name: value,
        animes: selectedAnime,
      })
    }
    if (currentCollectionList) {
      const isValueUnique = checkIfValueIsUnique(value)
      setIsUnique(isValueUnique)
    }
  }

  const handleCreate = () => {
    if (newCollection.name === '') {
      alert('Title shouldnt be empty. Cannot perform create action.')
      return
    }
    if (newCollection.name.length > 16) {
      alert(
        'Title shouldnt be more than 16 characters. Cannot perform create action.'
      )
      return
    }
    if (!isUnique) {
      alert('Title should be unique. Cannot perform create action.')
      return
    }
    if (currentCollectionList) {
      setCollections([...currentCollectionList, newCollection])
    } else {
      setCollections([...collections, newCollection])
    }
    setCollectionAdded(true)
    handleClose()
  }

  React.useEffect(() => {
    if (collections.length > 0 && collectionAdded) {
      postCollection(collections)
      setCollectionAdded(false)
      //   setSelectedAnime([])
      //   setSelectedAnimeName([])
      setNewCollection({
        name: '',
        animes: [],
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionAdded])

  return {
    isUnique,
    collections,
    newCollection,
    setNewCollection,
    isOpen,
    handleChange,
    handleCreate,
    handleClose,
  }
}
