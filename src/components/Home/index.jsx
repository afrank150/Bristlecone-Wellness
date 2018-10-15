import React from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import PageTemplate from '../_shared/PageTemplate';
import PageDescription from '../_shared/PageDescription';
import Splash from './Splash';
import Location from './Location';
import Offerings from './Offerings';
import Intro from './Intro';

function Home() {
  configureAnchors({ offset: -50, scrollDuration: 400 });

  return (
    <PageTemplate>
      <Splash />
      <PageDescription text="Providing Acupuncture and Traditional Chinese Medicine" />
      <Intro />
      <Offerings />
      <ScrollableAnchor id="location">
        <Location />
      </ScrollableAnchor>
    </PageTemplate>
  );
}

export default Home;
