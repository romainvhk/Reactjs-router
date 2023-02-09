import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './Components/Blog';
import Navbar from './Components/Navbar';
import ProfileDetails from './Components/ProfileDetails';
import BlogList from './Pages/BlogList';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import ProfilesPages from './Pages/ProfilesPages';


export default function Router() {
  const blogList = [
    {id: 1,
    title: 'Title 1',
    resume: "Lorem Ipsum ",
    article: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},

    {id: 2,
    title: 'Title 2',
    resume: "Lorem Ipsum ",
    article: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},

    {id: 3,
    title: 'Title 3',
    resume: "Lorem Ipsum ",
    article: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
  ];

  const users = [
    {id: 1,
    name: 'John Doe',
    email: "johndoe@example.com",
    avatar: "https://via.placeholder.com/150x150&quot"},
    
    {id: 2,
    name: 'Jane Doe',
    email: "janedoe@example.com",
    avatar: "https://via.placeholder.com/150x150&quot"},

    {id: 3,
    name: 'Bob Smith',
    email: "bobsmith@example.com",
    avatar: "https://via.placeholder.com/150x150&quot"},
  ];

  
  return (
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/blogs' element={<BlogList blogList={blogList}/>} />
                <Route path='/blogs/:id' element={<Blog blogList={blogList}/>} />
                <Route path='/profiles' element={<ProfilesPages users={users}/>} />
                <Route path='/profiles/:id' element={<ProfileDetails users={users} />} />
                <Route path='/page1' element={<Page1 />} />
                <Route path='/page2' element={<Page2 />} />
                <Route path='/page3' element={<Page3 />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}