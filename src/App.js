import React, { Component } from 'react';
import './App.css';

import ProgressBar from './components/PorgressBar/ProgressBar';
import InputLabel from './components/Label/InputLabel';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ProgressBar percent={60} width={500} height={100}/>
          <InputLabel htmlFor="password" label="password" required/>
      </div>
    );
  }
}

export default App;
