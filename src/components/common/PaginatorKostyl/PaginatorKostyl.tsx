import { SVGs } from '../Paginator/Paginator'
import s from '../Paginator/Paginator.module.scss'

type PropsType = {
  canGoNext: boolean
  currentPage: number
  onPageChange: (pageNumber: number) => void
}

// API 2.0 does not provide a proper functionality to use a normal paginator, so this is being used
export const PaginatorKostyl: React.FC<PropsType> = ({
  canGoNext,
  currentPage = 1,
  onPageChange,
}) => {
  const nextPage = canGoNext ? currentPage + 1 : null
  const previousPage = currentPage > 1 ? currentPage - 1 : null
  const paginate = { pages: [previousPage, currentPage, nextPage], large: false }

  if (currentPage > 2) paginate.large = true

  return (
    <div className={s.pagination}>
      <SVGs />
      {paginate.large && (
        <button
          title={'первая'}
          className={s.indexes}
          onClick={() => {
            onPageChange(1)
          }}
        >
          <svg>
            <use href="#doubleLeft"></use>
          </svg>
        </button>
      )}
      {paginate.pages.map((p) => {
        return (
          p && (
            <button
              key={p}
              className={`${currentPage === p && s.selectedPage} ${s.pages}`}
              onClick={() => {
                onPageChange(p)
              }}
            >
              {p}
            </button>
          )
        )
      })}
    </div>
  )
}
