import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import PhoneIcon from 'material-ui-icons/Phone';


const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    height: 90,
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      height: 110,
    },
  },
  logo: {
    paddingLeft: theme.spacing.unit * 2,
    color: theme.palette.primary[500],
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4,
    },
  },
  rightItems: {
    whiteSpace: 'nowrap',
  },
  appointment: {
    paddingRight: '8px !important',
  },
  apptButton: {
    border: '1px solid #9e9e9e',
    textTransform: 'none',
  },
  contact: {
    color: theme.palette.grey[500],
    borderLeft: '1px solid #9e9e9e', // theme.palette.grey[500]
    paddingLeft: '8px !important',
  },
  phoneIcon: {
    color: theme.palette.grey[800],
    height: '16px',
    width: '16px',
    verticalAlign: 'middle',
  },
  phoneNumber: {
    whiteSpace: 'nowrap',
    paddingLeft: 3,
  },
});

function TopBar(props) {
  const { classes } = props;

  return (
    <Grid container spacing={8} alignItems="center" className={classes.root} justify="space-around">
      <Grid item lg={9} md={8} sm={7}>
        <Hidden xsDown>
          <Typography type="headline" className={classes.logo}>
            Bristlecone Wellness, LLC
          </Typography>
        </Hidden>
        <Hidden smUp>
          <Typography type="title" className={classes.logo}>
            Bristlecone Wellness, LLC
          </Typography>
        </Hidden>
      </Grid>
      <Grid item lg={3} md={4} sm={5}>
        <Grid container spacing={8} alignItems="center" wrap="nowrap" className={classes.rightItems}>
          <Grid item className={classes.appointment}>
            <Button dense className={classes.apptButton}>
              Make an Appointment
            </Button>
          </Grid>
          <Grid item className={classes.contact}>
            <Grid container spacing={0} alignItems="center" wrap="nowrap">
              <Grid item>
                <PhoneIcon className={classes.phoneIcon} />
              </Grid>
              <Grid item className={classes.phoneNumber}>
                <Typography type="body1">
                  (773) 835-9957
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);
