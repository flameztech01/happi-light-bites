import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react';

const Contact = () => {
    const phone = '+2348067007907';
    const email = 'happilightbites@gmail.com';
    const location = 'Ogologo, Rumuigbo, Port Harcourt, Rivers State, Nigeria';

    return (
        <section className="bg-[#1a0f0a] py-16 sm:py-24 px-4 lg:px-10 text-[#f5efe8]">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <span className="inline-block text-xs tracking-[0.3em] text-[#c9a959] font-light uppercase mb-3 border-b border-[#c9a959]/30 pb-2">
                        Get in Touch
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-wide text-[#f5efe8]">
                        Let's <span className="text-[#c9a959]">Connect</span>
                    </h2>
                    <p className="mt-3 text-[#c9a959]/60 font-light max-w-lg mx-auto text-sm sm:text-base">
                        We'd love to hear from you – drop us a message or give us a call.
                    </p>
                </div>

                {/* Contact cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {/* Phone */}
                    <div className="bg-[#0d0806] border border-[#2a1f1a] rounded-lg p-6 text-center hover:border-[#c9a959] transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-full bg-[#c9a959]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c9a959]/20 transition-colors">
                            <Phone size={24} className="text-[#c9a959]" />
                        </div>
                        <h3 className="text-xs tracking-[0.2em] text-[#c9a959]/80 uppercase font-light mb-2">Call or WhatsApp</h3>
                        <a
                            href={`tel:${phone}`}
                            className="text-lg sm:text-xl font-serif font-light text-[#f5efe8] hover:text-[#c9a959] transition-colors block"
                        >
                            {phone.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3')}
                        </a>
                        <div className="mt-3 flex items-center justify-center gap-3">
                            <a
                                href={`tel:${phone}`}
                                className="text-xs text-[#c9a959]/60 hover:text-[#c9a959] transition-colors flex items-center gap-1"
                            >
                                <Phone size={12} /> Call
                            </a>
                            <span className="w-px h-4 bg-[#2a1f1a]"></span>
                            <a
                                href={`https://wa.me/${phone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-[#c9a959]/60 hover:text-[#c9a959] transition-colors flex items-center gap-1"
                            >
                                <MessageCircle size={12} /> WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="bg-[#0d0806] border border-[#2a1f1a] rounded-lg p-6 text-center hover:border-[#c9a959] transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-full bg-[#c9a959]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c9a959]/20 transition-colors">
                            <Mail size={24} className="text-[#c9a959]" />
                        </div>
                        <h3 className="text-xs tracking-[0.2em] text-[#c9a959]/80 uppercase font-light mb-2">Email Us</h3>
                        <a
                            href={`mailto:${email}`}
                            className="text-lg sm:text-xl font-serif font-light text-[#f5efe8] hover:text-[#c9a959] transition-colors block break-all"
                        >
                            {email}
                        </a>
                        <div className="mt-3">
                            <a
                                href={`mailto:${email}`}
                                className="text-xs text-[#c9a959]/60 hover:text-[#c9a959] transition-colors flex items-center justify-center gap-1"
                            >
                                <ExternalLink size={12} /> Send Email
                            </a>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="bg-[#0d0806] border border-[#2a1f1a] rounded-lg p-6 text-center hover:border-[#c9a959] transition-all duration-300 group">
                        <div className="w-12 h-12 rounded-full bg-[#c9a959]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c9a959]/20 transition-colors">
                            <MapPin size={24} className="text-[#c9a959]" />
                        </div>
                        <h3 className="text-xs tracking-[0.2em] text-[#c9a959]/80 uppercase font-light mb-2">Visit Us</h3>
                        <p className="text-sm sm:text-base font-light text-[#f5efe8] leading-relaxed">
                            {location}
                        </p>
                        <div className="mt-3">
                            <a
                                href={`https://maps.google.com/maps?q=${encodeURIComponent(location)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-[#c9a959]/60 hover:text-[#c9a959] transition-colors flex items-center justify-center gap-1"
                            >
                                <ExternalLink size={12} /> Open in Maps
                            </a>
                        </div>
                    </div>
                </div>

                {/* Decorative line & tagline */}
                <div className="mt-12 sm:mt-16 h-[1px] bg-gradient-to-r from-transparent via-[#c9a959]/30 to-transparent"></div>
                <div className="text-center mt-6 sm:mt-8 text-xs text-[#c9a959]/40 tracking-widest font-light uppercase flex items-center justify-center gap-4 flex-wrap">
                    <span>Open Daily</span>
                    <span className="text-[#c9a959]/20">✦</span>
                    <span>Freshly Made</span>
                    <span className="text-[#c9a959]/20">✦</span>
                    <span>Always Welcoming</span>
                </div>
            </div>
        </section>
    );
};

export default Contact;