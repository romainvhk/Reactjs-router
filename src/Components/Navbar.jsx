import React from 'react'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className='navbar'>
        <ul className='navbar__list'>
            <li><Link className='link' to='/blogs'>Blogs</Link></li>
            <li><Link className='link' to='/profiles'>Profiles</Link></li>
            <li><Link className='link' to='/page1'>Page 1</Link></li>
            <li><Link className='link' to='/page2'>Page 2</Link></li>
            <li><Link className='link' to='/page3'>Page 3</Link></li>
        </ul>
    </div>
  )
}
