import * as React from 'react'
import { useAnimeDetailCtx } from '@/context/AnimeDetailCtx'
import { getLocalStorage, postToSelectedCollection } from '@/utils'
import { IAnime, ICollection } from '@/types'

export const useController = () => {
  const {
    state: {
      currentAnime,
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
        currentAnime
      )
      setCollectionsUpdated(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionsUpdated])

  React.useEffect(() => {
    if (currentCollectionList === null) return
    setPrevSelectedCollection(
      currentCollectionList
        .filter((collections: ICollection) => {
          return collections.animes.some(
            (anime: IAnime) => anime.id === currentAnime.id
          )
        })
        .map((collection: ICollection) => collection.name)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOpenModalNewCollection = () => {
    setShowModalAddCollection(false)
    setShowModalNewCollection(true)
  }
  return {
    isOpen,
    currentCollectionList,
    currentAnime,
    handleClose,
    handleCheckCollection,
    handleAddToCollection,
    handleOpenModalNewCollection,
  }
}
