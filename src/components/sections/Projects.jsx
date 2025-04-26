import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

    return( 
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-[#93886C] hover:-translate-y-1 hover:border-[#33290D] hover:shadow-[0_2px_8px_rgba(51, 41, 13, 0.6)] transition-all">
                            <h3 className="text-xl font-bold mb-2">URL Shortener</h3>
                            <p className="mb-4">A fullstack web application that allows users to create short and easy-to-share URLs from long and complex ones</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "TailwindCSS", "Node.js"].map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-[#F6F5E9] py-1 px-3 rounded-full text-sm hover:bg-[#E4E2CC] hover:shadow-[0_2px_8px_rgba(51, 41, 13, 0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a 
                                    href="https://github.com/venetialiu/url-shortener"
                                    className="hover:text-[#93886C] transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-[#93886C] hover:-translate-y-1 hover:border-[#33290D] hover:shadow-[0_2px_8px_rgba(51, 41, 13, 0.6)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Real-Time AI Q&A Website</h3>
                            <p className="mb-4">A full-stack real-time interactive web application leveraging the OpenAI API for dynamic, personalized Q&A functionality about the developer.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "TailwindCSS", "Node.js", "Three.js", "AWS"].map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-[#F6F5E9] py-1 px-3 rounded-full text-sm hover:bg-[#E4E2CC] hover:shadow-[0_2px_8px_rgba(51, 41, 13, 0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a 
                                    href="http://octavate-dev2.us-east-1.elasticbeanstalk.com/ai"
                                    className="hover:text-[#93886C] transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-[#93886C] hover:-translate-y-1 hover:border-[#33290D] hover:shadow-[0_2px_8px_rgba(51, 41, 13, 0.6)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Geospatial Analysis for Shaping Public Policy</h3>
                            <p className="mb-4">Conducted geospatial analysis and visualized insights to identify flood-prone areas, providing actionable policy recommendations for low-income communities.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Seaborn", "Matplotlib", "Pandas"].map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-[#F6F5E9] py-1 px-3 rounded-full text-sm hover:bg-[#E4E2CC] hover:shadow-[0_2px_8px_rgba(51, 41, 13, 0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a 
                                    href="https://github.com/kkrysw/Datathon2024"
                                    className="hover:text-[#93886C] transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
    </section>
    );   
}