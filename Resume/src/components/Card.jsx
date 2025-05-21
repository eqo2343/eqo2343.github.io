import React from 'react'
import classNames from 'classnames';
import './Card.css'


const Card = ({ children, className, ...rest }) => {

    const finalClassNames = classNames(
        'border-gray-500 rounded-2xl p-5 shadow-xl/20 bg-gray-100',
        className
    )

  return (
    <div {...rest} className={finalClassNames}>{children}</div>
  )
}

export default Card