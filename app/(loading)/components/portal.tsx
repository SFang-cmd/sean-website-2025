import { useState } from 'react';
import { SpinningSquare } from './loadingLetters';
import { LoadingBarToCircle } from './loadingBar';
import { jaro } from '../../ui/fonts';
import { useRouter } from 'next/navigation';
import { Home } from 'app/(main)/home/home';
import Navbar from 'app/ui/components/nav';

const navItems = [
    {
      path: '#home',
      name: '&Home',
      id: 'home',
    },
    {
      path: '#my-work',
      name: 'My Work',
      id: 'my-work',
    },
    {
      path: '#academics',
      name: 'Academics',
      id: 'academics',
    },
    {
      path: '#resume',
      name: 'Resume',
      id: 'resume',
    },
    {
      path: '#contact',
      name: 'Contact',
      id: 'contact',
    }
  ]

export function Portal() {
    const [state, setState] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();
  
    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        setState(2);

        setTimeout(() => {
            router.push('/home');
        }, 1000);
    };

    setTimeout(() => {
        state === 0 && setState(1);
    }, 4000);

    const getPortalRadius = () => {
        if (state === 0) return '0%';
        if (state === 2) return '150%';
        return isHovered ? '5.25vw' : '4.75vw';
    };
  
    return (
        <div className="fixed inset-0 bg-[#37718E] ${jaro.className}">
            {/* Hidden content (visible through portal) */}
            <div style={{ fontSize: "6vw"}} className={`fixed inset-0 bg-[#37718E] ${jaro.className}`}>
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

            {/* Background */}
            <LoadingBarToCircle />
    
            {/* Foreground with expanding portal hole */}
            <div 
                className="absolute inset-0 cursor-pointer hidden-element"
                style={{
                    clipPath: `circle(${getPortalRadius()} at 67vw 56.5vh)`,
                    transition: 'clip-path 1s ease-out 0.15s',
                    background: "radial-gradient(circle, hsl(210, 70%, 25%) 0%, hsl(230, 65%, 28%) 100%)",
                }}
                onClick={handleClick}
                onMouseEnter={() => state === 1 && setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex w-full justify-center py-4">
                    <Navbar items={navItems} selected={'home'}/>
                </div>
                <div id="content" className="absolute inset-0 flex flex-auto flex-col min-h-screen text-white justify-center">
                    <Home className="min-h-screen"/>
                </div>
            </div>
        </div>
    );
}