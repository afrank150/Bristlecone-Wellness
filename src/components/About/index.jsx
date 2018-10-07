import React from 'react';
import PageTemplate from '../_shared/PageTemplate';
import PageDescription from '../_shared/PageDescription';
import AboutBristlecone from './AboutBristlecone';
import Practitioners from './Practitioners';


function About() {
  return (
    <PageTemplate>
      <PageDescription text="About Us" />
      <AboutBristlecone />
      <PageDescription text="Practitioners" />
      <Practitioners />
    </PageTemplate>
  );
}

export default About;
