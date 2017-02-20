import React, { Component } from 'react';
import './app.css';

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
          <div className="cutlist-panel-root">
            CUTLIST
          </div>
        </div>
        <div className="cut-panel-root">
          CUT
        </div>
      </div>
    );
  }
}

export default App;
