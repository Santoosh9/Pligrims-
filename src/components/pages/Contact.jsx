import React from 'react';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import '../styles/Contact.scss';

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="cnt">
        <div className="secContainer container">
          <div className="cntText">
            <h1 data-aos="fade-up" data-aos-duration="2000" className="title">
              Contact
            </h1>
          </div>

          <div className="cntCard grid"></div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
