import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchYoutube } from '../../store/reducers/InitialSlice'
import s from './Initial.module.scss'

type propsType = {
  // href: string
}

export const Initial: React.FC<propsType> = () => {
  const { youtube, isLoading, error } = useAppSelector((state) => state.initialReducer)
  const dispatch = useAppDispatch()

  console.log('Initial: render')

  useEffect(() => {
    !youtube && dispatch(fetchYoutube())
  }, [dispatch, youtube])
  // TODO: loading, error
  return (
    <section className={s.content}>
      {isLoading && <h1>Loading...</h1>}
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
  return (
    <a
      style={{ backgroundImage: `url(${image})` }}
      className={s.link}
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noreferrer"
      title={title}
    />
  )
}
