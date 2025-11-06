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
                            <h3 className="text-xl font-bold mb-2">Smile Spot</h3>
                            <p className="mb-4">A full-stack web application that lets people capture smiley-shaped objects and pin them on an interactive map.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "MongoDB", "Google OAuth", "JWT", "Node.js", "JavaScript", "Express", "Mapbox"].map((tech, key) => (
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
                                    href="https://github.com/venetialiu/smile-spot"
                                    className="hover:text-[#93886C] transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-[#93886C] hover:-translate-y-1 hover:border-[#33290D] hover:shadow-[0_2px_8px_rgba(51, 41, 13, 0.6)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Shuwa: Sign Language Translation Real-Time Meeting App</h3>
                            <p className="mb-4">A live video conference app designed to translate sign language into summarized text during a meeting, recognizing short and simple signs through a web cam and display translated short summary captions.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Node.js", "Socket.io", "Google OAuth", "WebRTC", "MongoDB"].map((tech, key) => (
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
                                    href="https://github.com/agile-students-fall2025/4-final-gesturetalk"
                                    className="hover:text-[#93886C] transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-[#93886C] hover:-translate-y-1 hover:border-[#33290D] hover:shadow-[0_2px_8px_rgba(51, 41, 13, 0.6)] transition-all">
                            <h3 className="text-xl font-bold mb-2">AI Twin: Venesha</h3>
                            <p className="mb-4">An AI chatbot (twin) version of my portfolio website.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Vite", "TypeScript", "Node.js", "Express", "OpenAI API"].map((tech, key) => (
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
                                    href="https://github.com/venetialiu/ai_twin"
                                    className="hover:text-[#93886C] transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-[#93886C] hover:-translate-y-1 hover:border-[#33290D] hover:shadow-[0_2px_8px_rgba(51, 41, 13, 0.6)] transition-all">
                            <h3 className="text-xl font-bold mb-2">CSV Data Dashboard</h3>
                            <p className="mb-4">A web application that allows users to upload a CSV file containing sales data and visualize it through tables, charts, and summary statistics.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "TailwindCSS", "Papa Parse", "ReCharts"].map((tech, key) => (
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
                                    href="https://github.com/venetialiu/csv-data-dashboard"
                                    className="hover:text-[#93886C] transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-[#93886C] hover:-translate-y-1 hover:border-[#33290D] hover:shadow-[0_2px_8px_rgba(51, 41, 13, 0.6)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Real-Time Stock Price Dashboard</h3>
                            <p className="mb-4">A responsive web application displaying real-time stock data.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "TailwindCSS", "Chart.js", "Axios"].map((tech, key) => (
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
                                    href="https://github.com/venetialiu/stock-dashboard/"
                                    className="hover:text-[#93886C] transition-colors my-4"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
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
                       
                    </div>

                </div>
            </RevealOnScroll>
    </section>
    );   
}
