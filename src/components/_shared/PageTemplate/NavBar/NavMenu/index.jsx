import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import pages from '../../../../../constants/pages';


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

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <Hidden smUp>
          <Button
            className={classes.button}
            aria-label="More"
            aria-owns={anchorEl ? 'long-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MenuIcon className={classes.icon} />
            Menu
          </Button>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 8,
                width: 200,
              },
            }}
          >
            {pages.map(options => (
              <MenuItem
                key={options.name}
                component="a"
                href={options.href}
                onClick={this.handleClose}
              >
                {options.name}
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
