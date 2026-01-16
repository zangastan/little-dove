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
        image: 'https://placehold.co/600x400/1B4332/white?text=CFC'
    },
    {
        id: 2,
        name: 'Vegetable Samosas',
        description: 'Golden triangles filled with spiced potatoes, peas, and carrots, served with mint chutney',
        price: 2500,
        category: 'starters',
        image: 'https://placehold.co/600x400/1B4332/white?text=VS'
    },
    {
        id: 3,
        name: 'Traditional Garden Salad',
        description: 'Fresh mixed greens, tomatoes, cucumber, and avocado with zesty lemon dressing',
        price: 3000,
        category: 'starters',
        image: 'https://placehold.co/600x400/1B4332/white?text=GS'
    },
    {
        id: 4,
        name: 'Chicken Satay Skewers',
        description: 'Grilled chicken skewers marinated in aromatic peanut sauce with a hint of lime',
        price: 4000,
        category: 'starters',
        image: 'https://placehold.co/600x400/1B4332/white?text=CSS'
    },

    // MAINS
    {
        id: 5,
        name: 'Nsima with Chicken',
        description: 'Traditional maize porridge served with savory chicken stew and seasonal greens',
        price: 8500,
        category: 'mains',
        image: 'https://placehold.co/600x400/1B4332/white?text=NWC'
    },
    {
        id: 6,
        name: 'Grilled Lake Chambo',
        description: 'Fresh chambo fish from Lake Malawi, grilled to perfection with herbs and lemon butter',
        price: 12000,
        category: 'mains',
        image: 'https://placehold.co/600x400/1B4332/white?text=GLC'
    },
    {
        id: 7,
        name: 'Vegetable Curry',
        description: 'Hearty mix of seasonal vegetables in rich coconut curry sauce, served with rice',
        price: 7500,
        category: 'mains',
        image: 'https://placehold.co/600x400/1B4332/white?text=VC'
    },
    {
        id: 8,
        name: 'Beef Stew with Rice',
        description: 'Tender beef slow-cooked with tomatoes, onions, and aromatic spices',
        price: 10000,
        category: 'mains',
        image: 'https://placehold.co/600x400/1B4332/white?text=BSR'
    },
    {
        id: 9,
        name: 'Chicken Biryani',
        description: 'Fragrant basmati rice layered with spiced chicken and aromatic herbs',
        price: 9500,
        category: 'mains',
        image: 'https://placehold.co/600x400/1B4332/white?text=CB'
    },
    {
        id: 10,
        name: 'Vegetarian Nsima Platter',
        description: 'Nsima served with pumpkin leaves, beans, and fresh tomato relish',
        price: 7000,
        category: 'mains',
        image: 'https://placehold.co/600x400/1B4332/white?text=VNP'
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
    {
        id: 12,
        name: 'Malawi Shandy',
        description: 'Refreshing blend of ginger beer and fresh lemon juice',
        price: 1800,
        category: 'drinks',
        image: 'https://placehold.co/600x400/1B4332/white?text=MS'
    },
    {
        id: 13,
        name: 'Traditional Maheu',
        description: 'Fermented maize drink, naturally sweet and nutritious',
        price: 1500,
        category: 'drinks',
        image: 'https://placehold.co/600x400/1B4332/white?text=TM'
    },
    {
        id: 14,
        name: 'Baobab Juice',
        description: 'Tangy superfruit juice packed with vitamins and antioxidants',
        price: 2200,
        category: 'drinks',
        image: 'https://placehold.co/600x400/1B4332/white?text=BJ'
    },
    {
        id: 15,
        name: 'Hibiscus Tea',
        description: 'Refreshing red tea with floral notes, served hot or iced',
        price: 1500,
        category: 'drinks',
        image: 'https://placehold.co/600x400/1B4332/white?text=HT'
    },
    {
        id: 16,
        name: 'Freshly Squeezed Orange Juice',
        description: 'Pure orange juice from local orchards, no added sugar',
        price: 2000,
        category: 'drinks',
        image: 'https://placehold.co/600x400/1B4332/white?text=SOJ'
    },

    // DESSERTS
    {
        id: 17,
        name: 'Banana Fritters',
        description: 'Sweet fried bananas with honey drizzle and a sprinkle of cinnamon',
        price: 3000,
        category: 'desserts',
        image: 'https://placehold.co/600x400/1B4332/white?text=BF'
    },
    {
        id: 18,
        name: 'Coconut Cake',
        description: 'Moist coconut cake with creamy coconut frosting and toasted coconut flakes',
        price: 3500,
        category: 'desserts',
        image: 'https://placehold.co/600x400/1B4332/white?text=CC'
    },
    {
        id: 19,
        name: 'Fresh Fruit Platter',
        description: 'Seasonal tropical fruits: papaya, pineapple, watermelon, and mango',
        price: 4000,
        category: 'desserts',
        image: 'https://placehold.co/600x400/1B4332/white?text=FFP'
    },
    {
        id: 20,
        name: 'Sweet Potato Pudding',
        description: 'Traditional dessert made with sweet potatoes, cinnamon, and vanilla',
        price: 3200,
        category: 'desserts',
        image: 'https://placehold.co/600x400/1B4332/white?text=SPP'
    }
];

export const getMenuByCategory = (category: MenuItem['category']): MenuItem[] => {
    return menuItems.filter(item => item.category === category);
};

export const getFeaturedDishes = (): MenuItem[] => {
    // Return 3 featured dishes (one from each main category)
    const featured = [menuItems[4], menuItems[5], menuItems[16]];
    return featured.filter((item): item is MenuItem => item !== undefined);
};
