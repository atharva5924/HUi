// src/RandomDots.js
import React, { useEffect } from 'react';

const RandomDots = () => {
    useEffect(() => {
        const numberOfDots = 30; // Number of dots to create
        const body = document.body;

        for (let i = 0; i < numberOfDots; i++) {
            const dot = document.createElement('dots-container');
            dot.className = 'dot absolute rounded-full bg-white opacity-50'; // Tailwind classes for styling
            
            // Random size
            // const size = Math.random() * 20 + 5; // Size between 5px and 25px
            dot.style.width = `6px`;
            dot.style.height = `6px`;
            
            // Random position
            dot.style.top = `${Math.random() * 100}vh`; // Position within viewport height
            dot.style.left = `${Math.random() * 99}vw`; // Position within viewport width
            
            // Random animation duration
            dot.style.animationDuration = `${Math.random() * 2 + 2}s`; // Duration between 2s and 4s
            
            // Append the dot to the body
            body.appendChild(dot);
        }
    }, []);

    return null; // Full-page container for dots
};

export default RandomDots;