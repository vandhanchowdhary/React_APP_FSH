import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    function handleSubmit (e) {
        e.preventDefault();
        navigate(`/confirmation`);
    }

    return(
        <div class="mainpage">
                <section class="register-section">
                    <h2>Register with Farmer's Soil Hub</h2>
                    <br/>
                    <form onSubmit={e => handleSubmit(e)} name="register-form">
                        <label for="name">Full Name: </label>
                        <input type="text" id="name" name="name" required/>
                        <label for="phone">Phone Number: </label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
                        <label for="password">Password: </label>
                        <input type="password" name="password" id="password" required />
                        <label for="confirm_password">Confirm Password: </label>
                        <input type="password" name="confirm_password" id="confirm_password" required />
                        <br/>
                        <button type="submit" class="cta-button">Register</button>
                        <br/><br/>
                    </form>
                </section>
            </div>
    );
}

export default Register;