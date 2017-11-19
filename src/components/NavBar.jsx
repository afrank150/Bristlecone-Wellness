import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import NavButtons from './NavButtons';
import NavMenu from './NavMenu';

const styles = {
  bar: {
    height: 44,
    padding: 0,
  },
  gutters: {
    minHeight: 44,
    padding: 0,
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <AppBar className={classes.bar} position="static" color="primary">
      <Toolbar classes={{ gutters: props.classes.gutters }}>
        <NavButtons />
        <NavMenu />
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), withWidth())(NavBar);
