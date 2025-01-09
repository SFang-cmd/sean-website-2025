import { karla } from 'app/ui/fonts'
import { comforter } from 'app/ui/fonts'

export function Home() {
    return (
        <div className="relative flex flex-col w-full h-screen">
            <div className="absolute inset-0 flex flex-col mt-[15vh]">
                <div id="hero-text" className="flex-1 flex flex-col items-center justify-center">
                    <h1 style={{ fontSize: "3.5vh" }} className={`flex justify-center ${karla.className}`}>Hi, my name is</h1>
                    <h1 style={{ fontSize: "30vh" }} className={`flex justify-center ml-[-3vw] mt-[-3vh] ${comforter.className}`}>Sean</h1>
                </div>
                <div id="cta" className="justify-center flex flex-col items-center">
                    <h2 style={{ fontSize: "2.5vh", maxWidth: "50vh" }} className={`flex text-center ${karla.className}`}>I want to craft technological experiences that’ll impact others.</h2>
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