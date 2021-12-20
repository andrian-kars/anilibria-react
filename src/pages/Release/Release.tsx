import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PlayerList } from '../../components'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchTitle } from '../../store/reducers/ReleaseSlice'

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

  const dispatch = useAppDispatch()
  const params = useParams()

  console.log('Release: render')

  useEffect(() => {
    params.titleCode && params.titleCode !== title?.code && dispatch(fetchTitle(params.titleCode))
  }, [params.titleCode])

  return error ? (
    <span>{error}</span>
  ) : !title || isLoading ? (
    <span>Loading...</span>
  ) : (
    <section className={s.content}>
      <div className={s.info}>
        <div className={s.textInfo}>
          <h3>
            {title.names.ru.length < 30 || title.names.en.length < 30 ? (
              `${title.names.ru} / ${title.names.en}`
            ) : (
              <>
                {title.names.ru} <br /> {title.names.en}
              </>
            )}
          </h3>
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
            dangerouslySetInnerHTML={{ __html: title.description.replaceAll('\n', '<br />') }}
          />
        </div>
        <div
          className={s.image}
          style={{
            backgroundImage: `url(https://www.anilibria.tv/${title.poster.url})`,
          }}
        >
          <p>Новая серия {everyDay[title.season.week_day]}</p>
        </div>
      </div>
      <PlayerList player={title.player} />
    </section>
  )
}
