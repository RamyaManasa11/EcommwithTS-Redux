import React, { useState } from 'react';
import Products from './Products';

const Home: React.FC = () => {
    const category = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration"];
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategoryChange = (newContent: string) => {
        setSelectedCategory(newContent);
    }

    return (
        <div>
            <Products categories={category} onChange={handleCategoryChange} />
        </div>
    )
}

export default Home;