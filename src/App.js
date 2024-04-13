import React from 'react';
import './style.css'; // Import your CSS file
// import './voice_assist.js'; // Import your JavaScript files
import Navbar from './Navbar';
import Home from './Home';
import Accessibility from './Accessibility';

const App = () => {
    const openNav = () => {
        document.getElementById("mobileNav").style.width = "250px";
    }

    const closeNav = () => {
        document.getElementById("mobileNav").style.width = "0";
    }

    
    return (
        <div className="body-container">
            
            <Navbar/>
            <Home/>
            <Accessibility/>
        </div>
    );
}

export default App;