import React from 'react';

function Header() {
    return (
        <header className="bg-[#1A1A1A] border-b border-[#FFB100]/20">
            <div className="container mx-auto px-4 py-6">
                <nav className="flex flex-wrap items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#FFB100] to-[#FF9000] bg-clip-text text-transparent">
                            JESUS ANTHONY FLORES
                        </h1>
                        <p className="text-xl text-gray-400">DESARROLLADOR DE SOFTWARE</p>
                    </div>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="https://github.com/jafcthedevp" target="_blank" rel="noopener noreferrer"
                           className="px-4 py-2 bg-[#FFB100] text-black rounded hover:bg-[#FF9000] transition-colors">
                            GitHub
                        </a>
                        <a href="#contact"
                           className="px-4 py-2 border border-[#FFB100] text-[#FFB100] rounded hover:bg-[#FFB100]/10 transition-colors">
                            Contacto
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;

