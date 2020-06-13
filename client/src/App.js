import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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

  findPalette(id) {
    return this.state.palettes.find((palette) => palette.id === id);
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div>
        {!isLoading ? (
          <Switch>
            <Route exact path='/' render={() => <h1>Palette List</h1>} />
            <Route
              exact
              path='/palette/:id'
              render={(routeProps) => (
                <Palette
                  {...generatePalette(
                    this.findPalette(routeProps.match.params.id)
                  )}
                />
              )}
            />
          </Switch>
        ) : (
          'Loading...'
        )}
      </div>
    );
  }
}

export default App;
