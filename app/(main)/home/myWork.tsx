import { karla } from '../../ui/fonts'

export default function ProjectGrid() {
    return (
        <div className="flex flex-col w-3/4 p-4">
        {/* First row */}
            <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Square card */}
                <div className="relative max-lg:row-start-1">
                    <a href="https://github.com/SFang-cmd/StudiApp" target="_blank">
                        <div className="absolute inset-px rounded-[3rem] bg-blue-100 hover:bg-blue-200"></div>
                            <div className="relative flex h-full flex-col rounded-[3rem] max-lg:rounded-t-[calc(2rem+1px)] hover:bg-blue-200">
                                <div className="px-8 sm:px-10 sm:pt-8">
                                    <div className="flex items-center justify-between">
                                        <span className="inline-flex items-center rounded-md bg-[#FFE5EA] px-2 py-1 text-xs font-medium text-[#C33C54] ring-1 ring-inset ring-[#C33C54]">Current Project</span>
                                        <a
                                            className="flex items-center justify-center rounded-md border px-2 py-1 border-transparent bg-blue-500 font-light text-white text-xs hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                                            href="https://github.com/SFang-cmd/StudiApp"
                                            target="_blank"
                                        >
                                            Source Code
                                        </a>
                                    </div>
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">StudiApp</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Ace your SATs with StudiApp's interactive lessons, realistic questions, and real-time progress tracking. Unlock badges and achieve your dream SAT score!
                                    </p>
                                </div>
                            <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 sm:px-10 pb-10">
                                <svg width="200" height="140" viewBox="0 0 50 35" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                    <g>
                                        <title>Layer 1</title>
                                        <rect x="-5" y="0.09091" id="svg_1" fill="#2A2A2A" height="35" width="50"/>
                                        <rect stroke="null" id="svg_2" fill="#1A1A1A" height="6" width="100"/>
                                        <circle id="svg_3" fill="#FF5F56" r="1" cy="3" cx="4"/>
                                        <circle id="svg_4" fill="#FFBD2E" r="1" cy="3" cx="7"/>
                                        <circle id="svg_5" fill="#27C93F" r="1" cy="3" cx="10"/>
                                        <rect stroke="null" id="svg_6" fill="#FFFFFF" height="29" width="100" y="6"/>
                                        <rect stroke="null" id="svg_7" fill="#E0E0E0" rx="0.5" height="3" width="80" y="9.09091" x="5"/>
                                        <rect id="svg_8" stroke-width="0.2" stroke="#E0E0E0" fill="#F5F5F5" rx="1" height="20" width="80" y="13.09091" x="5"/>
                                        <rect id="svg_9" stroke-width="0.2" stroke="#E0E0E0" fill="#FFFFFF" rx="0.5" height="7" width="37" y="15.09091" x="7"/>
                                        <circle id="svg_10" fill="#E0E0E0" r="1" cy="18.59091" cx="9"/>
                                        <rect id="svg_11" fill="#E0E0E0" rx="0.3" height="2" width="30" y="17.59091" x="11"/>
                                        <rect id="svg_12" stroke-width="0.2" stroke="#E0E0E0" fill="#FFFFFF" rx="0.5" height="7" width="37" y="15.09091" x="46"/>
                                        <circle id="svg_13" fill="#E0E0E0" r="1" cy="18.59091" cx="48"/>
                                        <rect id="svg_14" fill="#E0E0E0" rx="0.3" height="2" width="30" y="17.59091" x="50"/>
                                        <rect id="svg_15" stroke-width="0.2" stroke="#E0E0E0" fill="#FFFFFF" rx="0.5" height="7" width="37" y="24.09091" x="7"/>
                                        <circle id="svg_16" fill="#E0E0E0" r="1" cy="27.59091" cx="9"/>
                                        <rect id="svg_17" fill="#E0E0E0" rx="0.3" height="2" width="30" y="26.59091" x="11"/>
                                        <rect id="svg_18" stroke-width="0.2" stroke="#E0E0E0" fill="#FFFFFF" rx="0.5" height="7" width="37" y="24.09091" x="46"/>
                                        <circle id="svg_19" fill="#E0E0E0" r="1" cy="27.59091" cx="48"/>
                                        <rect id="svg_20" fill="#E0E0E0" rx="0.3" height="2" width="30" y="26.59091" x="50"/>
                                    </g>
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
        <div className={`flex flex-col justify-center items-center mt-[10vh] ${className}`}>
            <p className="text-center text-8xl font-thin text-white">
                My Work
            </p>
            <h2 className="text-center m-4 text-xl font-light text-white">Projects and Work Experience</h2>
            <ProjectGrid />
        </div>
    );
}