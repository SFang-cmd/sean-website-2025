import { karla } from '../../ui/fonts'

function ProjectCard({ project, description, link, source, badge, tinyButton, className, badgeClass, sourceClass }) {
    const handleCardClick = () => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    const handleSourceClick = (e) => {
        e.stopPropagation();
        window.open(source, '_blank', 'noopener,noreferrer');
    };

    return(
        <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCardClick}
            className={`relative max-lg:row-start-1 absolute inset-px rounded-[3rem] ${className}`}
        >
            <div className="relative flex h-full flex-col px-10 py-8 max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${badgeClass}`}>{badge}</span>
                    <div
                        onClick={handleSourceClick}
                        className={`flex items-center justify-center rounded-md border px-2 py-1 border-transparent  font-light text-white text-xs ${sourceClass}`}
                    >
                        {tinyButton}
                    </div>
                </div>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{project}</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    {description}
                </p>
            </div>
        </a>
    )
}

export default function ProjectGrid() {
    return (
        <div className="flex flex-col w-3/4 p-4">
        {/* First row */}
            <div className="grid grid-cols-3 gap-4 mb-4">
            {/* StudiApp */}
                <ProjectCard 
                    project="StudiApp"
                    description="Ace your SATs with my current in-development app, StudiApp. Unlock badges and achieve your dream SAT score with interactive lessons, realistic questions, and real-time progress tracking!"
                    link="https://github.com/SFang-cmd/StudiApp"
                    source="https://github.com/SFang-cmd/StudiApp"
                    badge="Current Project"
                    tinyButton="Source Code"
                    className="bg-blue-200 hover:bg-blue-300"
                    badgeClass="bg-[#FFE5EA] text-[#C33C54] ring-[#C33C54]"
                    sourceClass="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                />
            {/* Nanoneuro */}
                <ProjectCard 
                    project="Nanoneuro Systems"
                    description="I'm currently developing software that'll power the future semiconductors of tomorrow. Check out my startup, where we're designing biological semiconductors built on human brain neurons."
                    link="https://www.f6s.com/company/nanoneuro-systems#people"
                    source="https://www.nanoneuro.systems/"
                    badge="Startup Cofounder"
                    tinyButton="About"
                    className="bg-purple-200 hover:bg-purple-300"
                    badgeClass="bg-gray-200 text-gray-600 ring-gray-600"
                    sourceClass="bg-purple-400 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2"
                />
            {/* Fitalyst */}
                <ProjectCard 
                    project="Dash by Fitalyst"
                    description="See important work due and upcoming events in one place. Dash is a smart home page with a timer and smart assistant for students to stay on top of their game."
                    link="https://www.fitalyst.com/"
                    source="https://github.com/SFang-cmd/DashDocumentAssistant"
                    badge="Startup Intern"
                    tinyButton="Demo Code"
                    className="bg-green-200 hover:bg-green-300"
                    badgeClass="bg-[#ffdecc] text-[#F68E4E] ring-[#F68E4E]"
                    sourceClass="bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
                />
            </div>

        {/* Second row */}
            <div className="grid grid-cols-3 gap-4">
                {/* Headline Predictor */}
                <ProjectCard 
                    project="NBC or Fox? Headline Predictor"
                    description="Want to know whether your headline is in the style of NBC or Fox News? Try my machine learning model trained on over 600k headlines. It placed 3rd in a machine learning course competition."
                    link="https://colab.research.google.com/drive/1HtbPyO1BdONt4ouuKvkmwBaVSeMigInp?usp=sharing"
                    source="https://drive.google.com/file/d/1ln_d7tB1m5HJBgU8C2ixSHJMmBBuJP3N/view?usp=sharing"
                    badge="Course Final Project"
                    tinyButton="Final Report"
                    className="bg-red-100 hover:bg-red-200"
                    badgeClass="bg-blue-100 text-blue-500 ring-blue-500"
                    sourceClass="bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
                />
                {/* Reels Maker */}
                <ProjectCard 
                    project="Instagram Reels Maker"
                    description="Create your own Instagram Reels storytime with this python app. I was just bored one day, maybe this'll make you less bored?"
                    link="https://github.com/SFang-cmd/ReelsMaker"
                    source="https://github.com/SFang-cmd/ReelsMaker"
                    badge="Passion Project"
                    tinyButton="Source Code"
                    className="bg-blue-100 hover:bg-blue-200"
                    badgeClass="bg-[#FFE5EA] text-[#C33C54] ring-[#C33C54]"
                    sourceClass="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                />
                {/* Minesweeper */}
                <ProjectCard 
                    project="Minesweeper"
                    description="Do you even need to know more? It's Minesweeper. In Java. With a lot of features. Play it now!"
                    link="https://github.com/SFang-cmd/minesweeper/releases/tag/v1"
                    source="https://github.com/SFang-cmd/minesweeper"
                    badge="Course Final Project"
                    tinyButton="Source Code"
                    className="bg-red-100 hover:bg-red-200"
                    badgeClass="bg-blue-100 text-blue-500 ring-blue-500"
                    sourceClass="bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
                />
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