'use client';
import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ThemeToggle() {
    const [isEnabled, setIsEnabled] = useState(true);

    useEffect(() => {
        // Pass in the isEnabled state
      updateTheme(isEnabled);
    }, [isEnabled]);
  
    const toggleState = () => {
      setIsEnabled((prevState) => !prevState);
    };
    
    const updateTheme = (isDarkEnabled) => {

        // Get all available styles
        const styles = getComputedStyle(document.body);
      
          // Get the --black and --white variable values
        const black = styles.getPropertyValue("--black");
        const white = styles.getPropertyValue("--white");
        const red = styles.getPropertyValue("--red");
      
      const docEl = document.documentElement;
      if (isDarkEnabled) {
        docEl.style.setProperty("--background", black);
        docEl.style.setProperty("--foreground", white);
        document.querySelector("html").classList.add("darkmode");
      } else {
        docEl.style.setProperty("--background", white);
        docEl.style.setProperty("--foreground", black);
        document.querySelector("html").classList.remove("darkmode");
      }};
    return (
      <label className="toggle-wrapper my-auto" htmlFor="toggle">
        <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
          <span className="hidden">
          {isEnabled ? "Enable Light Mode" : "Enable Dark Mode"}
          </span>
          <div className="icons">
          <FontAwesomeIcon icon="fa-solid fa-sun" />
          <FontAwesomeIcon icon="fa-solid fa-moon" />
      </div>
          <input
            id="toggle"
            name="toggle"
            type="checkbox"
            checked={isEnabled}
            onClick={toggleState}
          />
        </div>
      </label>
    );
  }