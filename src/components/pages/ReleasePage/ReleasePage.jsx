import cn from 'classnames';
import { useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Heading, PlayerList, Text } from 'src/components/common';
import { getTitle } from 'src/api/titleService';
import s from './ReleasePage.module.scss';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { ERROR_CODE_500 } from 'src/constants';

const MOCKS_FOR_SKELETON = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12];

export const ReleasePage = () => {
  const params = useParams().titleCode;

  const {
    data: title,
    error: queryError,
    isLoading,
  } = useQuery(['Release', params], () => getTitle(params));
  const error = queryError || title?.error?.code;

  if (error) return <ErrorPage errorCode={typeof error === 'number' ? error : ERROR_CODE_500} />;

  const description = title?.description
    ? title.description.replaceAll('\n', '<br />').replaceAll('<br /><br />', '<br />')
    : 'Описание отсутствует';

  const player = useMemo(() => title?.player, [isLoading, params]);

  useEffect(() => {
    document.title = title?.names[0];
  }, [title]);

  return (
    <section className={s.content}>
      <div className={s.headings}>
        {isLoading ? (
          <div className={cn('skeleton', s.skeletonHeader)} />
        ) : (
          title.names.map((heading) => (
            <Heading type="h3" key={heading} content={heading} className={s.heading} />
          ))
        )}
      </div>

      <div className={s.main}>
        <div className={s.wrapper}>
          <div className={s.info}>
            {isLoading ? (
              MOCKS_FOR_SKELETON.map((el) => (
                <div key={el} className={cn('skeleton', 'skeleton-text', s.skeletonText)} />
              ))
            ) : (
              <>
                {title.time && (
                  <Text>
                    <Text type="span" bold={true} className={s.bold}>
                      Сезон:
                    </Text>{' '}
                    {title.time.season} {title.time.year}
                  </Text>
                )}
                {title.type && (
                  <Text>
                    <Text type="span" bold={true} className={s.bold}>
                      Тип:
                    </Text>{' '}
                    {title.type}
                  </Text>
                )}
                {title.genres && (
                  <Text>
                    <Text type="span" bold={true} className={s.bold}>
                      Жанры:
                    </Text>{' '}
                    {title.genres.join(', ')}
                  </Text>
                )}
                {title.team.map(({ type, members }) => (
                  <Text key={type}>
                    <Text type="span" bold={true} className={s.type}>
                      {type}:
                    </Text>{' '}
                    {members.join(', ')}
                  </Text>
                ))}
                <Text
                  className={s.description}
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                />
              </>
            )}
          </div>
          {isLoading ? (
            <div className={cn('skeleton', s.poster)} />
          ) : (
            <img
              className={cn(s.poster, 'skeleton')}
              src={title.poster}
              alt={`Poster ${title[0]}`}
            />
          )}
        </div>
        {isLoading ? (
          <div className={s.bottomSkeleton}>
            <div className={s.episodesSkeleton}>
              {MOCKS_FOR_SKELETON.map((el) => (
                <div key={el} className="skeleton" />
              ))}
            </div>
            <div className={cn(s.playerSkeleton, 'skeleton')}></div>
          </div>
        ) : (
          <PlayerList player={player} />
        )}
      </div>
    </section>
  );
};
