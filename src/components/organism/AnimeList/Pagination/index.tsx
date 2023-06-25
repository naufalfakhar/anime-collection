import { TState } from '@/context/AnimeListCtx/types'

type Props = TState['pageInfo'] & {
  onPageChange: (page: number) => void
  onPageChangeNext: (page: number) => void
}

export default function Pagination({
  total,
  currentPage,
  lastPage,
  hasNextPage,
  perPage,
  onPageChange,
  onPageChangeNext,
}: Props) {
  const maxDisplayed = 5 // Maximum number of pages to display

  let startPage = currentPage - Math.floor(maxDisplayed / 2)
  let endPage = currentPage + Math.floor(maxDisplayed / 2)

  if (startPage <= 0) {
    endPage += Math.abs(startPage) + 1
    startPage = 1
  }

  if (endPage > lastPage) {
    startPage -= endPage - lastPage
    endPage = lastPage
  }

  if (startPage <= 0) {
    startPage = 1
  }

  const pageNumbers = Array.from(Array(endPage - startPage + 1)).map(
    (_, i) => startPage + i
  )

  return (
    <div>
      {currentPage > 1 && <button>prev</button>}

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          disabled={currentPage === pageNumber}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

      {hasNextPage && (
        <button onClick={() => onPageChangeNext(currentPage)}>next</button>
      )}
    </div>
  )
}

// {Array.from(Array(Math.ceil(total / perPage)))
//         .slice(currentPage, currentPage + 5)
//         .map((_, i) => (
//           <button
//             key={i}
//             disabled={currentPage - 1 === i}
//             onClick={() => onPageChange(i + 1)}
//           >
//             {i + 1}
//           </button>
//         ))}
