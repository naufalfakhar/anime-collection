import * as React from 'react'
import { useAnimeDetailCtx } from '@/context/AnimeDetailCtx'
import { postCollection, getLocalStorage } from '@/utils'
import { TCollections } from '@/context/AnimeDetailCtx/types'

export const useController = () => {
  const {
    state: {
      Media,
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

  const currentCollection = getLocalStorage('collection')

  const handleClose = () => {
    setShowModalNewCollection(false)
  }

  const checkIfValueIsUnique = (value: string) => {
    const existingValues = currentCollection.map(
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
        animes: [Media],
      })
    }
    if (currentCollection) {
      const isValueUnique = checkIfValueIsUnique(value)
      setIsUnique(isValueUnique)
    }
  }

  const handleCreate = () => {
    if (isUnique) {
      if (currentCollection) {
        setCollections([...currentCollection, newCollection])
      } else {
        setCollections([...collections, newCollection])
      }
      setCollectionsAdded(true)
      handleClose()
    } else {
      console.log('Value is not unique. Cannot perform create action.')
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
