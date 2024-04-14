import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css'; // Import your CSS file
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import Redirect from './Redirect';
import Confirm from './Confirm';
import Accessibility from './Accessibility';
import Register from './Register';

const App = () => {
    return (
        <Router>
            <div className="body-container">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/redirect" element={<Redirect />} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/confirmation" element={<Confirm/>} />
                </Routes>
                <Accessibility />
            </div>
        </Router>
    );
}

export default App;
