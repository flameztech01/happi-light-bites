import React, { useState } from 'react';
import {
    Menu,
    X,
    Home,
    BookOpen,
    Info,
    Image as ImageIcon,
    Phone,
    Calendar,
    Clock,
    Flame,
    Coffee,
    Cookie
} from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // WhatsApp link with pre-filled message
    const whatsappLink = `https://wa.me/2348067007907?text=${encodeURIComponent(
        "Hi Happi Light Bites! I'd like to place an order. 😊"
    )}`;

    // Close mobile menu when a link is clicked
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
                .pulse-dot {
                    animation: pulse 1.5s ease-in-out infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.3; }
                }
            `}</style>

            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a0f0a] text-[#f5efe8] border-b border-[#2a1f1a]">
                {/* ===== BUSY STRIP – product marquee ===== */}
                <div className="bg-[#0d0806] border-b border-[#2a1f1a] py-1.5 overflow-hidden">
                    <div className="relative flex items-center">
                        <div className="hidden sm:flex items-center gap-2 px-4 text-xs text-[#c9a959] tracking-widest font-light whitespace-nowrap">
                            <span className="flex items-center gap-1">
                                <Flame size={12} className="text-[#c9a959]" />
                                <span>FRESH</span>
                            </span>
                            <span className="w-px h-4 bg-[#2a1f1a]"></span>
                            <span className="flex items-center gap-1">
                                <Clock size={12} className="text-[#c9a959]" />
                                <span>DAILY</span>
                            </span>
                        </div>

                        <div className="flex-1 overflow-hidden">
                            <div className="animate-marquee whitespace-nowrap text-xs tracking-[0.2em] text-[#c9a959]/70 font-light">
                                <span className="mx-3">✦</span><span>PEANUT</span>
                                <span className="mx-3">✦</span><span>CHIN CHIN</span>
                                <span className="mx-3">✦</span><span>ZOBO</span>
                                <span className="mx-3">✦</span><span>FISH ROLL</span>
                                <span className="mx-3">✦</span><span>MEAT PIE</span>
                                <span className="mx-3">✦</span><span>EGG ROLL</span>
                                <span className="mx-3">✦</span><span>PARFAIT</span>
                                <span className="mx-3">✦</span><span>CAKE PARFAIT</span>
                                <span className="mx-3">✦</span><span>CONDENSED MILK TOFFEE</span>
                                <span className="mx-3">✦</span><span>TIGERNUT MILK</span>
                                <span className="mx-3">✦</span><span>CHOPS</span>
                                <span className="mx-3">✦</span><span>PEANUT BURGER</span>
                                <span className="mx-3">✦</span>
                                {/* Duplicate for seamless loop */}
                                <span>PEANUT</span>
                                <span className="mx-3">✦</span><span>CHIN CHIN</span>
                                <span className="mx-3">✦</span><span>ZOBO</span>
                                <span className="mx-3">✦</span><span>FISH ROLL</span>
                                <span className="mx-3">✦</span><span>MEAT PIE</span>
                                <span className="mx-3">✦</span><span>EGG ROLL</span>
                                <span className="mx-3">✦</span><span>PARFAIT</span>
                                <span className="mx-3">✦</span><span>CAKE PARFAIT</span>
                                <span className="mx-3">✦</span><span>CONDENSED MILK TOFFEE</span>
                                <span className="mx-3">✦</span><span>TIGERNUT MILK</span>
                                <span className="mx-3">✦</span><span>CHOPS</span>
                                <span className="mx-3">✦</span><span>PEANUT BURGER</span>
                                <span className="mx-3">✦</span>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center gap-4 px-4 text-xs text-[#c9a959]/60 tracking-widest font-light whitespace-nowrap">
                            <span className="flex items-center gap-1">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot"></span>
                                <span>100% HOMEMADE</span>
                            </span>
                            <span className="w-px h-4 bg-[#2a1f1a]"></span>
                            <span className="flex items-center gap-1">
                                <Coffee size={12} className="text-[#c9a959]" />
                                <span>EST. 2026</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* ===== MAIN NAV ===== */}
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img
                                src="/happi-logo.png"
                                alt="Happi Light Bites"
                                className="h-12 w-auto brightness-0 invert"
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                        </div>

                        {/* Desktop Nav */}
                        <ul className="hidden lg:flex items-center gap-8 text-sm font-light tracking-wider uppercase">
                            <li>
                                <a href="#home" className="hover:text-[#c9a959] transition-colors duration-300 relative group">
                                    Home
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c9a959] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#menu" className="hover:text-[#c9a959] transition-colors duration-300 relative group">
                                    Menu
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c9a959] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-[#c9a959] transition-colors duration-300 relative group">
                                    About
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c9a959] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#gallery" className="hover:text-[#c9a959] transition-colors duration-300 relative group">
                                    Gallery
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c9a959] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-[#c9a959] transition-colors duration-300 relative group">
                                    Contact
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c9a959] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        </ul>

                        <div className="hidden lg:flex items-center gap-6">
                            <span className="flex items-center gap-1.5 text-xs text-[#c9a959] tracking-widest font-light">
                                <Cookie size={12} className="text-[#c9a959]" />
                                <span>HOMEMADE</span>
                            </span>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2.5 border border-[#c9a959] text-[#c9a959] text-sm tracking-wider uppercase hover:bg-[#c9a959] hover:text-[#1a0f0a] transition-all duration-300"
                            >
                                Order Now
                            </a>
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden text-[#f5efe8] hover:text-[#c9a959] transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* ===== MOBILE MENU ===== */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="bg-[#1a0f0a] px-6 py-6 border-t border-[#2a1f1a] space-y-1">
                        <a
                            href="#home"
                            onClick={closeMenu}
                            className="block py-3 text-sm tracking-widest uppercase hover:text-[#c9a959] transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#menu"
                            onClick={closeMenu}
                            className="block py-3 text-sm tracking-widest uppercase hover:text-[#c9a959] transition-colors"
                        >
                            Menu
                        </a>
                        <a
                            href="#about"
                            onClick={closeMenu}
                            className="block py-3 text-sm tracking-widest uppercase hover:text-[#c9a959] transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#gallery"
                            onClick={closeMenu}
                            className="block py-3 text-sm tracking-widest uppercase hover:text-[#c9a959] transition-colors"
                        >
                            Gallery
                        </a>
                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="block py-3 text-sm tracking-widest uppercase hover:text-[#c9a959] transition-colors"
                        >
                            Contact
                        </a>
                        <div className="pt-4 flex flex-col gap-3">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                                className="block text-center py-3 border border-[#c9a959] text-[#c9a959] text-sm tracking-widest uppercase hover:bg-[#c9a959] hover:text-[#1a0f0a] transition-all"
                            >
                                Order Now
                            </a>
                            <div className="flex items-center justify-center gap-1.5 text-xs text-[#c9a959] tracking-widest font-light">
                                <Coffee size={12} className="text-[#c9a959]" />
                                <span>EST. 2026</span>
                                <span className="w-px h-3 bg-[#2a1f1a]"></span>
                                <Cookie size={12} className="text-[#c9a959]" />
                                <span>HOMEMADE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;