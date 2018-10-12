import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/MailOutline';
import {
  PHONE_NUMBER,
  ADDRESS,
  MAP_LINK,
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  EMAIL,
} from '../../../../constants/config';
import flogo from './flogo.svg';
import ilogo from './ilogo.svg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary[100],
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      height: 32,
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing.unit,
    },
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing.unit,
    },
  },
  icon: {
    color: theme.palette.grey[600],
    paddingTop: '2px',
    height: '16px',
    width: '16px',
  },
  socialIcon: {
    color: theme.palette.grey[600],
    paddingTop: '2px',
    paddingLeft: '8px',
    height: '17px',
    width: '17px',
  },
  mailIcon: {
    color: theme.palette.grey[600],
    paddingTop: '3px',
    paddingLeft: '8px',
    height: '20px',
    width: '20px',
  },
  text: {
    color: theme.palette.grey[600],
  },
});

function Banner(props) {
  const { classes } = props;

  return (
    <Grid
      container
      className={classes.root}
      justify="space-between"
      alignItems="center"
    >
      <Grid item xs={12} sm={5} md={4} className={classes.item}>
        <Grid
          container
          alignItems="center"
          justify="center"
          wrap="nowrap"
        >
          <Grid item>
            <LocationOnIcon className={classes.icon} />
          </Grid>
          <Grid item style={{ whiteSpace: 'nowrap' }}>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Typography variant="body1" className={classes.text}>
                { ADDRESS }
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4} md={4} className={classes.item}>
        <Grid
          container
          alignItems="center"
          justify="center"
          wrap="nowrap"
        >
          <Grid item>
            <PhoneIcon className={classes.icon} />
          </Grid>
          <Grid item>
            <a href={`tel: ${PHONE_NUMBER}`} style={{ textDecoration: 'none' }}>
              <Typography variant="body1" className={classes.text}>
                {PHONE_NUMBER}
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Grid>
      <Hidden xsDown>
        <Grid item sm={3} md={3}>
          <Grid
            container
            alignItems="center"
            justify="center"
            wrap="nowrap"
          >
            <Grid item>
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <img src={flogo} alt="flogo" className={classes.socialIcon} />
              </a>
            </Grid>
            <Grid item>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <img src={ilogo} alt="ilogo" className={classes.socialIcon} />
              </a>
            </Grid>
            <Grid item>
              <a
                href={`mailto: ${EMAIL}`}
                style={{ textDecoration: 'none' }}
              >
                <MailIcon className={classes.mailIcon} />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);
