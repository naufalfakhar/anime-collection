import * as React from 'react'
import { useAnimeDetailCtx } from '@/context/AnimeDetailCtx'
import { getLocalStorage, postToSelectedCollection } from '@/utils'

export const useController = () => {
  const {
    state: {
      Media,
      showModalAddCollection: isOpen,
      prevSelectedCollection,
      selectedCollection,
      removedCollection,
      collectionsUpdated,
    },
    setPrevSelectedCollection,
    setSelectedCollection,
    setRemovedCollection,
    setCollectionsUpdated,
    setShowModalAddCollection,
    setShowModalNewCollection,
  } = useAnimeDetailCtx()

  const currentCollectionList = getLocalStorage('collection')

  const handleClose = () => {
    setShowModalAddCollection(false)
  }

  const handleCheckCollection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const checked = e.target.checked

    if (prevSelectedCollection.length > 0) {
      if (checked) {
        setSelectedCollection([...prevSelectedCollection, name])
        setRemovedCollection(removedCollection.filter((item) => item !== name))
      }
      if (!checked) {
        setRemovedCollection([...removedCollection, name])
      }
    }
    if (prevSelectedCollection.length === 0) {
      if (checked) {
        setSelectedCollection([...selectedCollection, name])
      }
      if (!checked) {
        setRemovedCollection(selectedCollection.filter((item) => item !== name))
      }
    }
  }

  const handleAddToCollection = () => {
    setCollectionsUpdated(true)
    handleClose()
  }

  React.useEffect(() => {
    if (collectionsUpdated) {
      postToSelectedCollection(
        prevSelectedCollection,
        selectedCollection,
        removedCollection,
        Media
      )
      setCollectionsUpdated(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionsUpdated])

  const handleOpenModalNewCollection = () => {
    setShowModalAddCollection(false)
    setShowModalNewCollection(true)
  }
  return {
    selectedCollection,
    Media,
    currentCollectionList,
    prevSelectedCollection,
    removedCollection,
    isOpen,
    setPrevSelectedCollection,
    setSelectedCollection,
    handleClose,
    handleCheckCollection,
    handleAddToCollection,
    handleOpenModalNewCollection,
  }
}
