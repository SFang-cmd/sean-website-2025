import { karla } from '../../ui/fonts'
import linkedIn from '../../attachments/linkedinIcon.png';
import github from '../../attachments/githubIcon.png';
import Image from 'next/image';

export function Contacts({ className }) {
    return (
        <div className={`flex flex-col justify-center items-center ${className}`}>
            <p className="text-center text-8xl font-thin text-white">
                Want to connect?
            </p>
            <a href="mailto:sefang@seas.upenn.edu" className="underline text-center m-4 text-xl font-light text-white">sefang@seas.upenn.edu</a>
            <div className="flex flex-row">
                <a href="https://www.linkedin.com/in/sefang/" target="_blank" className={`transition-all text-lg rounded-full bg-[#548BA7] hover:bg-[#37718E] flex align-center items-center relative py-1 m-1 ${karla.className}`}>
                    <Image 
                        src={linkedIn} 
                        alt="Logo"
                        width={35}
                        height={30}
                        className="pl-2"
                     />
                    <p className="pr-4">LinkedIn</p>
                </a>
                <a href="https://github.com/SFang-cmd" target="_blank" className={`transition-all text-lg rounded-full bg-[#548BA7] hover:bg-[#37718E] flex align-center items-center relative py-1 m-1 ${karla.className}`}>
                    <Image 
                        src={github}
                        alt="Logo"
                        width={35}
                        height={30}
                        className="pl-2"
                     />
                    <p className="pr-4">GitHub</p>
                </a>
            </div>
        </div>
    );
}