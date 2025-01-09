export function LoadingBarToCircle() {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-[12vw] h-[0.5vh] relative">
                <div className="fixed w-full h-full bg-gray-200 rounded-full overflow-hidden loading-container">
                    <div className="h-full bg-[#1D536D] loading-bar" />
                </div>
            </div>
            <style>{`
                @keyframes loadingBar {
                    0% { width: 0%; border-radius: 9999px; }
                    20% { width: 100%; border-radius: 9999px; }
                    50% { width: 100%; border-radius: 9999px; }
                    60% { 
                        width: 0.5vw;
                        height: 0.5vw;
                        border-radius: 9999px;
                        transform: translate(12vw, 0);
                    }
                    70% {
                        width: 3vw;
                        height: 3vw;
                        border-radius: 9999px;
                        transform: translate(10vw, 0);
                    }
                    80%, 100% {
                        width: 3vw;
                        height: 3vw;
                        border-radius: 9999px;
                        transform: translate(10vw, 0);
                    }
                }

                @keyframes containerTransform {
                    0%, 50% { 
                        width: 100%;
                        height: 0.5vw;
                        transform: translate(0, 0);
                    }
                    60% {
                        width: 0.5vw;
                        height: 0.5vw;
                        transform: translate(12vw, 0);
                    }
                    70%, 100% {
                        width: 9.375vw;
                        height: 9.375vw;
                        transform: translate(9vw, -5vw);
                    }
                }

                @keyframes colorChange {
                    0%, 59% { 
                        background-color: white;
                    }
                    59.1%, 100% {
                        background-color: #1D536D;
                    }
                }

                @keyframes bounce {
                    0% {
                        top: 0;
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                    50% {
                        top: 6.25vh;
                        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                    }
                    100% {
                        top: 0;
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                }

                @keyframes dampened-bounce {
                    0% {
                        top: 0px;
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                    25% {
                        top: 6.25vh;
                        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                    }
                    45% {
                        top: 1.875vh;
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                    65% {
                        top: 6.875vh;
                        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                    }
                    85% {
                        top: 2.5vh;
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                    100% {
                        top: 7.5vh;
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                }

                @keyframes horizontal-bounce {
                    0% {
                        left: 0;
                    }
                    100% {
                        left: 9.375vw;
                    }
                }

                @keyframes hide {
                    0% {
                        visibility: visible;
                    }
                    99.9% {
                        visibility: visible;
                    }
                    100% {
                        visibility: hidden;
                    }
                }

                .loading-container {
                    animation: containerTransform 4s ease-in-out forwards,
                        colorChange 4s steps(1) forwards,
                        dampened-bounce 1.5s forwards 3s cubic-bezier(0.36, 0, 0.66, 1),
                        horizontal-bounce 1.5s forwards 3s linear,
                        hide 1s forwards 5.5s;
                }

                .loading-bar {
                    animation: loadingBar 4s ease-in-out forwards;
                    transform-origin: center;
                }
            `}</style>
        </div>
    );
}