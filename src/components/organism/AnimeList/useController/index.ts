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

  const maxDisplayed = 5 // Maximum number of pages to display

  let startPage = pageInfo.currentPage - Math.floor(maxDisplayed / 2)
  let endPage = pageInfo.currentPage + Math.floor(maxDisplayed / 2)

  if (startPage <= 0) {
    endPage += Math.abs(startPage) + 1
    startPage = 1
  }

  if (endPage > pageInfo.lastPage) {
    startPage -= endPage - pageInfo.lastPage
    endPage = pageInfo.lastPage
  }

  if (startPage <= 0) {
    startPage = 1
  }

  const pageNumbers = Array.from(Array(endPage - startPage + 1)).map(
    (_, i) => startPage + i
  )
  const handlePageChangePrev = (page: number) => {
    setPagination({ ...pageInfo, currentPage: page - 1 })
  }

  const handlePageChange = (page: number) => {
    setPagination({ ...pageInfo, currentPage: page })
  }

  const handlePageChangeNext = (page: number) => {
    setPagination({ ...pageInfo, currentPage: page + 1 })
  }

  return {
    media,
    pageInfo,
    pageNumbers,
    handlePageChange,
    handlePageChangeNext,
    handlePageChangePrev,
    data,
    loading,
    error,
  }
}
