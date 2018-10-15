import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PageTemplate from '../_shared/PageTemplate';
import PageDescription from '../_shared/PageDescription';
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
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 8,
    padding: theme.spacing.unit * 4,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit,
    },
  },
  item: {
    textAlign: 'center',
    padding: theme.spacing.unit * 3,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit,
      paddingTop: theme.spacing.unit * 3,
      paddingBottom: theme.spacing.unit * 3,
    },
  },
  link: {
    color: theme.palette.primary[900],
    textDecoration: 'underline',
    whiteSpace: 'nowrap',
  },
  messanger: {
    color: theme.palette.primary[900],
    whiteSpace: 'nowrap',
    textDecoration: 'underline',
  },
  socialIcon: {
    fill: theme.palette.primary[900],
    height: 22,
    width: 22,
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
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={11} sm={7} md={6} className={classes.item}>
          <Typography variant="body2">
            {'Please feel free to contact us with any questions. If you would like to make an appointment call us today or '}
            <a
              href={APPOINTMENT_LINK}
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {'schedule online'}
            </a>
            {'.'}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <Typography variant="body2">
            <b>
              {'Phone: '}
            </b>
            <a href={`tel: ${PHONE_NUMBER}`} className={classes.link}>
              {PHONE_NUMBER}
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.item}>
          <Typography variant="body2">
            <b>
              {'Email: '}
            </b>
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
              <Typography variant="body2">
                <b>
                  {'Connect: '}
                </b>
                <a
                  href={FACEBOOK_MESSANGER}
                  className={classes.messanger}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {'Facebook Messanger'}
                </a>
              </Typography>
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
      </Grid>
    </PageTemplate>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
