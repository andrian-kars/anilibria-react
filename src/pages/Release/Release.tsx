import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
  console.log(params.titleCode)

  useEffect(() => {
    params.titleCode && params.titleCode !== title?.code && dispatch(fetchTitle(params.titleCode))
  }, [params.titleCode])

  console.log(title && title.description)

  // Functions
  // function togglePlay(e: React.MouseEvent) {
  //   const video = e.target as HTMLVideoElement
  //   video.paused ? video.play() : video.pause()
  // }

  // function updateButton() {
  //   const icon = this.paused ? '►' : '❚ ❚'
  //   toggle.textContent = icon
  // }

  // function skip() {
  //   video.currentTime += parseFloat(this.dataset.skip)
  // }

  // function handleRangeUpdate() {
  //   video[this.name] = this.value
  // }

  // function handleProgress() {
  //   const percent = (video.currentTime / video.duration) * 100
  //   progressBar.style.flexBasis = `${percent}%`
  // }

  // function scrub(e) {
  //   const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  //   video.currentTime = scrubTime
  // }

  // TODO: loading, error, no anime found
  return error ? (
    <span>{error}</span>
  ) : !title || isLoading ? (
    <span>Loading...</span>
  ) : (
    <section className={s.content}>
      <div className={s.info}>
        <div className={s.textInfo}>
          <h3>
            {title.names.ru.length < 30 ||
              (title.names.en.length < 30 ? (
                `${title.names.ru} / ${title.names.en}`
              ) : (
                <>
                  {title.names.ru} <br /> {title.names.en}
                </>
              ))}
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
      {/* <div className="player">
        <video
          onClick={(e) => {
            togglePlay(e)
          }}
          className="player__video viewer"
          // src="https://static.libria.fun/videos/ts/9097/0001-hd/playlist.m3u8"
          src="https://de2.libria.fun/videos/ts/9097/0001-hd/playlist.m3u8"
        >
          <track />
        </video>

        <div className="player__controls">
          <div className="progress">
            <div className="progress__filled"></div>
          </div>
          <button className="player__button toggle" title="Toggle Play">
            ►
          </button>
          <input
            type="range"
            name="volume"
            className="player__slider"
            min="0"
            max="1"
            step="0.05"
            value="1"
          />
          <input
            type="range"
            name="playbackRate"
            className="player__slider"
            min="0.5"
            max="2"
            step="0.1"
            value="1"
          />
          <button data-skip="-10" className="player__button">
            « 10s
          </button>
          <button data-skip="25" className="player__button">
            25s »
          </button>
        </div>
      </div> */}
    </section>
  )
}
