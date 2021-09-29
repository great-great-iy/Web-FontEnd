import React from 'react';
import '../../App.css';
import Banner from '../Banner';
import CourseOffer from '../CourseOffer';
import Campus from '../Campus';
import Facilities from '../Facilities';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Banner />
      <CourseOffer />
      <Campus />
      <Facilities />
      <Footer />
    </>
  );
}

export default Home;
