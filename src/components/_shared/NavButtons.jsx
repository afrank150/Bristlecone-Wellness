import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';

const styles = theme => ({
  button: {
    marginRight: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing.unit,
      marginLeft: theme.spacing.unit,
    },
  },
});

function NavButtons(props) {
  const { classes } = props;
  return (
    <Hidden xsDown>
      <Button color="contrast" className={classes.button} href="/">
        home
      </Button>
      <Button color="contrast" className={classes.button} href="/about/">
        about
      </Button>
      <Button color="contrast" className={classes.button} href="/services/">
        services
      </Button>
      <Button color="contrast" className={classes.button} href="/testimonials/">
        testimonials
      </Button>
      <Button color="contrast" className={classes.button} href="/resources/">
        resources
      </Button>
      <Button color="contrast" className={classes.button} href="/location/">
        location
      </Button>
      <Button color="contrast" className={classes.button} href="/contact/">
        contact
      </Button>
    </Hidden>
  );
}

NavButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavButtons);
