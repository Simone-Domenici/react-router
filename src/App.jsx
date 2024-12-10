import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DefaultLayout from './layouts/DefaultLayout';
import About from './pages/About';
import AllPosts from './pages/AllPosts';
import BlankLayout from './layouts/BlankLayout';
import NotFound from './pages/NotFound';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/posts/CreatePost';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/posts'>
            <Route index Component={AllPosts} />
            <Route path=':id' element={<PostDetail />} />
            <Route path='create' element={<CreatePost />} />
          </Route>
        </Route>
        <Route element={<BlankLayout />}>
            <Route path='*' Component={NotFound} ></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
