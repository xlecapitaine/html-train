import React, { useState, useEffect } from 'react';

export default function NavBar(props){
    const [isDark, setDark] = useState(() => {
        const savedTheme = localStorage.getItem('isDarkTheme');
        return savedTheme !== null ? JSON.parse(savedTheme) : false;
    });

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        }
        localStorage.setItem('isDarkTheme', JSON.stringify(isDark));
    }, [isDark]); // Écoute les changements de `isDark`.

    const toggleDarkMode = () => {
        setDark(!isDark); // Inverse la valeur de `isDark`.
    };
    return (
        <header className='app-header'>
            <div className="header-left">
                <h1 className="header-title bigText">{props.title}</h1>
                <p className="minText">Total Followers : 23,004</p>
            </div>
            <div className="header-right">
                <span className='darkMode minText text-dmode'>Dark Mode</span>
                <label className="switch">
                    <input type="checkbox" checked={isDark}></input>
                    <span className="slider round" id='trigger' onClick={toggleDarkMode}></span>
                </label>
            </div>
        </header>
    )
}