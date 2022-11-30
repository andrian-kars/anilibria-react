import cn from 'classnames';
import { useContext, useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Heading, PlayerList, Text, ButtonSvg } from 'src/components/common';
import { getTitle } from 'src/api/titleService';
import s from './ReleasePage.module.scss';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { ERROR_CODE_500 } from 'src/constants';
import { ReleaseContext } from 'src/context';

const MOCKS_FOR_SKELETON = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12];

export const ReleasePage = () => {
  const params = useParams().titleCode;

  const { favouriteAnimes, releaseActions } = useContext(ReleaseContext);
  const isAnimeInFav = Boolean(favouriteAnimes.find((anime) => anime.titleCode === params));
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
  const titleName = title ? title.names[0] : 'Загрузка...';

  useEffect(() => {
    document.title = titleName;
  }, [title]);

  function handleSaveClick() {
    isAnimeInFav
      ? releaseActions.removeFavourite(params)
      : releaseActions.setFavouriteToListTop({ titleName, titleCode: params });
  }

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
                <ButtonSvg
                  className={s.button}
                  onClick={handleSaveClick}
                  title={isAnimeInFav ? 'Забрати з вибраних' : 'Добавити в вибрані'}
                >
                  <svg
                    clipRule="evenodd"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {isAnimeInFav ? (
                      <path
                        d="m14.121 19.337c-.467.453-.942.912-1.424 1.38-.194.189-.446.283-.697.283s-.503-.094-.697-.283c-4.958-4.813-9.303-8.815-9.303-12.54 0-3.348 2.582-5.177 5.234-5.177 1.831 0 3.636.867 4.766 2.563 1.125-1.688 2.935-2.554 4.771-2.554 2.649 0 5.229 1.815 5.229 5.168 0 .681-.144 1.37-.411 2.072-.375-.361-.798-.673-1.258-.925.113-.393.169-.773.169-1.147 0-2.52-1.933-3.668-3.729-3.668-1.969 0-3.204 1.355-4.159 2.694-.141.197-.369.314-.612.314-.243-.001-.471-.119-.611-.317-.953-1.347-2.165-2.699-4.155-2.7-.985 0-1.937.346-2.61.95-.735.658-1.124 1.602-1.124 2.727 0 2.738 3.046 5.842 8.5 11.127.346-.336.682-.663 1.007-.981.327.383.701.724 1.114 1.014zm3.379-9.337c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm.707 4.5s.642-.642 1.061-1.061c.187-.187.187-.519 0-.707-.188-.187-.52-.187-.707 0-.419.419-1.061 1.061-1.061 1.061s-.642-.642-1.061-1.061c-.187-.187-.519-.187-.707 0-.187.188-.187.52 0 .707.419.419 1.061 1.061 1.061 1.061s-.642.642-1.061 1.061c-.187.187-.187.519 0 .707.188.187.52.187.707 0 .419-.419 1.061-1.061 1.061-1.061s.642.642 1.061 1.061c.187.187.519.187.707 0 .187-.188.187-.52 0-.707-.419-.419-1.061-1.061-1.061-1.061z"
                        fillRule="nonzero"
                      />
                    ) : (
                      <path
                        d="m14.121 19.337c-.467.453-.942.912-1.424 1.38-.194.189-.446.283-.697.283s-.503-.094-.697-.283c-4.958-4.813-9.303-8.815-9.303-12.54 0-3.348 2.582-5.177 5.234-5.177 1.831 0 3.636.867 4.766 2.563 1.125-1.688 2.935-2.554 4.771-2.554 2.649 0 5.229 1.815 5.229 5.168 0 .681-.144 1.37-.411 2.072-.375-.361-.798-.673-1.258-.925.113-.393.169-.773.169-1.147 0-2.52-1.933-3.668-3.729-3.668-1.969 0-3.204 1.355-4.159 2.694-.141.197-.369.314-.612.314-.243-.001-.471-.119-.611-.317-.953-1.347-2.165-2.699-4.155-2.7-.985 0-1.937.346-2.61.95-.735.658-1.124 1.602-1.124 2.727 0 2.738 3.046 5.842 8.5 11.127.346-.336.682-.663 1.007-.981.327.383.701.724 1.114 1.014zm3.38-9.335c2.58 0 4.499 2.107 4.499 4.499 0 2.58-2.105 4.499-4.499 4.499-2.586 0-4.5-2.112-4.5-4.499 0-2.406 1.934-4.499 4.5-4.499zm.5 3.999v-1.5c0-.265-.235-.5-.5-.5-.266 0-.5.235-.5.5v1.5h-1.5c-.266 0-.5.235-.5.5s.234.5.5.5h1.5v1.5c0 .265.234.5.5.5.265 0 .5-.235.5-.5v-1.5h1.499c.266 0 .5-.235.5-.5s-.234-.5-.5-.5z"
                        fillRule="nonzero"
                      />
                    )}
                  </svg>
                </ButtonSvg>
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
          <PlayerList player={player} titleName={titleName} titleCode={title.code} />
        )}
      </div>
    </section>
  );
};
