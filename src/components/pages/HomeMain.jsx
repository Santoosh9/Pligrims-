import React, { useEffect } from 'react';
import '../styles/Home.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Popular from './Popular';
import About from './About';
import Domestic from './Domestic';
import International from './International';
import Offer from './Offer';
import Testimonial from './Testimonial';
// import Testimonial from './Testimonial';

const HomeMain = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navbar />
      <section className="home">
        <div className="secContainer container">
          <div className="homeText">
            <h1 data-aos="fade-up" data-aos-duration="2000" className="title">
              Where Faith and Adventure Unite
            </h1>
            <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
              Travel to your favourite places with us
            </p>
            <button data-aos="fade-up" data-aos-duration="3000" className="btn">
              <a href="#">Explore Now</a>
            </button>
          </div>

          <div className="homeCard grid">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="locationDiv"
            >
              <label htmlFor="location">Location</label>
              <input type="text" placeholder="Dream Destination" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="2500"
              className="distDiv"
            >
              <label htmlFor="distance">Distance</label>
              <input type="text" placeholder="11/Meters" />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="priceDiv"
            >
              <label htmlFor="price">Price Range</label>
              <input type="text" placeholder="$140-$500" />
            </div>
            <button
              data-aos="fade-left"
              data-aos-duration="3500"
              className="btn"
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <Popular />
      <Domestic />
      <International />
      <Offer />
      <About />

      <Testimonial />
      <Footer />
    </>
  );
};

export default HomeMain;
