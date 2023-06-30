import * as React from 'react'
import { getLocalStorage, updateCollection } from '@/utils'
import { useCollectionDetailCtx } from '@/context/CollectionDetailCtx'

export const useController = () => {
  const {
    state: {
      collectionRemoved,
      thisAnime,
      showModalRemoveAnime: isOpen,
      selectedCollection,
    },
    setShowModalRemoveAnime,
    setCollectionRemoved,
    setSelectedCollection,
  } = useCollectionDetailCtx()

  const currentCollectionList = getLocalStorage('collection')

  const handleClose = () => {
    setShowModalRemoveAnime(false)
  }

  const handleRemoveCollection = () => {
    handleDelete(thisAnime)
    setCollectionRemoved(true)
    handleClose()
  }

  React.useEffect(() => {
    if (collectionRemoved) {
      updateCollection(selectedCollection)
      setCollectionRemoved(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionRemoved])

  const handleDelete = (name: string) => {
    const updatedAnimeCollection = selectedCollection.animes.filter(
      (anime) => anime.title.romaji !== name
    )
    setSelectedCollection({
      ...selectedCollection,
      animes: updatedAnimeCollection,
    })
  }

  return {
    thisAnime,
    isOpen,
    currentCollectionList,
    handleRemoveCollection,
    handleClose,
  }
}
