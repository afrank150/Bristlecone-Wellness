import React from 'react';
import PageTemplate from '../_shared/PageTemplate';
import Splash from './Splash';
import Description from './Description';
import Location from './Location';

function Home() {
  return (
    <PageTemplate>
      <Splash />
      <Description />
      <Location />
    </PageTemplate>
  );
}

export default Home;
