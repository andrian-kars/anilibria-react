import s from './Side.module.scss';
import { useContext, useEffect, useCallback, Fragment } from 'react';
import cn from 'classnames';
import { SidesContext } from 'src/context/SidesContext';
import { useInfiniteQuery } from 'react-query';
import { getAnimeListForSide } from 'src/api/titleService';
import { AnimeItem, LoadMore } from 'src/components/common';
import { useInView } from 'react-intersection-observer';

const PRELOAD = [0, 1, 2, 3, 4, 5, 6];

export const Side = () => {
  const { ref, inView } = useInView();
  const { sides, sidesActions } = useContext(SidesContext);
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['side'],
      ({ pageParam = 0 }) => getAnimeListForSide({ after: pageParam }),

      {
        getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
        getNextPageParam: (_, allPages) => allPages.length * 12,
      },
    );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const handleModalClose = useCallback(() => sidesActions.triggerMobileSidesActive(false), []);

  return (
    <>
      <aside className={cn(s.side, sides.isMobileSidesActive && s.showMobile)}>
        <div className={s.animes}>
          {isLoading ? (
            PRELOAD.map((el) => <div key={el} className={cn(s.animeItem, 'skeleton')} />)
          ) : error ? (
            <p>{error}</p>
          ) : (
            <>
              {data.pages.map((page, i) => (
                <Fragment key={i}>
                  {page.map((el, i) => (
                    <AnimeItem
                      title={el.names.ru}
                      episodes={el.torrents.series.string}
                      description={el.description}
                      posters={el.posters}
                      code={el.code}
                      className={s.animeItem}
                      torrent={el.torrents.list[0].torrent_id || false}
                      key={`side ${i}:${el.code}`}
                      onClick={handleModalClose}
                    />
                  ))}
                </Fragment>
              ))}
              <LoadMore
                ref={ref}
                hasNextPage={hasNextPage}
                isFetchingNextPage={isFetchingNextPage}
                fetchNextPage={fetchNextPage}
              />
            </>
          )}
        </div>
      </aside>
      {sides.isMobileSidesActive && <div className={s.overlay} onClick={handleModalClose} />}
    </>
  );
};
