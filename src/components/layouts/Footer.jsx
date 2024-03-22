import React, { useEffect } from 'react';
import '../styles/Footer.scss';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import logo from '../../assets/images/logo2_footer.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
const imageStyles = {
  width: '100px',
  height: 'auto',
  borderRadius: '5%',
};
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const mapEmbedCode = `<iframe style="height: 180px; width: 230px; border:none;"
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.246398540595!2d85.31171081113042!3d27.709677625289217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1928123983e1%3A0x66a57eb35a10c35!2sRR%20Shree%20School%20of%20Technology!5e0!3m2!1sen!2snp!4v1708415377230!5m2!1sen!2snp"
   width="100%" height="350" allowFullScreen="" loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"></iframe>`;

  return (
    <div className="footer">
      <div className="secCotainer container grid">
        <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h1>
                <img style={imageStyles} src={logo} alt="lpgo" />
              </h1>
            </a>
          </div>

          <div className="socials flex">
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="footerLinks"
        >
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>

          <li>
            <a href="#">Packages</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="footerLinks"
        >
          <span className="linkTitle">Contact Us</span>

          <a href="#">9800009803</a>

          <a href="#">9800009873</a>

          <a href="#">pligrims@gmail.com</a>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3500"
          className="footerLinks"
        >
          <span className="linkTitle">Location</span>

          <div dangerouslySetInnerHTML={{ __html: mapEmbedCode }}></div>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
        }}
      >
        <p style={{ flexWrap: 'wrap', color: 'grayd' }}>
          Copyright &copy; {new Date().getFullYear()} All rights reserved
          @pligrimsholidays | Developed by Santosh Gajurel
        </p>
      </div>
    </div>
  );
};

export default Footer;
