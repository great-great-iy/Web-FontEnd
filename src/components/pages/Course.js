import React from 'react';
import '../../App.css';
import CourseOffer from '../CourseOffer';
import SubBanner from '../SubBanner';

export default function Course() {
  return (
    <>
      <SubBanner text='COURSE'/>
       <CourseOffer/>
    </>
  );
}
