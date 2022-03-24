import cn from 'classnames'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { PlayerList } from 'src/components'
import { Heading } from 'src/components/common'
import { useAppDispatch, useAppSelector } from 'src/hooks/redux'
import { fetchTitle } from 'src/store/reducers/ReleaseSlice'
import { truncateString } from 'src/utils/truncateString'

import s from './Release.module.scss'

export const Release: React.FC = () => {
  const everyDay = [
    'каждый понедельник',
    'каждый вторник',
    'каждую среду',
    'каждый четверг',
    'каждую пятницу',
    'каждую субботу',
    'каждое воскресенье',
  ]
  const { title, isLoading, error } = useAppSelector((state) => state.releaseReducer)
  const skeletonMock = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]

  const dispatch = useAppDispatch()
  const params = useParams().titleCode
  const navigate = useNavigate()

  console.log('Release: render')

  useEffect(() => {
    params &&
      (!title || params !== title.code) &&
      dispatch(fetchTitle({ code: params, nav: navigate }))
  }, [params])

  const [loaded, setLoaded] = useState(false)

  return error ? (
    <span>{error}</span>
  ) : (
    <section className={s.content}>
      <div className={s.info}>
        {isLoading || !title ? (
          <div className={s.textInfo}>
            {skeletonMock.map((el) => (
              <div key={el} className={cn('skeleton', 'skeleton-text')} />
            ))}
          </div>
        ) : (
          <div className={s.textInfo}>
            <Heading
              type="h3"
              text={
                title.names.ru.length < 30 || title.names.en.length < 30 ? (
                  `${title.names.ru} / ${title.names.en}`
                ) : (
                  <>
                    {title.names.ru} <br /> {title.names.en}
                  </>
                )
              }
            />
            <p>
              <span className={s.bold}>Сезон:</span> {title.season.year} {title.season.string}
            </p>
            <p>
              <span className={s.bold}>Тип:</span> {title.type.full_string}
            </p>
            <p>
              <span className={s.bold}>Жанры:</span> {title.genres.join(', ')}
            </p>
            <p>
              <span className={s.bold}>Озвучка:</span> {title.team.voice.join(', ')}
            </p>
            <p>
              <span className={s.bold}>Тайминг:</span> {title.team.timing.join(', ')}
            </p>
            <p>
              <span className={s.bold}>Работа над субтитрами:</span>{' '}
              {title.team.translator.join(', ')}
            </p>
            <p
              className={s.description}
              dangerouslySetInnerHTML={{
                __html: title.description
                  ? truncateString(title.description.replaceAll('\n', '<br />'), 500)
                  : 'Описание отсутствует',
              }}
            />
          </div>
        )}
        {isLoading || !title ? (
          <div className={cn(s.image, 'skeleton')}></div>
        ) : (
          <div className={cn(s.image, loaded && 'skeleton')}>
            <img
              onLoad={() => setLoaded(true)}
              src={`https://www.anilibria.tv/${
                title.posters.original?.url || title.posters.medium?.url || title.posters.small?.url
              }`}
              alt={title.code}
            />
            {title.announce ? (
              <p>{title.announce}</p>
            ) : title.status.code === 1 ? (
              <p>Новая серия {everyDay[title.season.week_day]}</p>
            ) : null}
          </div>
        )}
      </div>
      {isLoading || !title ? (
        <div className={s.bottomSkeleton}>
          <div className={s.episodesSkeleton}>
            {skeletonMock.map((el) => (
              <div key={el} className="skeleton" />
            ))}
          </div>
          <div className={cn(s.playerSkeleton, 'skeleton')}></div>
        </div>
      ) : (
        <PlayerList player={title.player} />
      )}
    </section>
  )
}
