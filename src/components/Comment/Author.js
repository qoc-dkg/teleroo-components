import React from 'react'

export default props => {
  return (
    <div className="author">
      <i className="fa fa-comment"></i>
      <span>{props.name}</span>
    </div>
  )
}
