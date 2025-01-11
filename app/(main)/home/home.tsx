import { karla } from 'app/ui/fonts'
import { comforter } from 'app/ui/fonts'

export function Home({ className }) {
    return (
        <div className={`relative flex flex-col w-full h-screen ${className}`}>
            <div className="absolute inset-0 flex flex-col mt-[15vh]">
                <div id="hero-text" className="flex-1 flex flex-col items-center mt-[10vh] justify-center">
                    <h1 style={{ fontSize: "4vh" }} className={`flex justify-center font-thin antialiased ${karla.className}`}>Hi, my name is</h1>
                    <h1 style={{ fontSize: "40vh" }} className={`flex justify-center antialiased ml-[-3vw] mt-[-5vh] ${comforter.className}`}>Sean</h1>
                </div>
                <div id="cta" className="justify-center flex flex-col items-center">
                    <h2 style={{ fontSize: "2.5vh", maxWidth: "50vh" }} className={`flex text-center font-light ${karla.className}`}>I aspire to build impactful projects.</h2>
                    <div className="flex justify-center mt-[2vh] animate-bounce">
                        <svg 
                            width="10vh" 
                            height="5vh" 
                            viewBox="0 0 100 30" 
                            className="fill-[#C33C54]"
                        >
                            <path d="M0 0 L50 15 L100 0 L50 27 L0 0Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}