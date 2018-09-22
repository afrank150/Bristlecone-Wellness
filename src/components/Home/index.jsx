import React from 'react';
import Banner from '../_shared/Banner';
import TopBar from '../_shared/TopBar';
import NavBar from '../_shared/NavBar';
import Splash from './Splash';
import Description from './Description';

function Home() {
  return (
    <div>
      <Banner />
      <TopBar />
      <NavBar />
      <Splash />
      <Description />
    </div>
  );
}

export default Home;
