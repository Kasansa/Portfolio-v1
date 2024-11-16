import React, { createContext, useState } from "react";

// Create the context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("pastel");
    // Function to toggle theme and set the data-theme attribute
    const toggleTheme = () => {
        const newTheme = theme === "pastel" ? "business" : "pastel";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
