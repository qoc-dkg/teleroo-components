import React from 'react'

export default props => {
  const extractTime = date => {
    return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
  }
  return (
    <span className="timeOfDay">{extractTime(props.date)}</span>
  )
}
