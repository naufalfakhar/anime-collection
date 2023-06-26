import { useAnimeDetailCtx } from '@/context/AnimeDetailCtx'

export const useController = () => {
  const {
    state: { showModalCollectionInfo: isOpen },
    setShowModalCollectionInfo,
  } = useAnimeDetailCtx()

  const handleClose = () => {
    setShowModalCollectionInfo(false)
  }

  return {
    isOpen,
    handleClose,
  }
}
