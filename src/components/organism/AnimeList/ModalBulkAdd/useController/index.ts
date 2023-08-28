import * as React from 'react'
import { useAnimeListCtx } from '@/context/AnimeListCtx'
import { useGetAnimeListModal } from '@/GraphQL/getAnimeListModal'

export const useController = () => {
  const {
    state: {
      showModalBulkAdd: isOpen,
      animeListModal,
      selectedAnimeName,
      skipModal,
      pageInfoModal,
    },
    setShowModalBulkAdd,
    setPageInfoModal,
    setSelectedAnime,
    setSelectedAnimeName,
    setShowModalAddToCollection,
    setAnimeListModal,
  } = useAnimeListCtx()

  const { loading, data, refetch } = useGetAnimeListModal()

  React.useEffect(() => {
    refetch()
    if (data) {
      setPageInfoModal({
        ...pageInfoModal,
        total: data.Page.pageInfo.total,
        lastPage: data.Page.pageInfo.lastPage,
        hasNextPage: data.Page.pageInfo.hasNextPage,
      })
      setAnimeListModal(data.Page.media)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skipModal, pageInfoModal.currentPage, data])

  const handleClose = () => {
    setShowModalBulkAdd(false)
  }

  const handleCheckAnime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const checked = e.target.checked

    if (checked) {
      setSelectedAnimeName([...selectedAnimeName, name])
    } else {
      setSelectedAnimeName(selectedAnimeName.filter((item) => item !== name))
    }
  }

  const handleOpenModalAddToCollection = () => {
    setShowModalAddToCollection(true)
    handleClose()
  }

  React.useEffect(() => {
    setSelectedAnime(
      animeListModal.filter((item) =>
        selectedAnimeName.includes(item.title.romaji)
      )
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAnimeName])

  return {
    loading,
    animeListModal,
    isOpen,
    handleClose,
    handleCheckAnime,
    handleOpenModalAddToCollection,
  }
}
