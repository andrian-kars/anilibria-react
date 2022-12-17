import Select from 'react-select';
import s from './CatalogAdvancedSearch.module.scss';
import { Button } from 'src/components/common';
import { CatalogSvgs } from './CatalogSvgs';
import PropTypes from 'prop-types';
import { useQueries } from 'react-query';
import { getGenres, getYears } from 'src/api/catalogService';
import { useState } from 'react';
import { customSelectStyles } from './custom-select';
import cn from 'classnames';

const SEASONS = [
  { value: 1, label: 'Зима' },
  { value: 2, label: 'Весна' },
  { value: 3, label: 'Лето' },
  { value: 4, label: 'Осень' },
];

export const CatalogAdvancedSearch = ({ setSearchItems, isDisabled }) => {
  const results = useQueries([
    { queryKey: ['catalogYears', 1], queryFn: getYears },
    { queryKey: ['catalogGenres', 2], queryFn: getGenres },
  ]);
  const isLoading = results.some((result) => result.isLoading);

  const [values, setValues] = useState({
    genres: [],
    years: [],
    seasons: [],
    type: 'updated',
    releaseFinished: false,
  });

  const handleOptionsUpdate = (type, params) => {
    setValues((prev) => ({ ...prev, [type]: params }));
  };

  const handleTypeUpdate = () => {
    const newState = { ...values, type: values.type === 'updated' ? 'in_favorites' : 'updated' };
    setValues(newState);
    setSearchItems(newState);
  };

  const handleReleaseUpdate = () => {
    const newState = { ...values, releaseFinished: !values.releaseFinished };
    setValues(newState);
    setSearchItems(newState);
  };

  const handleSearch = () => {
    setSearchItems(values);
  };

  return (
    <div className={s.search}>
      <CatalogSvgs />
      {isLoading ? (
        <div className={cn('skeleton', s.skeleton)} />
      ) : (
        <>
          <div className={s.selects}>
            <Select
              className={s.select}
              styles={customSelectStyles}
              name="genres"
              options={results[1].data.map((el) => ({
                value: el,
                label: el,
              }))}
              placeholder="Выбрать жанры"
              isMulti={true}
              onChange={(value) => handleOptionsUpdate('genres', value)}
              isDisabled={isDisabled}
            />

            <Select
              className={s.select}
              styles={customSelectStyles}
              name="years"
              options={results[0].data
                .map((el) => ({
                  value: el,
                  label: el,
                }))
                .reverse()}
              placeholder="Год"
              isMulti={true}
              onChange={(value) => handleOptionsUpdate('years', value)}
              isDisabled={isDisabled}
            />

            <Select
              className={s.select}
              styles={customSelectStyles}
              name="seasons"
              options={SEASONS}
              placeholder="Сезон"
              isMulti={true}
              onChange={(value) => handleOptionsUpdate('seasons', value)}
              isDisabled={isDisabled}
            />
          </div>

          <div className={s.submits}>
            <Button disabled={isDisabled} type="submit" onClick={handleTypeUpdate}>
              {values.type === 'updated' ? 'Новое' : 'Популярное'}
            </Button>
            <Button type="submit" disabled={isDisabled} onClick={handleSearch}>
              Показать
            </Button>
            <Button type="submit" disabled={isDisabled} onClick={handleReleaseUpdate}>
              <svg>
                <use href={`#${values.releaseFinished ? 'checked' : 'unchecked'}`} />
              </svg>
              <span>
                Релиз<>&#8209;</>завершен
              </span>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

CatalogAdvancedSearch.propTypes = {
  setSearchItems: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
