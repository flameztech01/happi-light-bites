import React from 'react';
import { Heart, Award, Clock, Coffee, UtensilsCrossed } from 'lucide-react';

const About = () => {
    return (
        <section className="bg-[#1a0f0a] py-16 sm:py-24 px-4 lg:px-10 text-[#f5efe8]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-block text-xs tracking-[0.3em] text-[#c9a959] font-light uppercase mb-3 border-b border-[#c9a959]/30 pb-2">
                        About Us
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide text-[#f5efe8]">
                        Our <span className="text-[#c9a959]">Story</span>
                    </h2>
                </div>

                {/* Main content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Image side */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="relative rounded-lg overflow-hidden shadow-xl bg-[#0d0806]">
                            <img
                                src="https://picsum.photos/seed/happi/800/600"
                                alt="Happi Light Bites kitchen"
                                className="w-full h-64 sm:h-80 lg:h-[450px] object-cover opacity-90"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.parentNode.style.background = 'linear-gradient(135deg, #c9a959, #8a7a5a)';
                                    e.target.parentNode.innerHTML = `
                                        <div class="flex items-center justify-center h-full text-white text-2xl font-serif font-light">
                                            Happi Light Bites
                                        </div>
                                    `;
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#1a0f0a]/50 via-transparent to-transparent"></div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#c9a959]/30 rounded-lg -z-10 hidden lg:block"></div>
                        <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#c9a959]/20 rounded-lg -z-10 hidden lg:block"></div>
                    </div>

                    {/* Text side – light text */}
                    <div className="order-1 lg:order-2 space-y-5 sm:space-y-6">
                        <h3 className="text-2xl sm:text-3xl font-serif font-light text-[#f5efe8]">
                            Born from a <span className="text-[#c9a959]">love</span> for good food
                        </h3>
                        <p className="text-[#c9a959]/70 font-light leading-relaxed text-sm sm:text-base">
                            Happi Light Bites was created with one simple belief – that great food 
                            brings people together. What started as a small kitchen experiment has 
                            grown into a celebration of tradition, freshness, and the joy of sharing 
                            good things with the ones you love.
                        </p>
                        <p className="text-[#c9a959]/70 font-light leading-relaxed text-sm sm:text-base">
                            Every recipe is a story – from the crunch of our Chin Chin to the 
                            comforting warmth of our Meat Pie. We use only the freshest ingredients, 
                            sourced with care, because we believe that every bite should feel like home.
                        </p>
                        <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6">
                            <span className="flex items-center gap-2 text-xs tracking-widest text-[#c9a959] uppercase font-light">
                                <Heart size={16} className="text-[#c9a959]" />
                                Made with love
                            </span>
                            <span className="w-px h-6 bg-[#c9a959]/30 hidden sm:block"></span>
                            <span className="flex items-center gap-2 text-xs tracking-widest text-[#c9a959] uppercase font-light">
                                <Award size={16} className="text-[#c9a959]" />
                                100% Homemade
                            </span>
                            <span className="w-px h-6 bg-[#c9a959]/30 hidden sm:block"></span>
                            <span className="flex items-center gap-2 text-xs tracking-widest text-[#c9a959] uppercase font-light">
                                <Clock size={16} className="text-[#c9a959]" />
                                Est. 2024
                            </span>
                        </div>
                    </div>
                </div>

                {/* Values – dark cards */}
                <div className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    <div className="text-center p-4 sm:p-6 bg-[#0d0806] rounded-lg border border-[#2a1f1a] hover:border-[#c9a959] transition-colors">
                        <Coffee size={28} className="text-[#c9a959] mx-auto mb-2" />
                        <h4 className="text-xs sm:text-sm font-serif tracking-wider text-[#f5efe8]">Fresh Daily</h4>
                        <p className="text-[10px] sm:text-xs text-[#c9a959]/50 font-light mt-0.5">Made from scratch</p>
                    </div>
                    <div className="text-center p-4 sm:p-6 bg-[#0d0806] rounded-lg border border-[#2a1f1a] hover:border-[#c9a959] transition-colors">
                        <Heart size={28} className="text-[#c9a959] mx-auto mb-2" />
                        <h4 className="text-xs sm:text-sm font-serif tracking-wider text-[#f5efe8]">Handcrafted</h4>
                        <p className="text-[10px] sm:text-xs text-[#c9a959]/50 font-light mt-0.5">With love & care</p>
                    </div>
                    <div className="text-center p-4 sm:p-6 bg-[#0d0806] rounded-lg border border-[#2a1f1a] hover:border-[#c9a959] transition-colors">
                        <Award size={28} className="text-[#c9a959] mx-auto mb-2" />
                        <h4 className="text-xs sm:text-sm font-serif tracking-wider text-[#f5efe8]">Quality First</h4>
                        <p className="text-[10px] sm:text-xs text-[#c9a959]/50 font-light mt-0.5">Premium ingredients</p>
                    </div>
                    <div className="text-center p-4 sm:p-6 bg-[#0d0806] rounded-lg border border-[#2a1f1a] hover:border-[#c9a959] transition-colors">
                        <UtensilsCrossed size={28} className="text-[#c9a959] mx-auto mb-2" />
                        <h4 className="text-xs sm:text-sm font-serif tracking-wider text-[#f5efe8]">Traditional</h4>
                        <p className="text-[10px] sm:text-xs text-[#c9a959]/50 font-light mt-0.5">Authentic recipes</p>
                    </div>
                </div>

                {/* Decorative line & tagline */}
                <div className="mt-12 sm:mt-16 h-[1px] bg-gradient-to-r from-transparent via-[#c9a959]/30 to-transparent"></div>
                <div className="text-center mt-6 sm:mt-8 text-sm sm:text-base text-[#c9a959]/60 font-light tracking-wide italic">
                    "Every bite tells a story of tradition, freshness, and love."
                </div>
            </div>
        </section>
    );
};

export default About;