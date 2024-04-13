import React from 'react';

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
                    <img src="res/text-logo.png" alt="main-logo" />
                </div>
                <div className="links-container">
                    <a href="index.html"><i className="fa fa-home"></i>HOME</a>
                    <div className="dropdown">
                        <i className="fa fa-cogs"></i> SERVICES <i className="fa fa-chevron-right servicon"></i>
                        <div className="dropdown-content">
                            <div className="dropdown-1">
                                Soil Testing <i className="fa fa-chevron-right invert-1"></i>
                                <div className="dropdown-content-1">
                                    <a href="pages/redirect.html">By User</a>
                                    <a href="pages/redirect.html">By Professional</a>
                                    <a href="pages/redirect.html">By 3rd Party</a>
                                </div>
                            </div>
                            <div className="dropdown-2">
                                Fertilizers <i className="fa fa-chevron-right invert-2"></i>
                                <div className="dropdown-content-2">
                                    <a href="pages/redirect.html">Organic</a>
                                    <a href="pages/redirect.html">Inorganic</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="pages/about.html"><i className="fa fa-users"></i>ABOUT</a>
                </div>

                <div className="right-navcontainer">
                    <a href="pages/contact.html">
                        <div className="contact-btn"><i className="fa fa-phone fa-lg"></i>CONTACT US</div>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Navbar;