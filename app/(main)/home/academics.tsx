import { karla } from '../../ui/fonts'

function ProjectCard({ project, description, link, source, badge, tinyButton, className, badgeClass, sourceClass }) {
    const handleCardClick = (e) => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    const handleSourceClick = (e) => {
        e.stopPropagation();
        window.open(source, '_blank', 'noopener,noreferrer');
    };

    return(
        <div
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
                <p className="mt-2 text-xl font-medium tracking-tight text-gray-950 max-lg:text-center">{project}</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default function AcademicGrid() {
    return (
        <div className="flex flex-col w-3/4 p-4">
        {/* First row */}
            <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Ebike */}
                <ProjectCard 
                    project="To E-Bike or Not to E-Bike?"
                    description="We've all seen the rental bikes in cities. In this study, I analyzed the current US e-bike landscape using machine learning, data analysis, and business strategy, recommending environmental and social policies to aid their adoption."
                    link="https://drive.google.com/file/d/1Ug-bv2vPCI1Za1IZ3Nk0McfHXTeTnk2V/view?usp=drive_link"
                    source="https://drive.google.com/file/d/1Ug-bv2vPCI1Za1IZ3Nk0McfHXTeTnk2V/view?usp=drive_link"
                    badge="Case Study"
                    tinyButton="View the Paper"
                    className="bg-blue-200 hover:bg-blue-300"
                    badgeClass="bg-[#FFE5EA] text-[#C33C54] ring-[#C33C54]"
                    sourceClass="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                />
            {/* Cycling modeling */}
                <ProjectCard 
                    project="It's over 9000! (Cycling Power)"
                    description="We all love to cycle, but some people do it professionally. In this study, I analyzed the performance of competitive cyclists throughout their races. I used data and python simulations to recommend an optimal race strategy depending on elevation, temperature, and other race factors."
                    link="https://drive.google.com/file/d/1vfgIjkZpuak9AeKtqJu3UfO9dBjiMRDg/view?usp=drive_link"
                    source="https://github.com/SFang-cmd/MCM_Cycling_Models"
                    badge="Case Study"
                    tinyButton="View the Code"
                    className="bg-purple-200 hover:bg-purple-300"
                    badgeClass="bg-gray-200 text-gray-600 ring-gray-600"
                    sourceClass="bg-purple-400 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2"
                />
            {/* Work from Home Paper */}
                <ProjectCard 
                    project="The Future of Work is..."
                    description="The pandemic has changed a lot of things, one of them being how we work. In this study, I analyzed current trends in remote work. Using neural networks and a game theory simulation, I predicted how remote work will look 5 years in the future and its socioeconomic impacts on the world."
                    link="https://drive.google.com/file/d/1yuIsQLqwERMLmgirYW_F2LbA8fw4eNPl/view?usp=drive_link"
                    source="https://drive.google.com/file/d/1yuIsQLqwERMLmgirYW_F2LbA8fw4eNPl/view?usp=drive_link"
                    badge="Case Study"
                    tinyButton="View the Paper"
                    className="bg-green-200 hover:bg-green-300"
                    badgeClass="bg-[#ffdecc] text-[#F68E4E] ring-[#F68E4E]"
                    sourceClass="bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
                />
            </div>

        {/* Second row */}
            <div className="grid grid-cols-3 gap-4 mb-4">
                {/* ACS Paper */}
                <ProjectCard 
                    project="ACS Polystyrene Modeling"
                    description="Polystyrene is a common chemical used in many products. In this educational paper, I used machine learning to determine the relationship between monodisperse and polydisperse polystyrene using molecular weights and concentrations. This paper was published in ACS with currently 2 citations."
                    link="https://pubs.acs.org/doi/10.1021/acs.jchemed.2c00987"
                    source="https://pubs.acs.org/doi/10.1021/acs.jchemed.2c00987"
                    badge="Research Paper"
                    tinyButton="View the Manuscript"
                    className="bg-red-200 hover:bg-red-300"
                    badgeClass="bg-blue-100 text-blue-500 ring-blue-500"
                    sourceClass="bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
                />
                {/* PEM Paper */}
                <ProjectCard 
                    project="Biorenewable Hydrogen PEMs"
                    description="You could say I'm interested in energy. In this study, I developed a novel biorenewable proton exchange membrane for hydrogen fuel cells. I used a combination of machine learning and chemical engineering to optimize the membrane's performance, resulting in a 220% increase in power."
                    link="https://drive.google.com/file/d/1YJle2QUd2MaQi5g4ZNTiyeeMk04X-mOp/view?usp=drive_link"
                    source="https://drive.google.com/file/d/1YJle2QUd2MaQi5g4ZNTiyeeMk04X-mOp/view?usp=drive_link"
                    badge="Conference Paper"
                    tinyButton="View the Abstract"
                    className="bg-blue-200 hover:bg-blue-300"
                    badgeClass="bg-[#FFE5EA] text-[#C33C54] ring-[#C33C54]"
                    sourceClass="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                />
                {/* AEM Paper */}
                <ProjectCard 
                    project="Silver Nanoparticle AEMs"
                    description="Fuel cells are really cool! Check out this conference abstract detailing research I did to find a more energy efficient Anion Exchange Membrane using Silver Nanoparticle coating. I used data analysis and wet lab techniques to optimize the membrane's performance."
                    link="https://drive.google.com/file/d/1KVtO-_KN9kmqB8M2TrDp1UU6ArMVDbcf/view?usp=sharing"
                    source="https://drive.google.com/file/d/1KVtO-_KN9kmqB8M2TrDp1UU6ArMVDbcf/view?usp=sharing"
                    badge="Conference Paper"
                    tinyButton="View the Abstract"
                    className="bg-gray-200 hover:bg-gray-300"
                    badgeClass="bg-gray-100 text-gray-500 ring-gray-500"
                    sourceClass="bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
                />
            </div>
            {/* Third row */}
            <div className="grid grid-cols-3 gap-4 mb-4">
                {/* Lake Mead */}
                <ProjectCard 
                    project="All Roads Lead to Lake Mead"
                    description="This is where it all began. Check out my first case study where I analyzed the water levels of Lake Mead using machine learning and data analysis. I recommended a series of policies to mitigate the water crisis in the Western US, backed by Markov Chain simulations, data analysis, and some good ol' physics."
                    link="https://drive.google.com/file/d/10JyE3HlVtPmfqUFfjurzNsTl7lwDQS7K/view?usp=sharing"
                    source="https://drive.google.com/file/d/10JyE3HlVtPmfqUFfjurzNsTl7lwDQS7K/view?usp=sharing"
                    badge="Case Study"
                    tinyButton="View the Paper"
                    className="bg-pink-200 hover:bg-pink-300"
                    badgeClass="bg-yellow-100 text-yellow-600 ring-yellow-600"
                    sourceClass="bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-offset-2"
                />
                {/* Honeybees */}
                <ProjectCard 
                    project="What's all the buzz?"
                    description="Buzz, buzz... Check out this case study about the honeybee population in the United States. I model it's growth using factors such as climate change, pesticides, and other environmental factors. I finish the paper by recommending policies we can adopt to maintain the honeybee population."
                    link="https://drive.google.com/file/d/1HbgtSlPK6Xutvp66tT11vj2YPsTD37Md/view?usp=drive_link"
                    source="https://github.com/SFang-cmd/BeePop/blob/main/BeePop.py"
                    badge="Case Study"
                    tinyButton="View the Code"
                    className="bg-gray-200 hover:bg-gray-300"
                    badgeClass="bg-purple-100 text-purple-500 ring-purple-500"
                    sourceClass="bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2"
                />
                {/* Actuarial Science */}
                <ProjectCard 
                    project="Lights out Danger"
                    description="How does the weather affect power outages? Check out this Actuarial Science case study that analyzes the impacts of various weather phenomenon on the power grid. I used data analysis and machine learning to predict the likelihood of power outages in the future, and present policies for dealing with these risks."
                    link="https://drive.google.com/file/d/1JnsguUPk-f4sSIEzwdo9RVuvpGGwRj_j/view?usp=drive_link"
                    source="https://drive.google.com/file/d/1JnsguUPk-f4sSIEzwdo9RVuvpGGwRj_j/view?usp=drive_link"
                    badge="Case Study"
                    tinyButton="View the Paper"
                    className="bg-blue-200 hover:bg-blue-300"
                    badgeClass="bg-[#FFE5EA] text-[#C33C54] ring-[#C33C54]"
                    sourceClass="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                />
            </div>
        </div>
    )
}
  

export function Academics({ className }) {
    return (
        <div className={`flex flex-col justify-center items-center mt-[15vh] ${className}`}>
            <p className="text-center text-8xl font-thin text-white">
                Academic Experience
            </p>
            <h2 className="text-center m-4 text-xl font-light text-white">Academic Papers and Case Studies</h2>
            <AcademicGrid />
        </div>
    );
}