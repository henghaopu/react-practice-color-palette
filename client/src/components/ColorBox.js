import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false,
    };
  }

  render() {
    const { backgroundColor, name } = this.props;
    return (
      <div className='ColorBox' style={{ backgroundColor }}>
        <div className='copy-container'>
          <CopyToClipboard text={backgroundColor}>
            <button className='copy-button'>Copy</button>
          </CopyToClipboard>

          <div className='box-content'>
            <span tabIndex='0'>{name}</span>
          </div>
        </div>

        <span className='see-more' tabIndex='0'>
          More
        </span>

        <div className='copy-overlay' style={{ backgroundColor }}></div>
      </div>
    );
  }
}

export default ColorBox;
