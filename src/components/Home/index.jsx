import React from 'react';
import PageTemplate from '../_shared/PageTemplate';
import PageDescription from '../_shared/PageDescription';
import Splash from './Splash';
import Location from './Location';
import Offerings from './Offerings';
import Intro from './Intro';

function Home() {
  return (
    <PageTemplate>
      <Splash />
      <PageDescription text="Providing Acupuncture and Traditional Chinese Medicine" />
      <Intro />
      <Offerings />
      <Location />
    </PageTemplate>
  );
}

export default Home;
