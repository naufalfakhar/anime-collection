import { useController } from '../useController'

export default function Pagination() {
  const {
    pageInfo,
    pageNumbers,
    handlePageChange,
    handlePageChangeNext,
    handlePageChangePrev,
  } = useController()

  return (
    <div>
      {pageInfo.currentPage > 1 && (
        <button onClick={() => handlePageChangePrev(pageInfo.currentPage)}>
          prev
        </button>
      )}

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          disabled={pageInfo.currentPage === pageNumber}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

      {pageInfo.hasNextPage && (
        <button onClick={() => handlePageChangeNext(pageInfo.currentPage)}>
          next
        </button>
      )}
    </div>
  )
}
