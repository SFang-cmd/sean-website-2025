'use client';

import React from 'react';
import Navbar from '../../ui/components/nav';
import { Home } from './home';
import { MyWork } from './myWork';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import {useContext } from 'react';
import { LayoutContext } from '../layoutContext';

function Background({ animationSpeed=0.3, hueRange=10, lightnessRange=8,
    minHue=200, maxHue=230, minLightness=15, maxLightness=35,
    initialHue1=210, initialHue2=220
}) {
    // Add mounting state
    const [mounted, setMounted] = useState(false);

    const [color1, setColor1] = useState([
        initialHue1 + Math.sin(0) * hueRange,
        70,
        25 + Math.sin(0) * lightnessRange
    ]);
    const [color2, setColor2] = useState([
        initialHue2 + Math.cos(0) * hueRange,
        65,
        20 + Math.cos(0) * lightnessRange
    ]);

    // Initialize animation on mount
    useEffect(() => {
        setMounted(true);
    }, []);
    
    // Use refs to store the base colors and current animation progress
    const baseColor1 = useRef([initialHue1, 70, 25]);
    const baseColor2 = useRef([initialHue2, 65, 20]);
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
        <div id="background" className="fixed inset-0"
                style={{
                    background: `radial-gradient(circle, hsl(${color1[0]}, ${color1[1]}%, ${color1[2]}%) 0%, hsl(${color2[0]}, ${color2[1]}%, ${color2[2]}%) 100%)`,
                }}
             />
    )
}

function HomeSections({ children, className }) {
}

const HomePage: React.FC = () => {
    const [sections, setSections] = useState<NodeListOf<HTMLElement> | null>(null);
    const { selected, setSelected } = useContext(LayoutContext);
    const targetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setSections(document.querySelectorAll("section"));
    }, []);

    function updateSection({ scrollPos }) {
        if(!sections) return;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                setSelected(section.id);
            }
        });
    }

    return (
        <div className="flex flex-auto flex-col min-h-screen text-white justify-center overflow-y-auto">
            <Background />
            <div 
                className="absolute inset-0"
                onScroll={(e) => {
                    const target = e.target as HTMLElement;
                    const scrollPos = target.scrollTop;
                    updateSection({ scrollPos });
                }}
            >
                <div id="content" className="flex flex-auto flex-col min-h-screen text-white justify-center">
                    <section id="home">
                        <Home className="min-h-screen"/>
                    </section>
                    <section id="my-work">
                        <MyWork className="min-h-screen"/>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HomePage;