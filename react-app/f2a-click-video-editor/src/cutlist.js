import React, { Component } from 'react';

class CutlistItem extends Component {
  render() {
    return (
      <div className="cutlist-item">
        {this.props.data}
      </div>
    );
  }
}

class Cutlist extends Component {
  render() {
    return (
      <div className="cutlist-wrapper">
        <div className="cutlist-toolbar">
          <div className="cutlist-item">+</div>
          <div className="cutlist-item">-</div>
        </div>
        {this.props.cuts.map(i => {
          return <CutlistItem data={i}/>;
        })}
      </div>
    );
  }
}

export default Cutlist;