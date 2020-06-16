import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>Color Palettes</h1>
        <ul>
          {palettes.map(({ paletteName, id }) => (
            <li key={paletteName}>
              <Link to={`/palette/${id}`}>{paletteName}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PaletteList;
