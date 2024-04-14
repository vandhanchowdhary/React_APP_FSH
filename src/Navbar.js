import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faChevronRight, faHome, faUsers, faPhone } from '@fortawesome/free-solid-svg-icons';
import TextLogo from './res/text-logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const openNav = () => {
        document.getElementById("mobileNav").style.width = "250px";
    }

    const closeNav = () => {
        document.getElementById("mobileNav").style.width = "0";
    }

    return (
        <>
            <div id="mobileNav" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
            <div className="navhead">
                <button className="menu-icon" onClick={openNav}>&#9776; </button>
                <div className="logo-container">
                    <img src={TextLogo} alt="main-logo" />
                </div>
                <div className="links-container">
                    <Link to="/"><FontAwesomeIcon icon={faHome} className='i'/> HOME</Link>
                    <div className="dropdown">
                        <FontAwesomeIcon icon={faCogs} className='i'/> SERVICES <FontAwesomeIcon icon={faChevronRight} className="i servicon" />
                        <div className="dropdown-content">
                            <div className="dropdown-1">
                                Soil Testing <FontAwesomeIcon icon={faChevronRight} className="i invert-1" />
                                <div className="dropdown-content-1">
                                    <Link to="/redirect">By User</Link>
                                    <Link to="/redirect">By Professional</Link>
                                    <Link to="/redirect">By 3rd Party</Link>
                                </div>
                            </div>
                            <div className="dropdown-2">
                                Fertilizers <FontAwesomeIcon icon={faChevronRight} className="i invert-2" />
                                <div className="dropdown-content-2">
                                    <Link to="/redirect">Organic</Link>
                                    <Link to="/redirect">Inorganic</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/about"><FontAwesomeIcon icon={faUsers} className='i'/>ABOUT</Link>
                </div>

                <div className="right-navcontainer">
                    <Link to="/contact">
                        <div className="contact-btn"><FontAwesomeIcon icon={faPhone} className='i' />CONTACT US</div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Navbar;
