import s from './Paginator.module.scss'

type PropsType = {
  totalUsersCount: number
  pageSize?: number
  currentPage?: number
  onPageChange: (pageNumber: number) => void
}

export const Paginator: React.FC<PropsType> = ({
  totalUsersCount,
  pageSize = 10,
  currentPage = 1,
  onPageChange,
}) => {
  const maxPages = 5

  // calculate total pages
  const totalPages = Math.ceil(totalUsersCount / pageSize)

  // ensure current page isn't out of range
  if (currentPage < 1) {
    currentPage = 1
  } else if (currentPage > totalPages) {
    currentPage = totalPages
  }

  let startPage: number, endPage: number
  if (totalPages <= maxPages) {
    // total pages less than max so show all pages
    startPage = 1
    endPage = totalPages
  } else {
    // total pages more than max so calculate start and end pages
    const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2)
    const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1
    if (currentPage <= maxPagesBeforeCurrentPage) {
      // current page near the start
      startPage = 1
      endPage = maxPages
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      // current page near the end
      startPage = totalPages - maxPages + 1
      endPage = totalPages
    } else {
      // current page somewhere in the middle
      startPage = currentPage - maxPagesBeforeCurrentPage
      endPage = currentPage + maxPagesAfterCurrentPage
    }
  }

  // create an array of pages to ng-repeat in the pager control
  const pages = Array.from(Array(endPage + 1 - startPage).keys()).map((i) => startPage + i)

  return (
    <div className={s.pagination}>
      <SVGs />
      <button
        title={'First'}
        className={s.indexes}
        onClick={() => {
          onPageChange(1)
        }}
      >
        <svg>
          <use href="#doubleLeft"></use>
        </svg>
      </button>
      {pages.map((p) => {
        return (
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
      })}
      <button
        title={'Last'}
        className={s.indexes}
        onClick={() => {
          onPageChange(totalPages)
        }}
      >
        <svg>
          <use href="#doubleRight"></use>
        </svg>
      </button>
    </div>
  )
}

const SVGs: React.FC = () => {
  return (
    <svg display="none">
      <symbol id="doubleRight" viewBox="0 0 512 512">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 612.02 612.02"
        >
          <g>
            <g id="_x35__11_">
              <g>
                <path
                  d="M596.96,269.674L342.381,15.094c-20.079-20.079-52.644-20.079-72.723,0c-20.079,20.079-20.079,52.644,0,72.723
				L487.852,306.01L269.658,524.202c-20.079,20.079-20.079,52.644,0,72.723s52.644,20.079,72.723,0L596.96,342.346
				C617.039,322.317,617.039,289.753,596.96,269.674z M290.858,254.258L88.744,41.238c-20.309-21.378-53.204-21.378-73.513,0
				s-20.309,56.058,0,77.462l165.371,174.289L15.231,467.278c-20.309,21.379-20.309,56.083,0,77.462s53.204,21.379,73.513,0
				L290.858,331.72C311.167,310.342,311.167,275.662,290.858,254.258z"
                />
              </g>
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </symbol>
      <symbol id="doubleLeft" viewBox="0 0 512 512">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 612 612"
        >
          <g>
            <g id="_x34__11_">
              <g>
                <path
                  d="M124.172,305.975L342.365,87.781c20.079-20.079,20.079-52.644,0-72.722c-20.079-20.079-52.644-20.079-72.723,0
				L15.062,269.639c-20.079,20.079-20.079,52.644,0,72.723l254.58,254.58c20.079,20.078,52.644,20.078,72.723,0
				c20.079-20.079,20.079-52.644,0-72.723L124.172,305.975z M431.395,305.694l165.371-165.982c20.308-20.359,20.308-53.408,0-73.768
				c-20.309-20.359-53.204-20.359-73.513,0L321.139,268.823c-20.309,20.359-17.047,35.266,3.032,55.345L523.253,545.47
				c20.309,20.359,53.204,20.359,73.513,0c20.308-20.359,20.308-53.408,0-73.768L431.395,305.694z"
                />
              </g>
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </symbol>
    </svg>
  )
}
