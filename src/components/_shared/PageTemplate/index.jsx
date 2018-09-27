import React from 'react';
import PropTypes from 'prop-types';
import Banner from './Banner';
import TopBar from './TopBar';
import NavBar from './NavBar';
import BottomNav from './BottomNav';

function PageTemplate(props) {
  const { children } = props;

  return (
    <div>
      <Banner />
      <TopBar />
      <NavBar />
      <div>
        {children}
      </div>
      <BottomNav />
    </div>
  );
}

PageTemplate.propTypes = {
  children: PropTypes.any.isRequired,
};

export default PageTemplate;
