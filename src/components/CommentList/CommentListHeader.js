import React from 'react'
import {LinkButton} from '../Button/Button'

class CommentListHeader extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      ...props
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      ...nextProps
    })
  }
  render () {
    return (
      <div className="commentListHeader flex justify-between">
        <div>
          <LinkButton name={`Public (${this.props.publicCount})`}
            onClick={this.props.onPublicClick}
            active={this.props.publicActive} /> |
          <LinkButton name={`Private (${this.props.privateCount})`}
            onClick={this.props.onPrivateClick}
            active={this.props.privateActive} />
        </div>
        <div>
          <LinkButton onClick={this.props.onShowPreviousClick}
            name={`${this.props.showPrevious ? 'Hide' : 'View'} Previous Comments`} />
        </div>
      </div>
    )
  }
}

export default CommentListHeader
