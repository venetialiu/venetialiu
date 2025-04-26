import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden":""
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(246,245,233,0.8)] backdrop-blur-lg border-b border-[#33290D]/100">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-[#33290D]">
                        Venetia Liu
                    </a>

                    <div 
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-[#33290D] hover:text-[#93886C] transition-colors"> Home </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-[#33290D] hover:text-[#93886C] transition-colors"> About </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#projects" className="text-[#33290D] hover:text-[#93886C] transition-colors"> Projects </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#contact" className="text-[#33290D] hover:text-[#93886C] transition-colors"> Contact </a>
                    </div>

                </div>
            </div>
        </nav>
    );

}