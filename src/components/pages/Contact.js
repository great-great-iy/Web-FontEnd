import React from 'react';
import '../../App.css';
import ContactContent from '../ContactContent';
import SubBanner from '../SubBanner';

export default function Contact() {
  return (
    <>
      <SubBanner text = 'Contact'/>
      <ContactContent/>
    </>
  );
}
