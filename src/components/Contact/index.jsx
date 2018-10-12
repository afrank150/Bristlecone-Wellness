import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PageTemplate from '../_shared/PageTemplate';
import PageDescription from '../_shared/PageDescription';
import PrimaryButton from '../_shared/PrimaryButton';
import {
  APPOINTMENT_LINK,
  PHONE_NUMBER,
  FACEBOOK_MESSANGER,
  EMAIL,
} from '../../constants/config';
import facebookMessanger from './facebook-messenger.svg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit,
    },
  },
  item: {
    textAlign: 'center',
    padding: theme.spacing.unit * 4,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit,
      paddingTop: theme.spacing.unit * 4,
      paddingBottom: theme.spacing.unit * 4,
    },
  },
  link: {
    color: 'black',
    textDecoration: 'underline',
  },
  messanger: {
    whiteSpace: 'nowrap',
    textDecoration: 'underline',
  },
  socialIcon: {
    height: 24,
    width: 24,
    paddingLeft: '4px',
    justifyContent: 'center',
  },
});

function Contact(props) {
  const { classes } = props;

  return (
    <PageTemplate>
      <PageDescription text="Contact Us" />
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} className={classes.item}>
          <Typography variant="body2">
            {'Call us today: '}
            <a href={`tel: ${PHONE_NUMBER}`} className={classes.link}>
              {PHONE_NUMBER}
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <Typography variant="body2">
            {'Email: '}
            <a href={`mailto: ${EMAIL}`} className={classes.link}>
              {EMAIL}
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <Grid
            container
            justify="center"
            alignItems="center"
            wrap="nowrap"
          >
            <Grid item>
              <a
                href={FACEBOOK_MESSANGER}
                className={classes.messanger}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography variant="body2">
                  {'Message us on Facebook Messanger'}
                </Typography>
              </a>
            </Grid>
            <Grid item>
              <a
                href={FACEBOOK_MESSANGER}
                style={{ textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookMessanger} alt="facebookMessanger" className={classes.socialIcon} />
              </a>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <PrimaryButton link={APPOINTMENT_LINK} title="Make an Appointment Online" />
        </Grid>
      </Grid>
    </PageTemplate>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
