import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';

export default function Blog({ blogList }) {
  const { id } = useParams();

  const blog = blogList.find((blog) => blog.id === Number(id));

  return (
    <div className='blog'>
      <div>
        <h3>{blog.title}</h3>
        <p>{blog.article}</p>
      </div>
    </div>
  );
};
