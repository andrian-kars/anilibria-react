import cn from 'classnames';
import { Fragment, useState } from 'react';
import { AnimeItem, LoadMore } from 'src/components/common';
import s from './CatalogPage.module.scss';
import { ERROR_CODE_500 } from 'src/constants';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { useInfiniteQuery } from 'react-query';
import { getListFromAdvancedSearch } from 'src/api/anilibria/catalogService';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { CatalogAdvancedSearch } from './CatalogAdvancedSearch/CatalogAdvancedSearch';
import { useEffectOnce } from 'src/hooks';
import { useIntl } from 'react-intl';

const PRELOAD = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const CatalogPage = () => {
  const { formatMessage } = useIntl();
  const pageTitle = formatMessage({ id: 'catalog.title' });

  useEffectOnce(() => {
    document.title = pageTitle;
  });

  const { ref, inView } = useInView();

  const [searchItems, setSearchItems] = useState({
    genres: [],
    years: [],
    seasons: [],
    type: 'updated',
    releaseFinished: false,
  });

  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      [pageTitle, searchItems],
      ({ pageParam = 0, queryKey }) => {
        const querry = [];

        if (queryKey[1]) {
          const { genres, years, seasons, releaseFinished } = queryKey[1];

          genres.length > 0 &&
            querry.push(`("${genres.map((el) => `${el.value}`).join('", "')}") in {genres}`);
          years.length > 0 && querry.push(`{season.year} in (${years.map((el) => `${el.value}`)})`);
          seasons.length > 0 &&
            querry.push(`{season.code} in (${seasons.map((el) => `${el.value}`)})`);
          // don't see why we should pass 1 after else
          releaseFinished ? querry.push('{status.code} == 2') : querry.push('{updated}');
        }

        return getListFromAdvancedSearch({
          query: querry.join(' and '),
          order_by: queryKey[1].type,
          after: pageParam === 0 ? null : pageParam,
        });
      },
      {
        getNextPageParam: (prevPage, allPages) =>
          prevPage.length === 12 ? allPages.length * 12 : false,
      },
    );

  useEffect(() => {
    if ((inView, hasNextPage)) {
      fetchNextPage();
    }
  }, [inView]);

  if (error) return <ErrorPage errorCode={ERROR_CODE_500} />;

  return (
    <section className={s.content}>
      <CatalogAdvancedSearch setSearchItems={setSearchItems} isDisabled={isLoading} />
      <div className={s.animes}>
        {isLoading
          ? PRELOAD.map((el) => <div key={el} className={cn(s.animeItemSkeleton, 'skeleton')} />)
          : data.pages.map((page, i) => (
              <Fragment key={i}>
                {page.error
                  ? 'erorr'
                  : page.map((el) => (
                      <AnimeItem
                        title={el.names.ru}
                        episodes={el.torrents.episodes.string}
                        description={el.description}
                        posters={el.posters}
                        code={el.code}
                        key={`Catalog:${el.code}`}
                      />
                    ))}
              </Fragment>
            ))}
      </div>
      {!isLoading && (
        <LoadMore
          ref={ref}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
        />
      )}
    </section>
  );
};
