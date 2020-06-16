import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  // define class name
  root: {},
  colors: {},
  title: {},
};

function MiniPalette(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <h5 className={classes.title}></h5>
    </div>
  );
}

// scoped css: map the class names in styles to the unique class names
export default withStyles(styles)(MiniPalette);
