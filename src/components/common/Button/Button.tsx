import cn from 'classnames'
import React from 'react'
import s from './Button.module.scss'

type PropsType = {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  onClick?: () => void
}

export const Button: React.FC<PropsType> = ({
  children,
  className,
  type = 'button',
  disabled,
  onClick,
}) => {
  return (
    <button
      className={cn(s.content, className && className)}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}
