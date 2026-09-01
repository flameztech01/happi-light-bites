import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    // WhatsApp link with pre-filled message
    const whatsappLink = `https://wa.me/2348067007907?text=${encodeURIComponent(
        "Hi Happi Light Bites! I'd like to place an order. 😊"
    )}`;

    return (
        <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-28 lg:pt-32">
            {/* Background Image with overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&q=80"
                    alt="Delicious food background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f0a]/80 via-[#1a0f0a]/70 to-[#1a0f0a]/90"></div>
                <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #c9a959 0px, #c9a959 1px, transparent 1px, transparent 20px)`
                }}></div>
            </div>

            {/* Content – left aligned */}
            <div className="relative z-10 w-full px-4 lg:pl-29 lg:pr-10">
                <div className="max-w-2xl">
                    {/* Small tagline */}
                    <span className="inline-block text-xs tracking-[0.3em] text-[#c9a959] font-light uppercase mb-4 border-l-2 border-[#c9a959] pl-4">
                        Handcrafted Daily
                    </span>

                    {/* Main heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-wider leading-tight">
                        <span className="text-[#f5efe8] block">Happi</span>
                        <span className="text-[#c9a959] block">Light Bites</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-lg md:text-xl text-[#c9a959]/80 font-light tracking-wide max-w-lg leading-relaxed">
                        Fresh, homemade treats made with love. Every bite, a taste of tradition.
                    </p>

                    {/* CTAs */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-[#c9a959] text-[#1a0f0a] font-medium tracking-widest uppercase text-sm transition-all duration-300 hover:bg-[#b89a4a]"
                        >
                            Order Now
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#menu"
                            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#c9a959] text-[#c9a959] font-medium tracking-widest uppercase text-sm transition-all duration-300 hover:bg-[#c9a959] hover:text-[#1a0f0a]"
                        >
                            Explore Menu
                        </a>
                    </div>

                    {/* Trust badges */}
                    <div className="mt-12 flex items-center gap-6 text-xs text-[#c9a959]/60 tracking-widest font-light uppercase">
                        <span className="flex items-center gap-1.5">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400/70 animate-pulse"></span>
                            100% Homemade
                        </span>
                        <span className="w-px h-4 bg-[#2a1f1a]"></span>
                        <span>Est. 2026</span>
                        <span className="w-px h-4 bg-[#2a1f1a]"></span>
                        <span>Fresh Daily</span>
                    </div>
                </div>
            </div>

            {/* Decorative gold line at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a959]/40 to-transparent"></div>
        </section>
    );
};

export default Hero;