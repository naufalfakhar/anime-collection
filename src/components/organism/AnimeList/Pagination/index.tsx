import { PaginationButton, PaginationGroup } from '@/components/styles'
import { useController } from './useController'

export default function Pagination() {
  const {
    pageInfo,
    pageNumbers,
    handlePageChange,
    handlePageChangeNext,
    handlePageChangePrev,
  } = useController()

  return (
    <PaginationGroup>
      {pageInfo.currentPage > 1 ? (
        <PaginationButton
          onClick={() => handlePageChangePrev(pageInfo.currentPage)}
        >
          &lt;
        </PaginationButton>
      ) : (
        <PaginationButton
          onClick={() => handlePageChangePrev(pageInfo.currentPage)}
          disabled
        >
          &lt;
        </PaginationButton>
      )}

      {pageNumbers.map((pageNumber) => (
        <PaginationButton
          key={pageNumber}
          cn={pageInfo.currentPage === pageNumber}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </PaginationButton>
      ))}

      {pageInfo.hasNextPage && (
        <PaginationButton
          onClick={() => handlePageChangeNext(pageInfo.currentPage)}
        >
          &gt;
        </PaginationButton>
      )}
    </PaginationGroup>
  )
}
