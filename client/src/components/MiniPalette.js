import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  // define class name
  root: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    position: 'relative',
    overflow: 'hidden',
    padding: '0.6rem',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  colors: {
    backgroundColor: 'lightgrey',
    height: '150px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0',
    color: 'black',
    paddingTop: '0.6rem',
    fontSize: '1rem',
    position: 'relative',
  },
  emoji: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem',
  },
  miniColor: {
    display: 'inline-block',
    height: '25%',
    width: '20%',
    // margin: '0 auto',
    // position: 'relative',
    marginBottom: '-3.5px',
  },
};

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, goToPalette } = props;

  return (
    <div className={classes.root} onClick={goToPalette}>
      <div className={classes.colors}>
        {/* mini color boxes */}
        {colors.map(({ color, name }) => (
          <div
            key={name}
            className={classes.miniColor}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>

      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

// scoped css: map the class names in styles to the unique class names
export default withStyles(styles)(MiniPalette);
