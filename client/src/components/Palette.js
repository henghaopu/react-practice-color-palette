import React, { Component } from 'react';
import ColorBox from './ColorBox';

// order counts
import 'rc-slider/assets/index.css';
import './Palette.css';

import Slider from 'rc-slider';

class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 500,
    };

    this.handleSliderChange = this.handleSliderChange.bind(this);
  }
  handleSliderChange(newLevel) {
    this.setState({ level: newLevel });
  }
  render() {
    const { colors } = this.props;
    const { level } = this.state;
    return (
      <div className='Palette'>
        {/* Navbar */}
        <div className='slider'>
          <Slider
            tabindex={1}
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.handleSliderChange}
          />
        </div>
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
