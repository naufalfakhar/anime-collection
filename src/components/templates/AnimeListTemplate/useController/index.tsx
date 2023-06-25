import * as React from 'react'
import { useAnimeListCtx } from '@/context/AnimeListCtx'
import { useGetAnimeList } from '@/GraphQL/getAnimeList'

export const useController = () => {
  const {
    state: { pageInfo, media },
    setPagination,
    setMedia,
  } = useAnimeListCtx()

  const { loading, error, data, refetch } = useGetAnimeList()

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

  const handlePageChange = (page: number) => {
    setPagination({ ...pageInfo, currentPage: page })
  }

  const handlePageChangeNext = (page: number) => {
    setPagination({ ...pageInfo, currentPage: page + 1 })
  }

  return {
    media,
    pageInfo,
    handlePageChange,
    handlePageChangeNext,
    data,
    loading,
    error,
  }
}
