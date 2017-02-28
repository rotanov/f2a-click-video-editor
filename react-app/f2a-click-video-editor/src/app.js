import React, { Component } from 'react';
import './app.css';
import Cutlist from './cutlist.js'

class App extends Component {
  URL = window.URL || window.webkitURL;
  displayMessage(message, isError) {
    console.log(message);
  }
  playSelectedFile(event) {
    console.log(event);
    let file = event.target.files[0];
    let type = file.type;
    let videoNode = document.querySelector('video');
    let canPlay = videoNode.canPlayType(type);
    if (canPlay === '') {
      canPlay = 'no';
    }
    let message = 'Can play type "' + type + '": ' + canPlay;
    let isError = canPlay === 'no';
    this.displayMessage(message, isError);
    if (isError) {
      return;
    }
    let fileURL = URL.createObjectURL(file);
    videoNode.src = fileURL;
  }
  render() {
    return (
      <div className="app-root">
        <div className="app-header">
          PRESS F2-A-CLICK TO WIN
          <input type="file" accept="video/*" onChange={(e) => this.playSelectedFile(e)}/>
        </div>
        <div className="app-root-middle-row">
          <div className="video-panel-root">
            <video controls autoPlay className="video-player"></video>
          </div>
          <Cutlist cuts={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 , 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]}/>
        </div>
        <div className="cut-panel-root">
          CUT
        </div>
      </div>
    );
  }
}

export default App;
