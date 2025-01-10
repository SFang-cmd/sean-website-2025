export function SpinningSquare({ children, className="", block }) {

    return (
        <>
            <style>
                {`
                    .go-to-1 {
                        animation: spin-clockwise 1s cubic-bezier(0.4, 0, 0.2, 1) 3,
                            final-location-1 2s cubic-bezier(0.4, 0, 0.2, 1) 3s forwards;
                    }
                    .go-to-2 {
                        animation: spin-counterclockwise 1s cubic-bezier(0.4, 0, 0.2, 1) 3,
                            final-location-2 2s cubic-bezier(0.4, 0, 0.2, 1) 3s forwards;
                    }
                    .go-to-3 {
                        animation: spin-counterclockwise 1s cubic-bezier(0.4, 0, 0.2, 1) 3,
                            final-location-3 2s cubic-bezier(0.4, 0, 0.2, 1) 3s forwards;
                    }
                    .go-to-4 {
                        animation: spin-clockwise 1s cubic-bezier(0.4, 0, 0.2, 1) 3,
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
                            transform: translate(58.5vw, 28vh) rotate(-15deg);
                        }
                    }
                    @keyframes final-location-2 {
                        from {
                            transform: translate(0, 0);
                        }
                        to {
                            transform: translate(-24vw, 28vh) rotate(15deg);
                        }
                    }
                    @keyframes final-location-3 {
                        from {
                            transform: translate(0, 0);
                        }
                        to {
                            transform: translate(54.5vw, -36vh) rotate(-30deg);
                        }
                    }
                    @keyframes final-location-4 {
                        from {
                            transform: translate(0, 0);
                        }
                        to {
                            transform: translate(-19.5vw, -36vh) rotate(30deg);
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