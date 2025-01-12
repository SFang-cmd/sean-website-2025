import { karla } from '../../ui/fonts'

export function Resume({ className }) {
    return (
        <div className={`flex flex-col justify-center items-center ${className}`}>
            <p className="text-center text-8xl font-thin text-white">
                Resume
            </p>
            <h2 className="text-center m-4 text-xl font-light text-white">Check Out Some of my Work</h2>
            <a href="https://drive.google.com/file/d/1RkimJ9Q5AO7NiU0HZtA18Z3eTzd7zuzp/view?usp=drive_link" className={`transition-all text-lg rounded-full bg-[#548BA7] hover:bg-[#37718E] flex align-middle relative py-1 px-4 m-1 ${karla.className}`}>
                My Resume
            </a>
        </div>
    );
}