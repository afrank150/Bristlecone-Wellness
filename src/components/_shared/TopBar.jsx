import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import PhoneIcon from 'material-ui-icons/Phone';
import LocationOnIcon from 'material-ui-icons/LocationOn';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  topSection: {
    padding: theme.spacing.unit,
    height: 90,
    margin: 0,
    [theme.breakpoints.down('md')]: {
      height: 110,
    },
  },
  logo: {
    paddingLeft: theme.spacing.unit * 3,
    color: theme.palette.primary[500],
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      paddingLeft: 0,
    },
  },
  rightItems: {
    whiteSpace: 'nowrap',
  },
  appointment: {
    paddingRight: '16px !important',
    textAlign: 'right',
  },
  apptButton: {
    border: '1px solid #9e9e9e',
    textTransform: 'none',
  },
  contact: {
    color: theme.palette.grey[500],
    borderLeft: '1px solid #9e9e9e', // theme.palette.grey[500]
    paddingLeft: '16px !important',
  },
  icon: {
    color: theme.palette.grey[700],
    height: '16px',
    width: '16px',
    verticalAlign: 'middle',
    paddingTop: 3,
    paddingBottom: 3,
  },
  iconText: {
    whiteSpace: 'nowrap',
    paddingLeft: 3,
  },
});

function TopBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={8}
        alignItems="center"
        className={classes.topSection}
      >
        <Grid /* Logo tem */
          item
          lg={8}
          md={7}
          xs={12}
        >
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
        <Grid /* Right items */
          item
          lg={4}
          md={5}
          xs={12}
        >
          <Grid
            container
            spacing={0}
            alignItems="center"
            wrap="nowrap"
            className={classes.rightItems}
          >
            <Grid /* Apointment button item */
              item
              xs={6}
              className={classes.appointment}
            >
              <Button
                dense
                className={classes.apptButton}
                href="https://acusimple.com/"
              >
                Make an Appointment
              </Button>
            </Grid>
            <Grid /* phone and address */
              item
              xs={6}
              className={classes.contact}
            >
              <Grid
                container
                spacing={0}
                alignItems="center"
              >
                <Grid item xs={12} /* phone */>
                  <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    wrap="nowrap"
                  >
                    <Grid item>
                      <PhoneIcon className={classes.icon} />
                    </Grid>
                    <Grid item className={classes.iconText}>
                      <Typography type="caption">
                        (773) 835-9957
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} /* address */>
                  <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    wrap="nowrap"
                  >
                    <Grid item>
                      <LocationOnIcon className={classes.icon} />
                    </Grid>
                    <Grid item className={classes.iconText}>
                      <Typography type="caption">
                        2602 Zenobia St. Denver
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);
