import Select from 'react-select';
import PropTypes from 'prop-types';
import s from './CatalogAdvancedSearch.module.scss';
import { Button } from 'src/components/common';
import { CatalogSvgs } from './CatalogSvgs';
import { useQueries } from 'react-query';
import { getGenres, getYears } from 'src/api/anilibria/catalogService';
import { useMemo, useState } from 'react';
import { customSelectStyles } from './custom-select';
import { FormattedMessage, useIntl } from 'react-intl';
import cn from 'classnames';

export const CatalogAdvancedSearch = ({ setSearchItems, isDisabled }) => {
  const { formatMessage } = useIntl();

  const seasons = useMemo(() => [
    { value: 1, label: formatMessage({ id: 'season.winter' }) },
    { value: 2, label: formatMessage({ id: 'season.spring' }) },
    { value: 3, label: formatMessage({ id: 'season.summer' }) },
    { value: 4, label: formatMessage({ id: 'season.fall' }) },
  ]);

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
              placeholder={formatMessage({ id: 'catalog.chooseGenres' })}
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
              placeholder={formatMessage({ id: 'catalog.chooseYears' })}
              isMulti={true}
              onChange={(value) => handleOptionsUpdate('years', value)}
              isDisabled={isDisabled}
            />

            <Select
              className={s.select}
              styles={customSelectStyles}
              name="seasons"
              options={seasons}
              placeholder={formatMessage({ id: 'catalog.chooseSeasons' })}
              isMulti={true}
              onChange={(value) => handleOptionsUpdate('seasons', value)}
              isDisabled={isDisabled}
            />
          </div>

          <div className={s.submits}>
            <Button disabled={isDisabled} type="submit" onClick={handleTypeUpdate}>
              {values.type === 'updated'
                ? formatMessage({ id: 'catalog.new' })
                : formatMessage({ id: 'catalog.popular' })}
            </Button>
            <Button type="submit" disabled={isDisabled} onClick={handleSearch}>
              Показать
            </Button>
            <Button type="submit" disabled={isDisabled} onClick={handleReleaseUpdate}>
              <svg>
                <use href={`#${values.releaseFinished ? 'checked' : 'unchecked'}`} />
              </svg>
              <span>
                <FormattedMessage id="catalog.releaseIsFinished" />
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
