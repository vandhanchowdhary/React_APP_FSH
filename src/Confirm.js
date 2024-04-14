import React from "react";
import { Link } from "react-router-dom";

const Confirm = () => {
    return(
        <div class="top-content">
                <div class="left-panel confirmpage">
                <section class="register-section">
                    <h2>Thank You for registering with us..</h2>
                    <p>We will contact you on your phone number shortly..</p>
        
                    <Link to="/" class="home-button">Back to Home Page</Link>
                </section>
                </div>

                <div class="right-panel confirmpage"></div>
            </div>
    );
}

export default Confirm;