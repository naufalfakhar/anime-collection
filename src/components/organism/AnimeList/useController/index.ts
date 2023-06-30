import * as React from 'react'
import { useAnimeListCtx } from '@/context/AnimeListCtx'
import { useGetAnimeList } from '@/GraphQL/getAnimeList'
import { useGetAnime } from '@/GraphQL/getAnime'

export const useController = () => {
  const {
    state: { pageInfo, media, skipModal },
    setPagination,
    setMedia,
    setMediaModal,
    setShowModalBulkAdd,
    setSkipModal,
  } = useAnimeListCtx()

  const { loading, data, refetch } = useGetAnimeList()
  const {
    loading: loadingModal,
    data: dataModal,
    refetch: refetchModal,
  } = useGetAnime()

  React.useEffect(() => {
    refetch()
    if (data) {
      setPagination({
        ...pageInfo,
        total: data.Page.pageInfo.total,
        lastPage: data.Page.pageInfo.lastPage,
        hasNextPage: data.Page.pageInfo.hasNextPage,
      })
      setMedia(data.Page.media)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageInfo.currentPage, data])

  React.useEffect(() => {
    refetchModal()
    if (dataModal) {
      setMediaModal(dataModal.Page.media)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skipModal])

  const handleOpenModalBulkAdd = () => {
    setSkipModal(false)
    setShowModalBulkAdd(true)
  }

  return {
    media,
    loading,
    loadingModal,
    handleOpenModalBulkAdd,
  }
}
