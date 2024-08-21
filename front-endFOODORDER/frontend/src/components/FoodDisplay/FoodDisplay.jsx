import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category = "All" }) => {
    const { food_list = [] } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes Near You</h2>
            <div className="food-display-list">
                {food_list.length === 0 ? (
                    <p>No food items available.</p>
                ) : (
                    food_list.map((item) => (
                        (category === "All" || category === item.category) && (
                            <FoodItem 
                                key={item._id} // Benzersiz id kullanarak key prop'unu iyileştirin
                                id={item._id} 
                                name={item.name} 
                                description={item.description}  
                                price={item.price} 
                                image={item.image} 
                                rating={item.rating ?? 0} // Rating yoksa varsayılan değer kullanın
                            />
                        )
                    ))
                )}
            </div>
        </div>
    );
};

export default FoodDisplay;
