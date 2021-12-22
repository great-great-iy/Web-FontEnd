import React from 'react';
import '../../App.css';
import BlogContent from '../BlogContent';
import SubBanner from '../SubBanner';

export default function Blog() {
  return (
    <>
      <SubBanner text = 'BLOG'/>
      <BlogContent/>
    </>
  );
}
