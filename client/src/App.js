import React, { Component } from 'react';
import Palette from './components/Palette';
import { getPalettes } from './utils/api';
import { generatePalette } from './utils/colorHelper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true, palettes: [] };
  }
  async componentDidMount() {
    // Load async data
    const palettes = await getPalettes();
    // Update state with new data
    this.setState({
      isLoading: false,
      palettes,
    });
    // Re-render component
  }

  render() {
    const { isLoading, palettes } = this.state;

    return (
      <div>
        {!isLoading ? (
          <Palette {...generatePalette(palettes[4])} />
        ) : (
          'Loading...'
        )}
      </div>
    );
  }
}

export default App;
