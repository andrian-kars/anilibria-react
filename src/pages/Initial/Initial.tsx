import cn from 'classnames'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchYoutube } from '../../store/reducers/InitialSlice'
import s from './Initial.module.scss'

type propsType = {
  // href: string
}

export const Initial: React.FC<propsType> = () => {
  const { youtube, isLoading, error } = useAppSelector((state) => state.initialReducer)
  const dispatch = useAppDispatch()

  const preLoad = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  console.log('Initial: render')

  useEffect(() => {
    !youtube && dispatch(fetchYoutube())
  }, [dispatch, youtube])
  // TODO: error
  return (
    <section className={s.content}>
      {isLoading && preLoad.map((el) => <div key={el} className={cn(s.link, 'skeleton')} />)}
      {error && <h1>{error}</h1>}
      {youtube
        ?.map((el) => {
          return (
            <YoutubeItem
              key={`${el.id} - ${el.title}`}
              id={el.youtube_id}
              image={el.image}
              title={el.title}
            />
          )
        })
        .reverse()}
    </section>
  )
}

type YoutubeItemPropsType = {
  id: string
  image: string
  title: string
}

const YoutubeItem: React.FC<YoutubeItemPropsType> = ({ id, image, title }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <a
      style={{ backgroundImage: `url(${image})` }}
      className={cn(s.link, !loaded && 'skeleton')}
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noreferrer"
      title={title}
    >
      <img onLoad={() => setLoaded(true)} src={image} alt={title} />
    </a>
  )
}