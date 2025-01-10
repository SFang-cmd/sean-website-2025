import { karla } from '../../ui/fonts'

export default function ProjectGrid() {
    return (
        <div className="flex flex-col w-3/4 p-4">
        {/* First row */}
            <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Square card */}
                <div className="relative max-lg:row-start-1">
                    <a href="https://github.com/SFang-cmd/StudiApp" target="_blank">
                        <div className="absolute inset-px rounded-lg bg-[#DDFBFF] max-lg:rounded-t-[2rem]"></div>
                            <div className="relative flex h-full flex-col rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                <div className="px-8 sm:px-10 sm:pt-8">
                                    <span className="inline-flex items-center rounded-md bg-[#FFE5EA] px-2 py-1 text-xs font-medium text-[#C33C54] ring-1 ring-inset ring-[#C33C54]">Current Project</span>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Studi App</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Ace your SATs with Studi App's interactive lessons, realistic questions, and real-time progress tracking. Unlock badges and achieve your dream SAT score!
                                    </p>
                                </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-5 max-lg:pt-10 sm:px-10 lg:pb-8">
                                {/* SVG Header */}
                                <svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Background */}
                                    <rect x="0" y="0" width="100" height="100" fill="#2A2A2A"/>
                                    
                                    {/* Window */}
                                    <rect x="0" y="0" width="100" height="8" fill="#1A1A1A"/>
                                    
                                    {/* Traffic Lights */}
                                    <circle cx="4" cy="4" r="1" fill="#FF5F56"/>
                                    <circle cx="7" cy="4" r="1" fill="#FFBD2E"/>
                                    <circle cx="10" cy="4" r="1" fill="#27C93F"/>
                                    
                                    {/* Menu Button */}
                                    <rect x="2" y="10" width="4" height="0.5" fill="#808080"/>
                                    <rect x="2" y="11.5" width="4" height="0.5" fill="#808080"/>
                                    <rect x="2" y="13" width="4" height="0.5" fill="#808080"/>
                                    
                                    {/* Dropdown */}
                                    <rect x="90" y="10" width="8" height="3" rx="0.5" ry="0.5" fill="#333333"/>
                                    <path d="M96 11.5 L97 12.5 L95 12.5 Z" fill="#808080"/>
                                    
                                    {/* Content Area*/}
                                    <rect x="0" y="16" width="101" height="84" fill="#FFFFFF"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
            {/* Wide card spanning 2 columns */}
                <div className="bg-blue-100 rounded-lg p-4 col-span-2">
                    Wide Card 1
                </div>
            </div>

        {/* Second row */}
            <div className="grid grid-cols-3 gap-4">
            {/* Wide card spanning 2 columns */}
                <div className="bg-orange-100 rounded-lg p-4 col-span-2">
                    Wide Card 2
                </div>
            {/* Square card */}
                <div className="bg-green-100 rounded-lg p-4">
                    Square 2
                </div>
            </div>
        </div>
    )
}
  

export function MyWork({ className }) {
    return (
        <div className={`flex flex-col justify-center items-center ${className}`}>
            <p className="text-center text-8xl font-thin text-white">
                My Work
            </p>
            <h2 className="text-center m-4 text-xl font-light text-white">Projects and Work Experience</h2>
            <ProjectGrid />
        </div>
    );
}