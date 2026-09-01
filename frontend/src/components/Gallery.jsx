import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
    // Gallery images – replace with your own
    const images = [
        {
            id: 1,
            src: 'https://picsum.photos/seed/happi1/600/400',
            alt: 'Chin Chin',
            category: 'Snacks'
        },
        {
            id: 2,
            src: 'https://picsum.photos/seed/happi2/600/500',
            alt: 'Zobo Drink',
            category: 'Drinks'
        },
        {
            id: 3,
            src: 'https://picsum.photos/seed/happi3/600/400',
            alt: 'Meat Pie',
            category: 'Pastries'
        },
        {
            id: 4,
            src: 'https://picsum.photos/seed/happi4/600/600',
            alt: 'Parfait',
            category: 'Desserts'
        },
        {
            id: 5,
            src: 'https://picsum.photos/seed/happi5/600/400',
            alt: 'Peanut Burger',
            category: 'Snacks'
        },
        {
            id: 6,
            src: 'https://picsum.photos/seed/happi6/600/500',
            alt: 'Condensed Milk Toffee',
            category: 'Sweets'
        },
        {
            id: 7,
            src: 'https://picsum.photos/seed/happi7/600/400',
            alt: 'Fish Roll',
            category: 'Pastries'
        },
        {
            id: 8,
            src: 'https://picsum.photos/seed/happi8/600/600',
            alt: 'Tigernut Milk',
            category: 'Drinks'
        },
    ];

    // Lightbox state
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openLightbox = (image) => {
        setCurrentImage(image);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setCurrentImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <section className="bg-[#1a0f0a] py-16 sm:py-24 px-4 lg:px-10 text-[#f5efe8]">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <span className="inline-block text-xs tracking-[0.3em] text-[#c9a959] font-light uppercase mb-3 border-b border-[#c9a959]/30 pb-2">
                            Our Gallery
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide text-[#f5efe8]">
                            A <span className="text-[#c9a959]">Visual</span> Feast
                        </h2>
                        <p className="mt-3 sm:mt-4 text-[#c9a959]/60 font-light max-w-2xl mx-auto text-sm sm:text-base">
                            Explore our handcrafted bites through the lens – every image tells a story of freshness and passion.
                        </p>
                    </div>

                    {/* Gallery Grid – masonry-like with varying heights */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                        {images.map((image) => (
                            <div
                                key={image.id}
                                className={`relative group cursor-pointer overflow-hidden rounded-lg bg-[#0d0806] border border-[#2a1f1a] hover:border-[#c9a959] transition-all duration-300 ${
                                    // Different spans for visual variety
                                    image.id % 3 === 0 ? 'row-span-2' : 'row-span-1'
                                }`}
                                onClick={() => openLightbox(image)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.style.display = 'none';
                                        e.target.parentNode.style.background = 'linear-gradient(135deg, #c9a959, #8a7a5a)';
                                    }}
                                />
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                                    <div className="flex justify-between items-center w-full">
                                        <span className="text-xs text-[#f5efe8] font-light tracking-wider uppercase">
                                            {image.alt}
                                        </span>
                                        <ZoomIn size={18} className="text-[#c9a959]" />
                                    </div>
                                </div>
                                {/* Category badge – subtle */}
                                <span className="absolute top-2 left-2 text-[8px] tracking-[0.2em] text-[#c9a959]/50 bg-[#1a0f0a]/60 px-2 py-0.5 rounded-full">
                                    {image.category}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Decorative line & tagline */}
                    <div className="mt-12 sm:mt-16 h-[1px] bg-gradient-to-r from-transparent via-[#c9a959]/30 to-transparent"></div>
                    <div className="text-center mt-6 sm:mt-8 text-xs text-[#c9a959]/40 tracking-widest font-light uppercase flex items-center justify-center gap-4 flex-wrap">
                        <span>Homemade</span>
                        <span className="text-[#c9a959]/20">✦</span>
                        <span>Fresh Daily</span>
                        <span className="text-[#c9a959]/20">✦</span>
                        <span>Made with Love</span>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxOpen && currentImage && (
                <div
                    className="fixed inset-0 z-[100] bg-[#1a0f0a]/95 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-[#f5efe8] hover:text-[#c9a959] transition-colors"
                        aria-label="Close lightbox"
                    >
                        <X size={32} />
                    </button>
                    <div
                        className="max-w-4xl max-h-[80vh] rounded-lg overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={currentImage.src}
                            alt={currentImage.alt}
                            className="w-full h-full object-contain"
                        />
                        <div className="bg-[#0d0806] px-6 py-3 flex justify-between items-center border-t border-[#2a1f1a]">
                            <span className="text-sm text-[#f5efe8] font-light tracking-wider">
                                {currentImage.alt}
                            </span>
                            <span className="text-xs text-[#c9a959]/60 tracking-widest uppercase">
                                {currentImage.category}
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Inline animation style */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}</style>
        </>
    );
};

export default Gallery;