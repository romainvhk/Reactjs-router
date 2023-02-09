import React from 'react';
import Blogs from '../Components/Blogs';

export default function BlogList({blogList}) {

  return (
    <div className='bloglist'>
      <Blogs blogList={blogList} />
    </div>
  );
};