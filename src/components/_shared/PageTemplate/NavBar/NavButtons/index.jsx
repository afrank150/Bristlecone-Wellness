import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import pages from '../../../../../constants/pages';

const styles = theme => ({
  root: {
    marginRight: theme.spacing.unit * 16,
    marginLeft: theme.spacing.unit * 16,
    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing.unit * 4,
      marginLeft: theme.spacing.unit * 4,
    },
  },
  button: {
    color: 'white',
    height: 44,
  },
});

function NavButtons(props) {
  const { classes } = props;
  return (
    <Hidden xsDown>
      <Grid container justify="space-around" className={classes.root}>
        {pages.map(options => (
          <Grid item sm={1} key={options.name}>
            <Button className={classes.button} href={options.href}>
              {options.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Hidden>
  );
}

NavButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavButtons);
