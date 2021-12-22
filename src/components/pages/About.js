import React from 'react';
import '../../App.css';
import AboutContent from '../AboutContent';
import SubBanner from '../SubBanner'

export default function About() {
  return (
    <>
      <SubBanner text = 'ABOUT US'/>
      <AboutContent/>
    </>
  );
}
