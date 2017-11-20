import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import BristleconePine from './forest.JPG';


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
      position: 'center bottom',
      size: 'cover',
    },
  },
  content: {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '50px',
  },
});

function Splash(props) {
  const { classes } = props;

  return (
    <div className={classes.root} style={{ backgroundImage: `url(${BristleconePine})` }}>
      <Typography type="headline" className={classes.content}>
        Be Strong,<br />
        Be Resilient,<br />
        Be Well
      </Typography>
    </div>
  );
}

Splash.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Splash);
