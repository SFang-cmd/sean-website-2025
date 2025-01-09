'use client';

import React from 'react';
import Navbar from '../../components/nav';
import { Home } from './home';
import { MyWork } from './myWork';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';

const HomePage: React.FC = () => {
    // Base colors centered around blue hues with higher brightness variation
    const [color1, setColor1] = useState([210, 70, 25]);  // Slightly brighter blue base
    const [color2, setColor2] = useState([220, 65, 20]);  // Slightly brighter second blue
    
    // Animation parameters
    const animationSpeed = 0.3;
    const hueRange = 10;
    const lightnessRange = 8;  // Range for lightness variation
    
    // Define blue spectrum bounds
    const minHue = 200;
    const maxHue = 230;
    
    // Define lightness bounds
    const minLightness = 15;
    const maxLightness = 35;  // Allow for brighter peaks
    
    // Use refs to store the base colors and current animation progress
    const baseColor1 = useRef(color1);
    const baseColor2 = useRef(color2);
    const animationFrame = useRef(0);
    const progress = useRef(0);

    const updateColors = useCallback(() => {
        progress.current = (progress.current + animationSpeed);
        // Use a continuous sine wave that completes a full cycle
        const normalizedProgress = (progress.current % 360) * (Math.PI / 180);
        
        // Calculate new colors using sine waves for smooth transitions
        const newColor1 = [
            // Clamp the hue values between minHue and maxHue
            Math.max(minHue, Math.min(maxHue, 
                baseColor1.current[0] + Math.sin(normalizedProgress) * hueRange
            )),
            baseColor1.current[1],
            // Add lightness variation
            Math.max(minLightness, Math.min(maxLightness,
                baseColor1.current[2] + Math.sin(normalizedProgress) * lightnessRange
            ))
        ];
        
        const newColor2 = [
            // Clamp the hue values between minHue and maxHue
            Math.max(minHue, Math.min(maxHue, 
                baseColor2.current[0] + Math.cos(normalizedProgress) * hueRange
            )),
            baseColor2.current[1],
            // Add lightness variation with offset phase
            Math.max(minLightness, Math.min(maxLightness,
                baseColor2.current[2] + Math.cos(normalizedProgress) * lightnessRange
            ))
        ];
        
        setColor1(newColor1);
        setColor2(newColor2);
        
        animationFrame.current = requestAnimationFrame(updateColors);
    }, []);

    useEffect(() => {
        // Start animation
        updateColors();
        
        // Cleanup
        return () => {
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, [updateColors]);

    return (
        <>
            <div id="background" className="fixed inset-0"
                style={{
                    background: `radial-gradient(circle, hsl(${color1[0]}, ${color1[1]}%, ${color1[2]}%) 0%, hsl(${color2[0]}, ${color2[1]}%, ${color2[2]}%) 100%)`,
                }}
             />
            <div 
                className="absolute inset-0"
                
            >
                <div id="content" className="flex flex-auto flex-col min-h-screen text-white justify-center">
                    <Home />
                    <MyWork />
                </div>
            </div>
        </>
    );
};

export default HomePage;