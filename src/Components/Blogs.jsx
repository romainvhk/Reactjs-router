import React from 'react'
import { Link } from 'react-router-dom'

export default function ({blogList}) {

  return (
    <div>
        {blogList.map((blog) => {
            return (
                <div key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.resume}</p>
                    <Link to={`/blogs/${blog.id}`}>View more </Link>
                </div>
            );
        })};
    </div>
  )
}
