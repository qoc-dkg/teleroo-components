import React from 'react'

export const LinkButton = props => {
  return (
    <button onClick={props.onClick}
      className={`linkButton ${props.active ? 'active' : ''}
        ${props.className ? props.className : ''}`}>
      {props.name}
    </button>
  )
}
