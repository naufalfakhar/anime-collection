import { useAnimeDetailCtx } from '@/context/AnimeDetailCtx'

export const useController = () => {
  const {
    state: { showModalAddCollection: isOpen },
    setShowModalAddCollection,
    setShowModalNewCollection,
  } = useAnimeDetailCtx()

  const handleClose = () => {
    setShowModalAddCollection(false)
  }

  const handleOpenModalNewCollection = () => {
    setShowModalAddCollection(false)
    setShowModalNewCollection(true)
  }

  return {
    isOpen,
    handleClose,
    handleOpenModalNewCollection,
  }
}
