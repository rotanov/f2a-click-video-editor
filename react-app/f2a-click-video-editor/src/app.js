import React, { Component } from 'react';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app-root-wrapper">
      <div className="app-root">
        <div className="app-header">
          PRESS F2-A-CLICK TO WIN
        </div>
        <div className="video-panel-root">
          VIDEO
        </div>
        <div className="cutlist-panel-root">
          CUTLIST
        </div>
        <div className="cut-panel-root">
          CUT
        </div>
      </div>
      </div>
    );
  }
}

export default App;


        // <input type="file" accept="video/*"/>
        // <video controls autoPlay></video>
