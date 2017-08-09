import React, { Component } from 'react';
import './App.css';

import ProgressBar from './components/PorgressBar/ProgressBar';
import InputLabel from './components/Label/InputLabel';
import CommentList from './components/CommentList/CommentList'

const comment = `This is a comment.  There are many like it but this one is my mine.
This is a comment.  There are many like it but this one is my mine
This is a comment.  There are many like it but this one is my mine`
const name = 'Mary Freedman'
const date = new Date()
const comments = [1,2,3,4,5,6,7].map(() => ({
  comment: comment.slice(0),
  name: name.slice(0),
  date: new Date(),
  type: Math.random() > 0.5 ? 'public' : 'private'
}))

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{width: '50%'}}>
          <CommentList comments={comments} showPrevious={true} />
        </div>
      </div>
    );
  }
}

export default App;
