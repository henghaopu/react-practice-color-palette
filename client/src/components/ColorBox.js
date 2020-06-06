import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
  render() {
    const { backgroundColor, name } = this.props;
    return (
      <div className='ColorBox' style={{ backgroundColor }}>
        <div className='copy-container'>
          <button className='copy-button'>Copy</button>
          <div className='box-content'>
            <span>{name}</span>
          </div>
        </div>
        <span className='see-more'>More</span>
      </div>
    );
  }
}

export default ColorBox;
