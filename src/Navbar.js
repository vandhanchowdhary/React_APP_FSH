import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faChevronRight, faHome, faUsers, faPhone } from '@fortawesome/free-solid-svg-icons';
import TextLogo from './res/text-logo.png';

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
                <a href="index.html">HOME</a>
                <a href="pages/about.html">ABOUT</a>
                <a href="pages/contact.html">CONTACT</a>
            </div>
            <div className="navhead">
                <button className="menu-icon" onClick={openNav}>&#9776; </button>
                <div className="logo-container">
                    <img src={TextLogo} alt="main-logo" />
                </div>
                <div className="links-container">
                    <a href="index.html"><FontAwesomeIcon icon={faHome} className='i'/> HOME</a>
                    <div className="dropdown">
                        <FontAwesomeIcon icon={faCogs} className='i'/> SERVICES <FontAwesomeIcon icon={faChevronRight} className="i servicon" />
                        <div className="dropdown-content">
                            <div className="dropdown-1">
                                Soil Testing <FontAwesomeIcon icon={faChevronRight} className="i invert-1" />
                                <div className="dropdown-content-1">
                                    <a href="pages/redirect.html">By User</a>
                                    <a href="pages/redirect.html">By Professional</a>
                                    <a href="pages/redirect.html">By 3rd Party</a>
                                </div>
                            </div>
                            <div className="dropdown-2">
                                Fertilizers <FontAwesomeIcon icon={faChevronRight} className="i invert-2" />
                                <div className="dropdown-content-2">
                                    <a href="pages/redirect.html">Organic</a>
                                    <a href="pages/redirect.html">Inorganic</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="pages/about.html"><FontAwesomeIcon icon={faUsers} className='i'/>ABOUT</a>
                </div>

                <div className="right-navcontainer">
                    <a href="pages/contact.html">
                        <div className="contact-btn"><FontAwesomeIcon icon={faPhone} className='i' />CONTACT US</div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Navbar;