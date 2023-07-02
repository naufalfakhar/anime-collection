import * as React from 'react'
import { useAnimeDetailCtx } from '@/context/AnimeDetailCtx'
import { postCollection, getLocalStorage } from '@/utils'
import { ICollection } from '@/types'

export const useController = () => {
  const {
    state: {
      currentAnime,
      collections,
      newCollection,
      isUnique,
      collectionsAdded,
      showModalNewCollection: isOpen,
    },
    setCollections,
    setNewCollection,
    setIsUnique,
    setCollectionsAdded,
    setShowModalNewCollection,
  } = useAnimeDetailCtx()

  const currentCollectionList = getLocalStorage('collection')

  const handleClose = () => {
    setShowModalNewCollection(false)
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
        animes: [currentAnime],
      })
    }
    if (currentCollectionList) {
      const isValueUnique = checkIfValueIsUnique(value)
      setIsUnique(isValueUnique)
    }
  }

  const handleCreate = () => {
    if (
      isUnique &&
      newCollection.name.length <= 16 &&
      newCollection.name !== ''
    ) {
      if (currentCollectionList) {
        setCollections([...currentCollectionList, newCollection])
      } else {
        setCollections([...collections, newCollection])
      }
      setCollectionsAdded(true)
      handleClose()
    } else {
      alert(
        'Title is empty or not unique or have more than 16 character. Cannot perform create action.'
      )
    }
  }

  React.useEffect(() => {
    if (collections.length > 0 && collectionsAdded) {
      postCollection(collections)
      setCollectionsAdded(false)
      setNewCollection({
        name: '',
        animes: [],
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionsAdded])

  return {
    isOpen,
    newCollection,
    handleChange,
    handleCreate,
    handleClose,
  }
}
