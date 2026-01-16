export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number; // in MWK (Malawian Kwacha)
    category: 'starters' | 'mains' | 'drinks' | 'desserts';
    image: string;
}

export const menuItems: MenuItem[] = [
    // STARTERS
    {
        id: 1,
        name: 'Chambo Fish Cakes',
        description: 'Crispy fried Lake Malawi chambo fish cakes served with tangy tamarind sauce and fresh herbs',
        price: 3500,
        category: 'starters',
        image: 'meal6.jpg'
    },
    {
        id: 4,
        name: 'Chicken Satay Skewers',
        description: 'Grilled chicken skewers marinated in aromatic peanut sauce with a hint of lime',
        price: 4000,
        category: 'starters',
        image: 'meal3.jpg'
    },

    // MAINS
    {
        id: 5,
        name: 'Nsima with Chicken',
        description: 'Traditional maize porridge served with savory chicken stew and seasonal greens',
        price: 8500,
        category: 'mains',
        image: 'meal1.jpg'
    },
    {
        id: 6,
        name: 'Grilled Lake Chambo',
        description: 'Fresh chambo fish from Lake Malawi, grilled to perfection with herbs and lemon butter',
        price: 12000,
        category: 'mains',
        image: 'meal2.jpg'
    },


    // DRINKS
    {
        id: 11,
        name: 'Fresh Mango Juice',
        description: 'Locally sourced ripe mangoes, freshly squeezed and served chilled',
        price: 2000,
        category: 'drinks',
        image: 'https://placehold.co/600x400/1B4332/white?text=FMJ'
    },

    // DESSERTS
    {
        id: 17,
        name: 'Banana Fritters',
        description: 'Sweet fried bananas with honey drizzle and a sprinkle of cinnamon',
        price: 3000,
        category: 'desserts',
        image: 'meal-5.jpg'
    },
];

export const getMenuByCategory = (category: MenuItem['category']): MenuItem[] => {
    return menuItems.filter(item => item.category === category);
};

export const getFeaturedDishes = (): MenuItem[] => {
    // Return 3 featured dishes (one from each main category)
    const featured = [menuItems[4], menuItems[5], menuItems[16]];
    return featured.filter((item): item is MenuItem => item !== undefined);
};
