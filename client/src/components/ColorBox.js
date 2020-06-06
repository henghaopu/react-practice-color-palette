import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ColorBox extends Component {
  render() {
    const { backgroundColor, name } = this.props;
    return (
      <div className='ColorBox' style={{ backgroundColor }}>
        <div className='copy-container'>
          <CopyToClipboard text={backgroundColor}>
            <button className='copy-button'>Copy</button>
          </CopyToClipboard>
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
