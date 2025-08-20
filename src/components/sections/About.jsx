import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const languages = [
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "C",
        "SQL",
        "HTML/CSS",
      ];
      
      const frameworks = [
        "React",
        "React Native",
        "Next.js",
        "Node.js",
        "Tailwind",
        "Expo", 
        "Apollo (GraphQL)"
      ];
      
      const tools = [
        "Git",
        "Figma",
        "MongoDB",
        "Docker", 
        "AWS",
        "Flask",
        "Spline",
        "Three.js",
        "Google Analytics",
        "Looker Studio",
        "Selenium"
      ];
      
      

    return (
        <section 
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-[#93886C] border hover:-translate-y-1 transition-all">
                        <p className="text-[#33290D] mb-5">
                            I'm passionate about blending creativity with technical depth to build intuitive,
                            user-first experiences, which is why I'm particularly drawn to front-end development. 
                            My background spans full-stack engineering, UX design, and data science. 
                            At the core, I believe in bringing innovative ideas to life through thoughtful, scalable tech.
                        </p>
                        <div className="grid frid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Programming Langauges</h3>
                                <div className="flex flex-wrap gap-2">
                                    {languages.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-[#F6F5E9] py-1 px-3 rounded-full text-sm hover:bg-[#E4E2CC] hover:shadow-[0_2px_8px_rgb(51, 41, 13, 0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frameworks</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frameworks.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-[#F6F5E9] py-1 px-3 rounded-full text-sm hover:bg-[#E4E2CC] hover:shadow-[0_2px_8px_rgb(51, 41, 13, 0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border border-[#93886C] border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-3">Education</h3>
                            <h3 className="space-y-4 mb-4">
                                <strong>B.A. in Computer Science</strong> - New York University (2023-2026)
                            </h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <strong>Relevant Coursework:</strong> Data Structures, Algorithms, Operating Systems, Data Management & Analysis, Linear Algebra, Discrete Mathematics
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border border-[#93886C] border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-3 flex flex-col">Work Experience</h3>
                            <h3 className="mb-2 flex flex-col">
                                <strong>Software Engineer Intern @Quanticore</strong>
                                <ul className="font-normal list-disc list-inside space-y-4">
                                        <li>
                                            <em>July 2025 - Present</em>
                                        </li>
                                </ul>
                            </h3>
                            <h3 className="mb-2 flex flex-col">
                                <strong>Software Engineer Intern @RGTN</strong>
                                <ul className="font-normal list-disc list-inside space-y-4">
                                        <li>
                                            <em>June 2025 - August 2025</em>
                                        </li>
                                </ul>
                            </h3>
                            <h3 className="mb-2 flex flex-col">
                                <strong>Data Science Intern @LiTV</strong>
                                <ul className="font-normal list-disc list-inside space-y-4">
                                        <li>
                                            <em>June 2024 - August 2024</em>
                                        </li>
                                </ul>
                            </h3>
                            <h3 className="mb-2 flex flex-col">
                                <strong>Software Engineer Intern @Octavate</strong>
                                <ul className="font-normal list-disc list-inside space-y-4">
                                        <li>
                                            <em>March 2024 - August 2024</em>
                                        </li>
                                </ul>
                            </h3>
                            <h3 className="mb-1 flex flex-col">
                                <strong>Director of Marketing @GLO</strong>
                                <ul className="font-normal list-disc list-inside space-y-4">
                                        <li>
                                            <em>May 2023 - January 2024</em>
                                        </li>
                                </ul>
                            </h3>

                            <div className="flex justify-between items-center">
                                <a 
                                    href="/venetialiu/public/Venetia_Liu_Resume.pdf"
                                    download
                                    className="hover:text-[#93886C] transition-colors my-4"
                                >
                                    <u>Download Resume</u> ↓
                                </a>
                            </div>
                                
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>

    );
};
