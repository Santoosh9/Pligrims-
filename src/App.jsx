import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeMain from './components/pages/HomeMain';
import Aboutus from './components/pages/Aboutus';
import Packages from './components/pages/Packages';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Domestic from './components/pages/Domestic';
import International from './components/pages/International';
import Inbound from './components/pages/Inbound';
const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <HomeMain /> */}
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/domestic" element={<Domestic />} />
          <Route path="/international" element={<International />} />
          <Route path="/inbound" element={<Inbound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
