import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import BristleconePine from './bristlecone.jpg';


const styles = theme => ({
  root: {
    display: 'table',
    width: '100%',
    height: 475,
    [theme.breakpoints.down('md')]: {
      width: '100% !important', // Overrides inline-style
      height: 400,
    },
    padding: '0',
    background: {
      repeat: 'no-repeat',
      position: 'bottom center',
      size: 'cover',
    },
  },
  content: {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
    color: theme.palette.secondary[50],
  },
});

function Splash(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={{ backgroundImage: `url(${BristleconePine})` }}>
      <Typography type="display4" className={classes.content}>TBD</Typography>
    </div>
  );
}

Splash.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Splash);
