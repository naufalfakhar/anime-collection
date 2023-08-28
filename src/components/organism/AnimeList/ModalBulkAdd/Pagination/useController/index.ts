import { useAnimeListCtx } from '@/context/AnimeListCtx'

export const useController = () => {
  const {
    state: { pageInfoModal },
    setPageInfoModal,
  } = useAnimeListCtx()

  const maxDisplayed = 5

  let startPage = pageInfoModal.currentPage - Math.floor(maxDisplayed / 2)
  let endPage = pageInfoModal.currentPage + Math.floor(maxDisplayed / 2)

  if (startPage <= 0) {
    endPage += Math.abs(startPage) + 1
    startPage = 1
  }

  if (endPage > pageInfoModal.lastPage) {
    startPage -= endPage - pageInfoModal.lastPage
    endPage = pageInfoModal.lastPage
  }

  if (startPage <= 0) {
    startPage = 1
  }

  const pageNumbers = Array.from(Array(endPage - startPage + 1)).map(
    (_, i) => startPage + i
  )

  const handlePageChangePrev = (page: number) => {
    setPageInfoModal({ ...pageInfoModal, currentPage: page - 1 })
  }

  const handlePageChange = (page: number) => {
    setPageInfoModal({ ...pageInfoModal, currentPage: page })
  }

  const handlePageChangeNext = (page: number) => {
    setPageInfoModal({ ...pageInfoModal, currentPage: page + 1 })
  }

  return {
    pageInfoModal,
    pageNumbers,
    handlePageChange,
    handlePageChangeNext,
    handlePageChangePrev,
  }
}
