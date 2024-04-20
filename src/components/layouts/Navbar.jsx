import React, { useState } from 'react';
import '../styles/Navbar.scss';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const imageStyles = {
    width: '100px',
    height: 'auto',
    borderRadius: '5%',
  };
  const [active, setActive] = useState('navBar');
  const showNav = () => {
    setActive('navBar activeNavbar');
  };
  const removeNav = () => {
    setActive('navBar');
  };

  const [transparent, setTransparent] = useState('header');
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent('header activeHeader');
    } else {
      setTransparent('header');
    }
  };
  window.addEventListener('scroll', addBg);

  return (
    <section className="navBarSection">
      <header className={transparent}>
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>Our Logo</h1>
          </a>
        </div>

        <div className={active}>
          <ul onClick={removeNav} className="navLists flex">
            <li className="navItem">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>

            <li className="navItem dropdown ">
              <Link to="/about" className="navLink">
                About Us
              </Link>
              <div className="dropdown-content">
                <Link to="/">Who we are? </Link>
                <Link to="/">What we do ? </Link>
                <Link to="/">What We Offer ?</Link>
              </div>
            </li>
            <li className="navItem dropdown">
              <Link to="/packages" className="navLink">
                Packages
              </Link>

              <div className="dropdown-content">
                <Link to="/domestic">Domestic </Link>
                <Link to="/international">International</Link>
                <Link to="/inbound">Inbound</Link>
              </div>
            </li>

            <li className="navItem dropdown">
              <Link to="" className="navLink">
                Services
              </Link>

              <div className="dropdown-content">
                <Link to="/domestic&international">
                  Domestic and International Packages
                </Link>
                <Link to="/air">Domestic and Internationa Air Tickets</Link>
                <Link to="/carrental">
                  Domestic and Internationa Car Rental
                </Link>
                <Link to="/hotelbooking">
                  Domestic and Internationa Hotel Booking
                </Link>
                <Link to="/visa&other">Visa & Other Services</Link>
              </div>
            </li>
            <li className="navItem">
              <Link to="/blog" className="navLink">
                Blog
              </Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink">
                Contact
              </Link>
            </li>

            <div className="headerBtns flex">
              <button className="btn">
                <a href="#">Login</a>
              </button>
            </div>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
