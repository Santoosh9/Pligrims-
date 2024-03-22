import React, { useEffect } from 'react';
import '../styles/Home.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../layouts/Navbar';

const HomeMain = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default HomeMain;
