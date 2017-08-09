import React from 'react'
import Author from './Author'
import TimeOfDay from './TimeOfDay'

export const CommentTitle = props => {
  return (
    <div className="commentTitle flex">
      <Author name={props.name}/>
      <TimeOfDay date={props.date} />
    </div>
  )
}

export const Comment = props => {
  return (
    <div className="comment">
      <CommentTitle {...props} />
      <p>{props.comment}</p>
    </div>
  )
}
