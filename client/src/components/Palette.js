import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 500,
      format: 'hex',
    };

    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }

  changeFormat(value) {
    this.setState({ format: value });
  }

  render() {
    const { colors } = this.props;
    const { level, format } = this.state;

    return (
      <div className='Palette'>
        {/* Navbar */}
        <Navbar
          level={level}
          format={format}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
        />

        <div className='Palette-colors'>
          {colors[level].map((color) => (
            <ColorBox
              key={color.name}
              backgroundColor={color[format]}
              name={color.name}
            />
          ))}
        </div>

        {/* footer */}
      </div>
    );
  }
}

export default Palette;
