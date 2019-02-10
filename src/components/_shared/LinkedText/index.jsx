import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  linkedText: {
    color: theme.palette.primary[900],
    textDecoration: 'underline',
  },
  bold: {
    fontWeight: 700,
  },
  noWrap: {
    whiteSpace: 'nowrap',
  },
});

function LinkedText(props) {
  const {
    classes,
    className: classNameProp,
    link,
    bold,
    noWrap,
    text,
    newPage,
    ...other
  } = props;

  const className = classNames(
    classes.linkedText,
    { [classes.bold]: bold === true },
    { [classes.noWrap]: noWrap === true },
    classNameProp,
  );

  if (newPage) {
    return (
      <a
        href={link}
        className={className}
        {...other}
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    );
  }
  return (
    <a
      href={link}
      className={className}
      {...other}
    >
      {text}
    </a>
  );
}

LinkedText.propTypes = {
  classes: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.object,
  bold: PropTypes.bool,
  noWrap: PropTypes.bool,
  newPage: PropTypes.bool,
};

LinkedText.defaultProps = {
  className: null,
  bold: false,
  noWrap: false,
  newPage: false,
};

export default withStyles(styles)(LinkedText);
