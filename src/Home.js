import React from "react";
import Register from "./Register";
import { Link } from 'react-router-dom';

const Home = () => {

    const modalFunc = () => {
        var modal = document.getElementById("myModal");
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function () {
            modal.style.display = "flex";
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

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
                    <button className="login-btn" id="myBtn" onClick={modalFunc}>Login</button>
                    <Link to="/register"><div className="register-btn">Register</div></Link>
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