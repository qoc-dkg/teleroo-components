import React from 'react'
import {Comment} from '../Comment/Comment'
import TimeOfDay from '../Comment/TimeOfDay'
import CommentListHeader from './CommentListHeader'

class CommentList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      publicActive: true,
      privateActive: false,
      showPrevious: false
    }
  }
  onPublicClick () {
    this.setState({
      publicActive: true,
      privateActive: false
    })
  }
  onPrivateClick () {
    this.setState({
      privateActive: true,
      publicActive: false
    })
  }
  onShowPreviousClick () {
    this.setState(prevState => {
      return {
        showPrevious: !prevState.showPrevious
      }
    })
  }
  render () {
    const comments = this.props.comments || []
    const publicComments = comments.filter(comment => comment.type === 'public')
    const privateComments = comments.filter(comment => comment.type === 'private')
    const filteredComments = this.state.publicActive
      ? publicComments
      : privateComments;

    return (
      <div>
        <CommentListHeader
          onPublicClick={this.onPublicClick.bind(this)}
          onPrivateClick={this.onPrivateClick.bind(this)}
          onShowPreviousClick={this.onShowPreviousClick.bind(this)}
          publicCount={publicComments.length}
          privateCount={privateComments.length}
          publicActive={this.state.publicActive}
          privateActive={this.state.privateActive}
          showPrevious={this.state.showPrevious} />
        <div className="commentList">
          {
            filteredComments.length > 0 &&
              (this.state.showPrevious !== true
                ? <Comment {...filteredComments[0]} />
                : filteredComments
                    .sort((a, b) => (
                      a.date.getTime() - b.date.getTime()
                    ))
                    .map((comment, index) => (
                      <Comment {...comment} key={index} />
                    ))
              )
          }
          {
            filteredComments.length === 0 &&
              <div className="emptyComments flex">
                <span>No comments yet...</span>
                <TimeOfDay date={new Date()} />
              </div>
          }
        </div>
      </div>
    )
  }
}

export default CommentList
