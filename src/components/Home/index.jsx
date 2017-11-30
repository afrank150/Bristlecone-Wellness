import React from 'react';
import TopBar from '../_shared/TopBar';
import NavBar from '../_shared/NavBar';
import Splash from './Splash';
import Description from './Description';

function Home() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Splash />
      <Description />
    </div>
  );
}

export default Home;
