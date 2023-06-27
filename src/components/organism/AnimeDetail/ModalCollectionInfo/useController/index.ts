import { useAnimeDetailCtx } from '@/context/AnimeDetailCtx'
import { getCollection } from '@/utils'

export const useController = () => {
  const {
    state: { showModalCollectionInfo: isOpen, Media, prevSelectedCollection },
    setShowModalCollectionInfo,
    setPrevSelectedCollection,
  } = useAnimeDetailCtx()

  const currentCollectionList = getCollection()

  const handleClose = () => {
    setShowModalCollectionInfo(false)
  }

  return {
    Media,
    currentCollectionList,
    prevSelectedCollection,
    setPrevSelectedCollection,
    isOpen,
    handleClose,
  }
}
