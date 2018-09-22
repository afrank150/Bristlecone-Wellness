import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import BristleconePine from './IMG_0792.JPG';


const styles = theme => ({
  root: {
    display: 'table',
    width: '100%',
    height: 475,
    padding: '0',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    // backgroundImage: 'linear-gradient(#c0dece, transparent) !important',
    [theme.breakpoints.down('md')]: {
      width: '100% !important', // Overrides inline-style
      height: 400,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 325,
    },
  },
  content: {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
  },
});

function Splash(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={{ backgroundImage: `url(${BristleconePine})` }}>
      <Hidden xsDown>
        <Typography variant="display4" className={classes.content}>
          Be Strong
          <br />
          Be Resilient
          <br />
          Be Well
        </Typography>
      </Hidden>
      <Hidden smUp>
        <Typography variant="display3" className={classes.content}>
          Be Strong
          <br />
          Be Resilient
          <br />
          Be Well
        </Typography>
      </Hidden>
    </div>
  );
}

Splash.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Splash);
