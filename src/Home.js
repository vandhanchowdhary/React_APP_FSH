import React from "react";

const Home = () => {
    return(
        <div className="top-content main">
            <div className="left-panel main">
                <div className="left-main-content">
                    <h1>Farmers Soil Hub</h1>
                    <div className="main-content">
                        <p>Your resource for soil fertility improvement</p>
                        <p>Connecting over 20k farmers via streamlined network</p>
                    </div>
                </div>
            </div>
            <div className="right-panel main">
                <header>
                    <p>Begin your journey here</p>
                    <button className="login-btn" id="myBtn">Login</button>
                    <a href="pages/registration.html"><div className="register-btn" onClick="">Register</div></a>
                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Login popup modal</p>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Home;