import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import bristlecone from './bristlecone.jpeg';


const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 6,
    paddingBottom: theme.spacing.unit * 10,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 6,
    },
  },
  image: {
    maxWidth: 800,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  header: {
    paddingBottom: theme.spacing.unit * 3,
  },
});

function Title(props) {
  const { title } = props;

  return (
    <Typography variant="title">
      {title}
    </Typography>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

class AboutBristlecone extends Component {
  constructor(props) {
    super(props);
    this.state = { direction: 'row' };
    this.setDirection = this.setDirection.bind(this);
  }

  componentDidMount() {
    this.setDirection();
    window.addEventListener('resize', this.setDirection);
  }

  componentWillUnmount() {
    window.removeEventListener();
  }

  setDirection() {
    const { width } = this.props;
    this.setState(isWidthUp('sm', width) ? { direction: 'row' } : { direction: 'column-reverse' });
  }

  render() {
    const { classes } = this.props;
    const { direction } = this.state;

    return (
      <Grid
        container
        className={classes.root}
      >
        <Grid item xs={12}>
          <Grid
            container
            spacing={40}
            direction={direction}
            justify="center"
            alignItems="center"
          >
            <Grid item sm={5} xs={12}>
              <Typography variant="body2">
                Bristlecone Wellness is the place for you to connect with your body’s
                innate ability to heal itself by tapping into your own resources and
                allowing for imbalance to become balance. Bristlecone pines are some
                of the oldest trees in North America- the oldest clocking in around
                4,000 years old (about as old as acupuncture and Chinese Medicine).
                Bristlecone pines can withstand incredible hardships in the harsh
                elements and high altitudes, get struck by lightning and yet still
                thrive. To many these ancient trees symbolize resilience and longevity.
                Here at Bristlecone Wellness we aim to help you obtain your optimal health,
                so you can be resilient and possess vitality, both in your health and life
                goals, whether that is dealing with chronic pain, autoimmune diseases,
                digestive health, fertility, or needing some emotional support.  Come in and
                find out how we can help you optimize your health!
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.image}>
              <img src={bristlecone} className={classes.img} alt="bristlecone" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

AboutBristlecone.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(
  withStyles(styles, { name: 'Offerings' }),
  withWidth(),
)(AboutBristlecone);
