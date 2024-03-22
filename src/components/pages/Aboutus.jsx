import React from 'react';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import '../styles/About.scss';
const Aboutus = () => {
  return (
    <>
      <Navbar />

      <section className="abouts">
        <div className="secContainer container">
          <div className="aboutsText">
            <h1 data-aos="fade-up" data-aos-duration="2000" className="title">
              About US
            </h1>

            <div className="aboutsCard grid"></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Aboutus;
