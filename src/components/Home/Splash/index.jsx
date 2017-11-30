import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import BristleconePine from './IMG_0447.jpg';


const styles = theme => ({
  root: {
    display: 'table',
    width: '100%',
    height: 475,
    [theme.breakpoints.down('md')]: {
      width: '100% !important', // Overrides inline-style
      height: 400,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 325,
    },
    padding: '0',
    background: {
      repeat: 'no-repeat',
      position: 'center center',
      size: 'cover',
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
        <Typography type="display4" className={classes.content}>
          Be Strong<br />
          Be Resilient<br />
          Be Well
        </Typography>
      </Hidden>
      <Hidden smUp>
        <Typography type="display3" className={classes.content}>
          Be Strong<br />
          Be Resilient<br />
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
