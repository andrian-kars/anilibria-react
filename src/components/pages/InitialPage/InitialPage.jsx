import { useIntl } from 'react-intl';
import { useEffectOnce } from 'src/hooks';
import cn from 'classnames';
import s from './InitialPage.module.scss';
import { useInfiniteQuery } from 'react-query';
// import { getYouTube } from 'src/api/youtubeService';
import { getYouTube } from 'src/api/anilibria/youtubeService';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { InitialPageYoutubeItem } from './InitialPageYoutubeItem';
import { ERROR_CODE_500, ANILIBRIA_API_URL } from 'src/constants';
import { useInView } from 'react-intersection-observer';
import { Fragment, useEffect } from 'react';
import { LoadMore } from 'src/components/common';

const PRELOAD = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const InitialPage = () => {
  const { ref, inView } = useInView();
  const { formatMessage } = useIntl();
  const pageTitle = formatMessage({ id: 'title' });

  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      [pageTitle],
      ({ pageParam = 0 }) => getYouTube(pageParam),

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

  useEffectOnce(() => {
    document.title = pageTitle;
  });

  if (error) return <ErrorPage errorCode={ERROR_CODE_500} />;

  return (
    <section className={s.content}>
      <div className={s.youtube}>
        {isLoading
          ? PRELOAD.map((el) => <div key={el} className={cn(s.link, 'skeleton')} />)
          : data.pages.map((page, i) => {
              console.log(page.data);
              return (
                <Fragment key={i}>
                  {page.data.list
                    // removing all streams, since they get deleted from youtube
                    .filter(
                      (el) =>
                        !el.title.toLowerCase().includes('своя игра') &&
                        !el.title.toLowerCase().includes('19:00'),
                    )
                    .map((el) => (
                      <InitialPageYoutubeItem
                        key={`${el.id} - ${el.title}`}
                        id={el.youtube_id}
                        image={`https://cache.libria.fun${el.preview.thumbnail}`}
                        title={el.title}
                      />
                    ))}
                </Fragment>
              );
            })}
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
