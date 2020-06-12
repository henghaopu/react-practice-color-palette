import React, { Component } from 'react';
import Slider from 'rc-slider';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
import NativeSelect from '@material-ui/core/NativeSelect';
// order counts
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      format: this.props.format,
    };

    this.changeFormat = this.changeFormat.bind(this);
  }

  changeFormat(e) {
    this.setState({ format: e.target.value });
    this.props.changeFormat(e.target.value);
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <nav className='Navbar'>
        <div className='logo'>
          <a href='#'>Color Palettes</a>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              tabindex={1}
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className='select-container'>
          <NativeSelect value={format} onChange={this.changeFormat}>
            <option value='hex'>HEX - #ffffff</option>
            <option value='rgb'>RGB - rgb(255, 255, 255)</option>
            <option value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</option>
          </NativeSelect>
        </div>
      </nav>
    );
  }
}

export default Navbar;