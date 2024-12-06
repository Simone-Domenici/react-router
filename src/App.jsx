import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DefaultLayout from './layouts/DefaultLayout';
import About from './pages/About';
import AllPosts from './pages/AllPosts';

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/posts' element={<AllPosts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
