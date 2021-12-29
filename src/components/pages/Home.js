import React from 'react';
import '../../App.css';
import Banner from '../Banner';
import CourseOffer from '../CourseOffer';
import Campus from '../Campus';
import Facilities from '../Facilities';
import Fallback from '../Fallback';

function Home() {
  return (
    <>
      <Banner />
      <CourseOffer />
      <Campus />
      <Facilities />
      <Fallback/>
    </>
  );
}

export default Home;
