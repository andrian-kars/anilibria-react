import s from './Search.module.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getSearchResults } from 'src/api/anilibria/titleService';
import { useIntl } from 'react-intl';

export const Search = () => {
  const [searchValue, setValue] = useState('');

  const [showResults, setShowResult] = useState(false);
  const { formatMessage } = useIntl();

  const { data: searchResults, error: queryError } = useQuery(['search', searchValue], () => {
    if (searchValue.length > 2) {
      return getSearchResults(searchValue);
    }
    return null;
  });

  const error = queryError || searchResults?.error?.code;

  if (error) return <div>{formatMessage({ id: 'search.Error' })}</div>;

  return (
    <div
      className={s.search}
      onBlur={() => {
        setTimeout(() => {
          setShowResult(false);
        }, 180);
      }}
    >
      <input
        onFocus={() => {
          setShowResult(true);
        }}
        onChange={(e) => {
          const value = e.target.value;

          if (value.length > 2) {
            setValue(value);
          }
        }}
        type="text"
        placeholder={formatMessage({ id: 'search.placeholder' })}
        title={formatMessage({ id: 'search.title' })}
      />
      {showResults && (
        <ul>
          {searchValue < 2 ? (
            <span>{formatMessage({ id: 'search.title' })}</span>
          ) : searchResults?.length === 0 ? (
            <span>{formatMessage({ id: 'search.nothingFound' })}</span>
          ) : (
            searchResults?.map((el) => (
              <li key={el.names.ru}>
                <NavLink className={s.searchLink} to={`/release/${el.code}`}>
                  {el.names.ru}
                </NavLink>
              </li>
            ))
          )}
        </ul>
      )}
      <svg className="svg-icon" viewBox="0 0 20 20">
        <path
          d="M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896
								c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519
								c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461
								s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z"
        ></path>
      </svg>
    </div>
  );
};
