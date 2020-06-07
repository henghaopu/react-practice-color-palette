import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false,
    };

    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    // optional callback will be called after rendered
    // React recommand to use componentDidUpdate()
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 420 * 3.5);
    });
  }

  render() {
    const { backgroundColor, name } = this.props;
    const { copied } = this.state;

    return (
      <div className='ColorBox' style={{ backgroundColor }}>
        <div className='copy-container'>
          <CopyToClipboard text={backgroundColor} onCopy={this.changeCopyState}>
            <button className='copy-button'>Copy</button>
          </CopyToClipboard>

          <div className='box-content'>
            <span tabIndex='0'>{name}</span>
          </div>
        </div>

        <span className='see-more' tabIndex='0'>
          More
        </span>

        <div
          className={`copy-overlay${copied ? ' show' : ''}`}
          style={{ backgroundColor }}
        ></div>
        <div className={`copy-msg${copied ? ' show' : ''}`}>
          <h1>Copied!</h1>
          <p>{backgroundColor}</p>
        </div>
      </div>
    );
  }
}

export default ColorBox;
