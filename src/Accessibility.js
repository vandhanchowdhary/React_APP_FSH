import React from "react";

const Accessibility = () =>{
    
    const toggleAccessibilityOptions = () => {
        const accessibilityOption = document.getElementById("accessibility_option");
        accessibilityOption.style.display = accessibilityOption.style.display === "block" ? "none" : "block";
    }

    const increaseTextSize = () => {
        document.body.style.fontSize = "larger";
    }

    const decreaseTextSize = () => {
        document.body.style.fontSize = "smaller";
    }

    const getUsualTextSize = () => {
        document.body.style.fontSize = "initial";
    }

    const toggleHighContrastDark = () => {
        // Implement your high contrast dark mode logic here
        var divElements = document.getElementsByTagName('div');
        var h1Elements = document.getElementsByTagName('h1');
        var buttonElements = document.getElementsByTagName('button');

        for (var i = 0; i < divElements.length; i++) {
            divElements[i].classList.toggle('high-contrast-dark');
        }

        // Toggle class for h1 elements
        for (var j = 0; j < h1Elements.length; j++) {
            h1Elements[j].classList.toggle('high-contrast-dark');
        }
        
        // Toggle class for button elements
        for (var k = 0; k < buttonElements.length; k++) {
            buttonElements[k].classList.toggle('high-contrast-dark');
        }

    }

    return(
        <div>
            <div id="accessibilityButton" onClick={toggleAccessibilityOptions}>Accessibility</div>
            <div id="accessibility_option" style={{ display: 'none' }}>
                <button onClick={increaseTextSize}>Increase Text Size</button>
                <button onClick={decreaseTextSize}>Decrease Text Size</button>
                <button onClick={getUsualTextSize}>Normal Text Size</button>
                <button onClick={toggleHighContrastDark}>High Contrast</button>
                <button id="voiceButton">Start Voice Assistant</button>
            </div>
        </div>
    );
}

export default Accessibility;