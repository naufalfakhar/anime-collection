import * as React from 'react'
import { useAnimeListCtx } from '@/context/AnimeListCtx'
import { useGetAnimeList } from '@/GraphQL/getAnimeList'

export const useController = () => {
  const {
    state: { pageInfo, animeList, selectedAnime, selectedAnimeName },
    setPageInfo,
    setAnimeList,
    setShowModalBulkAdd,
    setSkipModal,
  } = useAnimeListCtx()

  const { loading, data, refetch } = useGetAnimeList()

  React.useEffect(() => {
    refetch()
    if (data) {
      setPageInfo({
        ...pageInfo,
        total: data.Page.pageInfo.total,
        lastPage: data.Page.pageInfo.lastPage,
        hasNextPage: data.Page.pageInfo.hasNextPage,
      })
      setAnimeList(data.Page.media)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageInfo.currentPage, data])

  const handleOpenModalBulkAdd = () => {
    setSkipModal(false)
    setShowModalBulkAdd(true)
  }

  return {
    selectedAnime,
    selectedAnimeName,
    animeList,
    loading,
    handleOpenModalBulkAdd,
  }
}
