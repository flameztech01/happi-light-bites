import React from 'react';
import { Coffee, Cookie, Cake, ShoppingBag } from 'lucide-react';

const Menu = () => {
    const menuItems = [
        {
            id: 1,
            name: 'Peanut',
            description: 'Crunchy roasted peanuts with a hint of sea salt.',
            image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&q=80',
            category: 'Snacks'
        },
        {
            id: 2,
            name: 'Chin Chin',
            description: 'Crispy fried dough bites, lightly sweetened.',
            image: 'https://images.unsplash.com/photo-1624353070502-9c8bd4f58f20?w=600&q=80',
            category: 'Snacks'
        },
        {
            id: 3,
            name: 'Zobo',
            description: 'Refreshing hibiscus drink with ginger and pineapple.',
            image: 'https://images.unsplash.com/photo-1596029224908-0abb23f1e4a4?w=600&q=80',
            category: 'Drinks'
        },
        {
            id: 4,
            name: 'Fish Roll',
            description: 'Flaky pastry filled with spiced mackerel and vegetables.',
            image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&q=80',
            category: 'Pastries'
        },
        {
            id: 5,
            name: 'Meat Pie',
            description: 'Savory pie with minced beef, carrots, and herbs.',
            image: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=600&q=80',
            category: 'Pastries'
        },
        {
            id: 6,
            name: 'Egg Roll',
            description: 'Golden fried spring roll with seasoned egg and vegetables.',
            image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
            category: 'Snacks'
        },
        {
            id: 7,
            name: 'Parfait',
            description: 'Layered yogurt with granola and fresh berries.',
            image: 'https://images.unsplash.com/photo-1488477181946-6428a0291779?w=600&q=80',
            category: 'Desserts'
        },
        {
            id: 8,
            name: 'Cake Parfait',
            description: 'Decadent layered cake with cream and fruit compote.',
            image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
            category: 'Desserts'
        },
        {
            id: 9,
            name: 'Condensed Milk Toffee',
            description: 'Chewy toffee made with sweetened condensed milk.',
            image: 'https://images.unsplash.com/photo-1581798459210-107e01f2bda1?w=600&q=80',
            category: 'Sweets'
        },
        {
            id: 10,
            name: 'Tigernut Milk',
            description: 'Creamy plant-based milk with a nutty flavour.',
            image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
            category: 'Drinks'
        },
        {
            id: 11,
            name: 'Chops',
            description: 'Assorted fried delicacies – plantain, yam, and more.',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
            category: 'Snacks'
        },
        {
            id: 12,
            name: 'Peanut Burger',
            description: 'Peanut-based protein bites, seasoned and roasted.',
            image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&q=80',
            category: 'Snacks'
        },
    ];

    const categories = [...new Set(menuItems.map(item => item.category))];

    const getWhatsAppLink = (itemName) => {
        const message = `Hi Happi Light Bites! I'd like to order the ${itemName}. 😋`;
        return `https://wa.me/2348067007907?text=${encodeURIComponent(message)}`;
    };

    return (
        <section className="bg-[#f5efe8] py-12 sm:py-20 px-4 lg:px-10 text-[#1a0f0a]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-16">
                    <span className="inline-block text-xs tracking-[0.3em] text-[#c9a959] font-light uppercase mb-3 border-b border-[#c9a959]/30 pb-2">
                        Our Menu
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-wide text-[#1a0f0a]">
                        <span>Discover</span>
                        <span className="text-[#c9a959] block sm:inline-block sm:ml-4">Our Bites</span>
                    </h2>
                    <p className="mt-3 sm:mt-4 text-[#1a0f0a]/60 font-light max-w-2xl mx-auto text-sm sm:text-base">
                        Handcrafted with love, using the freshest ingredients. Every bite is a journey of flavour.
                    </p>
                </div>

                {/* Menu by category */}
                {categories.map((category) => (
                    <div key={category} className="mb-12 sm:mb-16 last:mb-0">
                        <h3 className="text-xl sm:text-2xl font-serif font-light tracking-wider text-[#1a0f0a] mb-4 sm:mb-8 border-l-2 border-[#c9a959] pl-4">
                            {category}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                            {menuItems
                                .filter(item => item.category === category)
                                .map((item) => (
                                    <div
                                        key={item.id}
                                        className="group flex flex-row sm:flex-col bg-white border border-[#e8e0d8] rounded-lg overflow-hidden hover:border-[#c9a959] transition-all duration-300 hover:shadow-xl hover:shadow-[#c9a959]/10"
                                    >
                                        <div className="w-24 h-24 sm:w-full sm:h-48 flex-shrink-0 overflow-hidden bg-[#e8e0d8]">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="flex-1 p-3 sm:p-5 flex flex-col justify-center sm:justify-start">
                                            <h4 className="text-sm sm:text-lg font-serif font-light tracking-wider text-[#1a0f0a] group-hover:text-[#c9a959] transition-colors">
                                                {item.name}
                                            </h4>
                                            <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-[#1a0f0a]/60 font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
                                                {item.description}
                                            </p>
                                            <a
                                                href={getWhatsAppLink(item.name)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-2 sm:mt-3 inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#c9a959] border border-[#c9a959] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-[#c9a959] hover:text-[#1a0f0a] transition-all duration-300 self-start"
                                            >
                                                <ShoppingBag size={14} className="sm:w-4 sm:h-4" />
                                                Order Now
                                            </a>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}

                {/* Decorative line & tagline */}
                <div className="mt-12 sm:mt-16 h-[1px] bg-gradient-to-r from-transparent via-[#c9a959]/30 to-transparent"></div>
                <div className="text-center mt-6 sm:mt-10 text-xs text-[#1a0f0a]/40 tracking-widest font-light uppercase flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                    <Coffee size={14} className="text-[#c9a959]" />
                    <span>Made Fresh Daily</span>
                    <Cookie size={14} className="text-[#c9a959]" />
                    <span>Homemade with Love</span>
                    <Cake size={14} className="text-[#c9a959]" />
                </div>
            </div>
        </section>
    );
};

export default Menu;