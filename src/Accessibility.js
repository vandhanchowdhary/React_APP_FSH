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