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
  const mapEmbedCode = ` <iframe style="display: flex; flex-wrap: wrap;" class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=samakushi kathmNDU&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%" height="170" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">></iframe>
`;

  return (
    <div className="footer">
      <div className="secCotainer container grid">
        <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h1>Logo</h1>
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

          <a href="#">Travel@gmail.com</a>
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
          @Travelwebsite | Developed by Santosh Gajurel
        </p>
      </div>
    </div>
  );
};

export default Footer;
