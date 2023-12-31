import { useAnimeListCtx } from '@/context/AnimeListCtx'

export const useController = () => {
  const {
    state: { pageInfo },
    setPageInfo,
  } = useAnimeListCtx()

  const maxDisplayed = 5

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
    setPageInfo({ ...pageInfo, currentPage: page - 1 })
  }

  const handlePageChange = (page: number) => {
    setPageInfo({ ...pageInfo, currentPage: page })
  }

  const handlePageChangeNext = (page: number) => {
    setPageInfo({ ...pageInfo, currentPage: page + 1 })
  }

  return {
    pageInfo,
    pageNumbers,
    handlePageChange,
    handlePageChangeNext,
    handlePageChangePrev,
  }
}
