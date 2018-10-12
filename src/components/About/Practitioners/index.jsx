import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import cori from './cori.jpeg';


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

class Practitioners extends Component {
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
              <Typography variant="title" className={classes.header}>
                Corinne Lohss, L.Ac., MSOM
              </Typography>
              <Typography variant="body2">
                Corinne came to Traditional Chinese Medicine (TCM) after a long
                search for a fulfilling career in the health care world. She always
                knew that she wanted to be a healer, but one who looks at the entire
                individual as a whole, and not just a collection of symptoms that need
                to be treated. Frustrated with aspects of the allopathic medical world
                when dealing with some injuries, Corinne found TCM and realized it was
                the perfect fit. Corinne trained at Southwest Acupuncture College in
                Boulder, CO, earning a masters degree in Oriental Medicine, graduating
                in 2018. She incorporates all the modalities of TCM, including cupping,
                guasha, Shiatsu, Tui Na, moxa, nutritional counseling, and herbal therapies.
                She also studied as a Thai Massage therapist, yoga instructor, and uses a
                lot of bodywork techniques in her treatments. During school Corinne did a
                year long externship at CU and treated many of the student athletes. Corinne
                has many areas of interest, including sports related injuries, chronic pain,
                digestive issues and women’s health. See how a tailored personal session with
                Corinne can help you achieve your health goals.
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.image}>
              <img src={cori} className={classes.img} alt="cori" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Practitioners.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(
  withStyles(styles, { name: 'Offerings' }),
  withWidth(),
)(Practitioners);
