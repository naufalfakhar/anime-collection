import * as React from 'react'
import { useAnimeDetailCtx } from '@/context/AnimeDetailCtx'
import { getCollection, postToSelectedCollection } from '@/utils'

export const useController = () => {
  const {
    state: {
      Media,
      showModalAddCollection: isOpen,
      prevSelectedCollection,
      selectedCollection,
      collectionsUpdated,
    },
    setPrevSelectedCollection,
    setSelectedCollection,
    setCollectionsUpdated,
    setShowModalAddCollection,
    setShowModalNewCollection,
  } = useAnimeDetailCtx()

  const currentCollectionList = getCollection()

  const handleClose = () => {
    setShowModalAddCollection(false)
  }

  const handleCheckCollection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const checked = e.target.checked

    if (checked) {
      setSelectedCollection([...prevSelectedCollection, name])
    } else {
      setSelectedCollection(
        prevSelectedCollection.filter((item) => item !== name)
      )
    }
  }
  const handleAddToCollection = () => {
    setCollectionsUpdated(true)
    handleClose()
  }

  const handleOpenModalNewCollection = () => {
    setShowModalAddCollection(false)
    setShowModalNewCollection(true)
  }

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    if (collectionsUpdated) {
      postToSelectedCollection(
        prevSelectedCollection,
        selectedCollection,
        Media,
        currentCollectionList
      )
      setCollectionsUpdated(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionsUpdated])

  return {
    selectedCollection,
    Media,
    currentCollectionList,
    isOpen,
    setPrevSelectedCollection,
    setSelectedCollection,
    handleClose,
    handleCheckCollection,
    handleAddToCollection,
    handleOpenModalNewCollection,
  }
}
