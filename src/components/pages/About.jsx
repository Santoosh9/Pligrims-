import React, { useEffect } from 'react';
import '../styles/About.scss';
import customerImg from '../../assets/images/customer.png';
import mountainImg from '../../assets/images/mountain.png';
import climbingImg from '../../assets/images/climbing.png';

import styled from 'styled-components';

import Aos from 'aos';
import 'aos/dist/aos.css';
const StyledParagraph = styled.p`
  color: blue;
  font-size: 16px;
  line-height: 1.5;
  /* Add more styles as needed */
`;

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="about  section">
      <div className="secContainer">
        <h2 className="title">Why Pligrims?</h2>

        <div className="mainContent container grid">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="singleItem"
          >
            <img src={customerImg} alt="Image" />
            <h3>3000+ Customers</h3>
            <StyledParagraph
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                padding: '20px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                backgroundColor: '#f9f9f9',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Customer satisfaction is the measure of a customer’s overall
              satisfaction with a product or service. It encompasses their
              experiences, perceptions, and expectations. For businesses,
              achieving high customer satisfaction is crucial as it can result
              in customer loyalty, positive word-of-mouth, and repeat business.
            </StyledParagraph>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="singleItem"
          >
            <img src={climbingImg} alt="Image" />
            <h3>1000+ Travels</h3>
            <StyledParagraph
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                padding: '20px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                backgroundColor: '#f9f9f9',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Different cultures around the world have unique ways of expressing
              their spirituality. Through traveling, you're able to learn about
              various religious customs, rituals, philosophies - all
              contributing significantly towards expanding your worldview. This
              exploration might even inspire you to incorporate some elements
              into your own spiritual practice.
            </StyledParagraph>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="singleItem"
          >
            <img src={mountainImg} alt="Image" />
            <h3>2000+ places</h3>
            <StyledParagraph
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                padding: '20px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                backgroundColor: '#f9f9f9',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Pligrims Travels has decades of experience as a Nepal tour
              operator. We offer diverse attractions from the cultural jewels of
              the cities, Himalayan views, wildlife safari, and exploration of
              picturesque countryside. Travelers of all categories can enjoy
              their holiday tours in Nepal that embark on adventure lovers,
              honeymoon tours soft family tours with sightseeing, and luxurious
              trips.
            </StyledParagraph>
          </div>
        </div>

        <div className="videoCard container">
          <div className=" cardContent grid">
            <div data-aos="fade-right" className="cardText">
              <h2>Wonderful House experience nin there!</h2>
              <StyledParagraph>
                The Adventure subranking is based on an equally weighted average
                of scores from five country.
              </StyledParagraph>
            </div>

            <div data-aos="fade-left" className="cardVideo"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
