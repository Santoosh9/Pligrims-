import React, { useRef, useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../styles/Testimonial.scss';
import cmb from '../../assets/images/climbing.png';

const Testimonial = () => {
  const testimonialContainerRef = useRef(null);

  return (
    <section className="testimonial" data-aos="fade-up">
      <h2 style={{ display: 'flex', justifyContent: 'center', marginBottom:"20px", color:'red' }}>Testimonial</h2>
      <div className="testimonialContainer" ref={testimonialContainerRef}>
        <div className="testimonialCard" data-aos="fade-right">
          <img className="userImage" src={cmb} alt="User" />
          <div className="testimonialContent">
            <p className="testimonialText">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam."
            </p>
            <p className="testimonialAuthor">- John Doe</p>
          </div>
        </div>

        <div className="testimonialCard" data-aos="fade-right">
          <img className="userImage" src={cmb} alt="User" />
          <div className="testimonialContent">
            <p className="testimonialText">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam."
            </p>
            <p className="testimonialAuthor">- John Doe</p>
          </div>
        </div>
        <div className="testimonialCard" data-aos="fade-right">
          <img className="userImage" src={cmb} alt="User" />
          <div className="testimonialContent">
            <p className="testimonialText">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam."
            </p>
            <p className="testimonialAuthor">- John Doe</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
