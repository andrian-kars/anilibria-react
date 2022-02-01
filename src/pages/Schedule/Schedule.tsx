import cn from 'classnames'
import { useEffect } from 'react'
import { AnimeItem } from '../../components/common'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchSchedule } from '../../store/reducers/ScheduleSlice'
import { animeList } from '../../types'
import s from './Schedule.module.scss'

export const Schedule: React.FC = () => {
  const week = ['ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА', 'ВОСКРЕСЕНЬЕ']
  const { schedule, isLoading, error } = useAppSelector((state) => state.scheduleReducer)
  const dispatch = useAppDispatch()

  console.log('Schedule: render')

  useEffect(() => {
    !schedule && dispatch(fetchSchedule())
  }, [dispatch, schedule])

  // TODO: error
  return (
    <section className={s.content}>
      <h3 className={s.title}>РАСПИСАНИЕ ВЫХОДА СЕРИЙ В ОЗВУЧКЕ АНИЛИБРИИ*</h3>
      <p className={s.description}>
        *новые серии выходят в этот день недели +-1 день. В начале сезона расписание может не
        соответствовать действительности. Если серии задерживаются — это будет указано в статусе
        релиза (над постером).
      </p>
      <div>
        {isLoading && week.map((el) => <DaySkeleton key={el} day={el} />)}
        {error && <h1>{error}</h1>}
        {schedule &&
          schedule.map((el) => <Day day={week[el.day]} key={week[el.day]} list={el.list} />)}
      </div>
    </section>
  )
}

type dayType = {
  day: string
  list: animeList
}

const Day: React.FC<dayType> = ({ day, list }) => {
  return (
    <div>
      <p className={s.day}>{day}</p>
      <div className={s.animes}>
        {list.map((el) => (
          <AnimeItem
            title={el.names.ru}
            episodes={el.torrents.series.string}
            description={el.description}
            posters={el.posters}
            descriptionLength={99}
            code={el.code}
            className={s.animeItem}
            key={`${day}:${el.code}`}
          />
        ))}
      </div>
    </div>
  )
}

const DaySkeleton: React.FC<{ day: string }> = ({ day }) => {
  const mockAnimes = [0, 1, 2, 3]
  return (
    <div>
      <p className={s.day}>{day}</p>
      <div className={s.animes}>
        {mockAnimes.map((el) => (
          <div key={el} className={cn(s.animeItem, 'skeleton')} />
        ))}
      </div>
    </div>
  )
}
