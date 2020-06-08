import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
  render() {
    const { colors } = this.props;
    return (
      <div className='Palette'>
        {/* Navbar */}

        <div className='Palette-colors'>
          {colors[500].map(({ hex, name }) => (
            <ColorBox key={name} backgroundColor={hex} name={name} />
          ))}
        </div>

        {/* footer */}
      </div>
    );
  }
}

export default Palette;
