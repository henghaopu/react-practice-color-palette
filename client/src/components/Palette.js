import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 500,
    };

    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }
  render() {
    const { colors } = this.props;
    const { level } = this.state;

    return (
      <div className='Palette'>
        {/* Navbar */}
        <Navbar level={level} changeLevel={this.changeLevel} />

        <div className='Palette-colors'>
          {colors[level].map(({ hex, name }) => (
            <ColorBox key={name} backgroundColor={hex} name={name} />
          ))}
        </div>

        {/* footer */}
      </div>
    );
  }
}

export default Palette;
