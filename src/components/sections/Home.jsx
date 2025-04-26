import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section 
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <div>
                <RevealOnScroll>
                    <div className="flex justify-center">
                        <img 
                            src="/self_portrait.png" 
                            alt="Portrait of Venetia Liu" 
                            className="w-1/2 md:w-2/3 md:max-w-sm mt-8 mb-3"
                        />
                    </div>
                    <div className="text-center z-10 px-4">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            I'm Venetia Liu.
                        </h1>

                        <p className="text-lg mb-8 max-w-lg mx-auto">
                            a Software Engineer studying Computer Science & Data Science at NYU.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a href="#projects" className="bg-[#EEEDDC] py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(51, 41, 13, 0.4)]">
                                View Projects
                            </a>

                            <a href="#contact" className="bg-[#EEEDDC] py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(51, 41, 13, 0.4)]">
                                Contact Me
                            </a>

                        </div>
                    </div>

                </RevealOnScroll>
            </div>
            <a 
                href="#projects" 
                className="absolute top-[46%] right-[10%] group"
            >
                <img 
                src="/monster_project.png" 
                alt="Little Project Monster" 
                className="w-23 md:w-37 object-contain cursor-pointer"
                />
                <div className="absolute bottom-full mb-4 right-1/2 transform translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 bg-white text-[#33290D] text-sm rounded-lg shadow-lg p-2 w-48 text-center">
                Why not go check out her project? Personllay, I realy like them.
                </div>
            </a>
            <a 
                href="#about" 
                className="absolute top-[20%] right-[76%] group"
            >
                <img 
                src="/monster_about.png" 
                alt="Little About Monster" 
                className="w-27 md:w-46 object-contain cursor-pointer"
                />
                <div className="absolute bottom-full mb-4 right-1/2 transform translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 bg-white text-[#33290D] text-sm rounded-lg shadow-lg p-2 w-48 text-center">
                You can find her resume at the About section!
                </div>
            </a>
            
        </section>

    );
};