import React from 'react'
import s from './Heading.module.scss'

type PropsType = {
  type: string
  text: string
}

export const Heading: React.FC<PropsType> = ({ type, text }) => {
  return React.createElement(type, { className: s.heading }, text)
}
