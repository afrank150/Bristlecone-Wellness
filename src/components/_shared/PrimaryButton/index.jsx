import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  button: {
    border: '3px solid #2d925e',
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    textTransform: 'none',
    background: 'white',
    '&:hover': {
      background: theme.palette.primary[50],
    },
  },
});

function PrimaryButton(props) {
  const { classes, link, title } = props;

  return (
    <Button
      className={classes.button}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </Button>
  );
}

PrimaryButton.propTypes = {
  classes: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(PrimaryButton);
