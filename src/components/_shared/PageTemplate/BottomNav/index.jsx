import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import logo2 from './logo2.svg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary[300],
    paddingBottom: theme.spacing.unit * 3,
  },
  img: {
    height: '300px',
  },
  credit: {
    color: 'white',
    whiteSpace: 'nowrap',
    textAlign: 'center',
  },
});

function BottomNav(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        alignItems="center"
      >
        <Grid item xs={10}>
          <a href="/">
            <img
              src={logo2}
              className={classes.img}
              alt="logo"
            />
          </a>
        </Grid>
        <Grid item xs={10}>
          <Hidden xsDown>
            <Typography variant="caption" className={classes.credit}>
              {'\u00A92023 Bristlecone Wellness, LLC \u00b7 Site By Alexander Frank'}
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="caption" className={classes.credit}>
              {'\u00A92023 Bristlecone Wellness, LLC'}
            </Typography>
            <Typography variant="caption" className={classes.credit}>
              {'Site By Alexander Frank'}
            </Typography>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);
