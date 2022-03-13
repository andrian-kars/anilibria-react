import React from 'react'
import s from './Heading.module.scss'
import cn from 'classnames'

type PropsType = {
  type: string
  text: string | JSX.Element
  className: string
}

export const Heading: React.FC<PropsType> = ({ type, text, className }) => {
  return React.createElement(type, { className: cn(s.heading, className) }, text)
}
