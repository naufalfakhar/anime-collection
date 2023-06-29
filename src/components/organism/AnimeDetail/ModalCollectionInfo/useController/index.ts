import { useAnimeDetailCtx } from '@/context/AnimeDetailCtx'
import { getLocalStorage } from '@/utils'

export const useController = () => {
  const {
    state: { showModalCollectionInfo: isOpen, Media, prevSelectedCollection },
    setShowModalCollectionInfo,
    setPrevSelectedCollection,
  } = useAnimeDetailCtx()

  const currentCollectionList = getLocalStorage('collection')

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
