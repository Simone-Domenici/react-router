import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DefaultLayout from './layouts/DefaultLayout';
import About from './pages/About';
import AllPosts from './pages/AllPosts';
import BlankLayout from './layouts/BlankLayout';
import NotFound from './pages/NotFound';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/posts' element={<AllPosts />} />
        </Route>
        <Route element={<BlankLayout />}>
            <Route path='*' Component={NotFound} ></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
