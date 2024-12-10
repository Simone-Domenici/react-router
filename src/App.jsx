import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DefaultLayout from './layouts/DefaultLayout';
import About from './pages/About';
import AllPosts from './pages/AllPosts';
import BlankLayout from './layouts/BlankLayout';
import NotFound from './pages/NotFound';
import PostDetail from './pages/PostDetail';

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
