import * as React from 'react'
import { useAnimeDetailCtx } from '@/context/AnimeDetailCtx'
import { postCollection, getCollection } from '@/utils'
import { TCollections } from '@/context/AnimeDetailCtx/types'
import { current } from 'immer'

export const useController = () => {
  const {
    state: {
      Media,
      collections,
      newCollection,
      isUnique,
      collectionsUpdated,
      showModalNewCollection: isOpen,
    },
    setCollections,
    setNewCollection,
    setIsUnique,
    setCollectionsUpdated,
    setShowModalNewCollection,
  } = useAnimeDetailCtx()

  const currentCollection = getCollection()

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
    const name = e.target.name
    const value = e.target.value
    if (/^[a-zA-Z0-9]*$/.test(value)) {
      setNewCollection({
        ...newCollection,
        [name]: value,
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
      setCollectionsUpdated(true)
      handleClose()
    } else {
      console.log('Value is not unique. Cannot perform create action.')
    }
  }

  React.useEffect(() => {
    if (collections.length > 0 && collectionsUpdated) {
      postCollection(collections)
      setCollectionsUpdated(false)
      setNewCollection({
        name: '',
        animes: [],
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionsUpdated])

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
