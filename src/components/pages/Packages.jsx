import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Domestic from './Domestic';
import International from './International';
import '../styles/Packages.scss';

const Packages = () => {
  return (
    <>
      <Navbar />
      <section className="pag">
        <div className="secContainer container">
          <div className="pagText">
            <h1 data-aos="fade-up" data-aos-duration="2000" className="title">
              Packages
            </h1>
          </div>

          <div className="pagCard grid"></div>
        </div>
      </section>

      <Domestic />
      <International />
      <Footer />
    </>
  );
};

export default Packages;
