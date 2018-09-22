import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import compose from 'recompose/compose';
import NavButtons from './NavButtons';
import NavMenu from './NavMenu';

const styles = {
  fixed: {
    height: 44,
    padding: 0,
    position: 'fixed',
    top: 0,
    zIndex: 999,
  },
  notFixed: {
    height: 44,
    padding: 0,
  },
  gutters: {
    minHeight: 44,
    padding: 0,
  },
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { fixed: false };
    this.getFixHeight = this.getFixHeight.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  getFixHeight() {
    const { width } = this.props;
    return ((isWidthUp('md', width) ? 247 : 187));
  }

  handleScroll() {
    this.setState(window.scrollY > this.getFixHeight() ? { fixed: true } : { fixed: false });
  }

  render() {
    const { classes } = this.props;
    const { fixed } = this.state;

    return (
      <AppBar
        className={fixed ? classes.fixed : classes.notFixed}
        position="static"
        color="primary"
      >
        <Toolbar classes={{ gutters: classes.gutters }}>
          <NavButtons />
          <NavMenu />
        </Toolbar>
      </AppBar>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(
  withStyles(styles, { name: 'NavBar' }),
  withWidth(),
)(NavBar);
