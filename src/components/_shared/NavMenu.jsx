import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';

const options = [
  'Home',
  'About',
  'Services',
  'Testimonials',
  'Resources',
  'Location',
  'Contact',
];

const ITEM_HEIGHT = 48;

const styles = theme => ({
  button: {
    marginLeft: theme.spacing.unit,
    color: theme.palette.secondary.A100,
  },
  icon: {
    padding: theme.spacing.unit,
  },
});

class NavMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const open = Boolean(this.state.anchorEl);

    return (
      <div>
        <Hidden smUp>
          <Button
            color="contrast"
            className={classes.button}
            aria-label="Menu"
            aria-owns={open ? 'long-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MenuIcon className={classes.icon} />
            Menu
          </Button>
          <Menu
            id="long-menu"
            anchorEl={this.state.anchorEl}
            open={open}
            onRequestClose={this.handleRequestClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200,
              },
            }}
          >
            {options.map(option => (
              <MenuItem key={option} href={option} onClick={this.handleRequestClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Hidden>
      </div>
    );
  }
}

NavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavMenu);
