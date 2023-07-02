import { PaginationButton, PaginationGroup } from '@/components/styles'
import { useController } from './useController'

export default function Pagination() {
  const {
    pageInfoModal,
    pageNumbers,
    handlePageChange,
    handlePageChangeNext,
    handlePageChangePrev,
  } = useController()

  return (
    <PaginationGroup>
      {pageInfoModal.currentPage > 1 ? (
        <PaginationButton
          onClick={() => handlePageChangePrev(pageInfoModal.currentPage)}
        >
          &lt;
        </PaginationButton>
      ) : (
        <PaginationButton
          onClick={() => handlePageChangePrev(pageInfoModal.currentPage)}
          disabled
        >
          &lt;
        </PaginationButton>
      )}

      {pageNumbers.map((pageNumber) => (
        <PaginationButton
          key={pageNumber}
          condition={pageInfoModal.currentPage === pageNumber}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </PaginationButton>
      ))}

      {pageInfoModal.hasNextPage ? (
        <PaginationButton
          onClick={() => handlePageChangeNext(pageInfoModal.currentPage)}
        >
          &gt;
        </PaginationButton>
      ) : (
        <PaginationButton
          onClick={() => handlePageChangeNext(pageInfoModal.currentPage)}
          disabled
        >
          &gt;
        </PaginationButton>
      )}
    </PaginationGroup>
  )
}
