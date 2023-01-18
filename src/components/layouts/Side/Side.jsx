import s from './Side.module.scss';
import { useEffect, useCallback, Fragment } from 'react';
import cn from 'classnames';
import { useInfiniteQuery } from 'react-query';
import { getAnimeListForSide } from 'src/api/anilibria/titleService';
import { AnimeItem, LoadMore } from 'src/components/common';
import { useInView } from 'react-intersection-observer';
import layoutStore from 'src/store/layoutStore';
import { observer } from 'mobx-react-lite';

const PRELOAD = [0, 1, 2, 3, 4, 5, 6];

export const Side = observer(() => {
  const { ref, inView } = useInView();
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['side'],
      ({ pageParam = 0 }) => getAnimeListForSide({ after: pageParam > 0 ? pageParam : null }),

      {
        getPreviousPageParam: (firstPage) => firstPage.previousId ?? undefined,
        // studip api bugs again, change 5 to 12 after it gets fexed
        getNextPageParam: (_, allPages) => allPages.length * 5,
      },
    );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const handleModalClose = useCallback(() => layoutStore.triggerMobileSidesActive(false), []);

  return (
    <>
      <aside className={cn(s.side, layoutStore.isMobileSidesActive && s.showMobile)}>
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
                      episodes={el.torrents.episodes.string}
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
      {layoutStore.isMobileSidesActive && <div className={s.overlay} onClick={handleModalClose} />}
    </>
  );
});
