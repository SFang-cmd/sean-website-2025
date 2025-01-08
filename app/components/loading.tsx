'use client';

import { jaro } from '../ui/fonts'
import { useState } from 'react';

function SpinningSquare({ children, className="", block }) {

    return (
        <>
            <style>
                {`
                    .go-to-1 {
                        animation: spin-clockwise 1.5s cubic-bezier(0.4, 0, 0.2, 1) 2,
                            final-location-1 2s cubic-bezier(0.4, 0, 0.2, 1) 3s forwards;
                    }
                    .go-to-2 {
                        animation: spin-counterclockwise 1.5s cubic-bezier(0.4, 0, 0.2, 1) 2,
                            final-location-2 2s cubic-bezier(0.4, 0, 0.2, 1) 3s forwards;
                    }
                    .go-to-3 {
                        animation: spin-counterclockwise 1.5s cubic-bezier(0.4, 0, 0.2, 1) 2,
                            final-location-3 2s cubic-bezier(0.4, 0, 0.2, 1) 3s forwards;
                    }
                    .go-to-4 {
                        animation: spin-clockwise 1.5s cubic-bezier(0.4, 0, 0.2, 1) 2,
                            final-location-4 2s cubic-bezier(0.4, 0, 0.2, 1) 3s forwards;
                    }
                    @keyframes spin-clockwise {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }
                    @keyframes spin-counterclockwise {
                        from {
                            transform: rotate(360deg);
                        }
                        to {
                            transform: rotate(0deg);
                        }
                    }
                    @keyframes final-location-1 {
                        from {
                            transform: translate(0, 0);
                        }
                        to {
                            transform: translate(910px, 300px) rotate(-15deg);
                        }
                    }
                    @keyframes final-location-2 {
                        from {
                            transform: translate(0, 0);
                        }
                        to {
                            transform: translate(-350px, 300px) rotate(15deg);
                        }
                    }
                    @keyframes final-location-3 {
                        from {
                            transform: translate(0, 0);
                        }
                        to {
                            transform: translate(850px, -250px) rotate(-30deg);
                        }
                    }
                    @keyframes final-location-4 {
                        from {
                            transform: translate(0, 0);
                        }
                        to {
                            transform: translate(-280px, -250px) rotate(30deg);
                        }
                    }
                `}
            </style>
            <span className={`inline-block go-to-${block} ${className}`}>
                {children}
            </span>
        </>
    )
}

function LoadingBarToCircle() {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-48 h-2 relative">
                <div className="fixed w-full h-full bg-gray-200 rounded-full overflow-hidden loading-container">
                    <div className="h-full bg-blue-500 loading-bar" />
                </div>
            </div>
            <style>{`
                @keyframes loadingBar {
                    0% { width: 0%; border-radius: 9999px; }
                    20% { width: 100%; border-radius: 9999px; }
                    50% { width: 100%; border-radius: 9999px; }
                    60% { 
                        width: 8px;
                        height: 8px;
                        border-radius: 9999px;
                        transform: translate(184px, 0);
                    }
                    70% {
                        width: 48px;
                        height: 48px;
                        border-radius: 9999px;
                        transform: translate(164px, -20px);
                    }
                    80%, 100% {
                        width: 48px;
                        height: 48px;
                        border-radius: 9999px;
                        transform: translate(164px, -20px);
                    }
                }

                @keyframes containerTransform {
                    0%, 50% { 
                        width: 100%;
                        height: 8px;
                        transform: translate(0, 0);
                    }
                    60% {
                        width: 8px;
                        height: 8px;
                        transform: translate(184px, 0);
                    }
                    70%, 100% {
                        width: 150px;
                        height: 150px;
                        transform: translate(150px, -75px);
                    }
                }

                @keyframes colorChange {
                    0%, 59% { 
                        background-color: white;
                    }
                    59.1%, 100% {
                        background-color: #3B81F6;
                    }
                }

                @keyframes bounce {
                    0% {
                        top: 0px;
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                    50% {
                        top: 100px;
                        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                    }
                    100% {
                        top: 0px;
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                }

                @keyframes dampened-bounce {
                    0% {
                        top: 0px;
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                    25% {
                        top: 100px;
                        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                    }
                    45% {
                        top: 30px;
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                    65% {
                        top: 110px;
                        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                    }
                    85% {
                        top: 40px;
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                    100% {
                        top: 120px;
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                }

                @keyframes horizontal-bounce {
                    0% {
                        left: 0px;
                    }
                    100% {
                        left: 150px;
                    }
                }

                .loading-container {
                    animation: containerTransform 4s ease-in-out forwards,
                        colorChange 4s steps(1) forwards,
                        dampened-bounce 1.5s forwards 3s cubic-bezier(0.36, 0, 0.66, 1),
                        horizontal-bounce 1.5s forwards 3s linear;
                }

                .loading-bar {
                    animation: loadingBar 4s ease-in-out forwards;
                    transform-origin: center;
                }
            `}</style>
        </div>
    );
}

function Portal() {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = (e) => {
        // Get click coordinates relative to the container
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        setIsOpen(true);
    };
  
    return (
        <div className="fixed inset-0 bg-[#37718E] text-8xl ${jaro.className}">
            {/* Hidden content (visible through portal) */}
            <div className={`fixed inset-0 bg-[#37718E] text-8xl ${jaro.className}`}>
                <LoadingBarToCircle />
                <div className={`absolute top-12 left-12`}>
                    <SpinningSquare className="text-white" block={1}>E</SpinningSquare>
                </div>
                <div className={`absolute top-12 right-12`}>
                    <SpinningSquare className="text-white" block={2}>A</SpinningSquare>
                </div>
                <div className={`absolute bottom-12 left-12`}>
                    <SpinningSquare className="text-white" block={3}>S</SpinningSquare>
                </div>
                <div className={`absolute bottom-12 right-12`}>
                    <SpinningSquare className="text-white" block={4}>N</SpinningSquare>
                </div>
            </div>
    
            {/* Foreground with expanding portal hole */}
            <div 
            className="absolute inset-0 bg-gray-900 cursor-pointer"
            style={{
                clipPath: isOpen 
                ? `circle(150% at 75% 75%)`
                : `circle(2rem at 75% 75%)`,
                transition: 'clip-path 1s ease-in-out'
            }}
            onClick={handleClick}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-xl opacity-50">
                        Content
                    </p>
                </div>
            </div>

        </div>
    );
};

export default function LoadingPage() {
    return (
        <div className={`fixed inset-0 bg-[#37718E] text-8xl ${jaro.className}`}>
            <Portal />
        </div>
    )
}