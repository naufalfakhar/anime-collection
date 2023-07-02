import * as React from 'react'
import { useAnimeListCtx } from '@/context/AnimeListCtx'
import { addToSelectedCollection, getLocalStorage } from '@/utils'

export const useController = () => {
  const {
    state: {
      showModalAddToCollection: isOpen,
      selectedCollection,
      selectedCollectionName,
      collectionUpdated,
      selectedAnime,
    },
    setShowModalAddToCollection,
    setShowModalCreateCollection,
    setSelectedCollectionName,
    setCollectionUpdated,
    setSelectedAnime,
    setSelectedAnimeName,
    setSelectedCollection,
  } = useAnimeListCtx()

  const currentCollectionList = getLocalStorage('collection')

  const handleClose = () => {
    setShowModalAddToCollection(false)
  }

  const handleCheckCollection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const checked = e.target.checked

    if (checked) {
      setSelectedCollectionName([...selectedCollectionName, name])
    } else {
      setSelectedCollectionName(
        selectedCollectionName.filter((item) => item !== name)
      )
    }
  }

  const handleAddToCollection = () => {
    setCollectionUpdated(true)
    handleClose()
  }

  React.useEffect(() => {
    if (collectionUpdated) {
      addToSelectedCollection(selectedCollectionName, selectedAnime)
      setCollectionUpdated(false)
      setSelectedAnime([])
      setSelectedAnimeName([])
      setSelectedCollection([])
      setSelectedCollectionName([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionUpdated])

  const handleOpenModalCreateCollection = () => {
    setShowModalAddToCollection(false)
    setShowModalCreateCollection(true)
  }

  return {
    isOpen,
    selectedCollection,
    currentCollectionList,
    handleClose,
    handleCheckCollection,
    handleAddToCollection,
    handleOpenModalCreateCollection,
  }
}
