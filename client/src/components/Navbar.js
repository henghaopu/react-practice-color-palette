import React, { Component } from 'react';
import Slider from 'rc-slider';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
import NativeSelect from '@material-ui/core/NativeSelect';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
// order counts
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.closeSnackbar = this.closeSnackbar.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  handleChange(e) {
    this.props.changeFormat(e);
    this.setState({ open: true });
  }

  render() {
    const { level, changeLevel, format, changeFormat } = this.props;
    const { open } = this.state;
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
          <NativeSelect value={format} onChange={this.handleChange}>
            <option value='hex'>HEX - #ffffff</option>
            <option value='rgb'>RGB - rgb(255, 255, 255)</option>
            <option value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</option>
          </NativeSelect>
        </div>

        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id='message-id'>
              Format changed to {format.toUpperCase()}
            </span>
          }
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          action={
            <IconButton
              onClick={this.closeSnackbar}
              color='inherit'
              key='close'
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          }
          onClose={this.closeSnackbar}
        />
      </nav>
    );
  }
}

export default Navbar;
