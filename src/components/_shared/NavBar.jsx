import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
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
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState(window.scrollY > 110 ? { fixed: true } : { fixed: false });
  }

  render() {
    const { classes } = this.props;
    const bar = this.state.fixed ? classes.fixed : classes.notFixed;

    return (
      <AppBar
        className={bar}
        position="static"
        color="primary"
      >
        <Toolbar classes={{ gutters: this.props.classes.gutters }}>
          <NavButtons />
          <NavMenu />
        </Toolbar>
      </AppBar>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

NavBar.defaultProps = {
  fixed: false,
};

export default compose(withStyles(styles), withWidth())(NavBar);
