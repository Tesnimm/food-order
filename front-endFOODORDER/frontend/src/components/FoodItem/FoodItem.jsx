import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image, rating = 0 }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    // Rating yıldızlarının sayısını ayarlayın
    const renderRatingStars = () => {
        const stars = [];
        for (let i = 0; i < Math.min(rating, 5); i++) {
            stars.push(
                <img 
                    key={`star-${i}`} 
                    src={assets.rating_star_full} 
                    alt={`Star ${i + 1}`} 
                    className='rating-star' // Sınıf adı eklenebilir
                />
            );
        }
        return stars;
    };

    return (
        <div className='food-item'>
            <div className="food-item-image-container">
                <img className='food-item-image' src={image} alt={name} />
                {!cartItems[id] ? (
                    <img 
                        className='add-to-cart' // Sınıf adı daha açıklayıcı olabilir
                        onClick={() => addToCart(id)} 
                        src={assets.add_icon_white} 
                        alt="Add to Cart" 
                    />
                ) : (
                    <div className='food-item-counter'>
                        <img 
                            className='remove-from-cart' // Sınıf adı daha açıklayıcı olabilir
                            onClick={() => removeFromCart(id)} 
                            src={assets.remove_icon_red} 
                            alt="Remove from Cart" 
                        />
                        <p>{cartItems[id]}</p>
                        <img 
                            className='increase-quantity' // Sınıf adı daha açıklayıcı olabilir
                            onClick={() => addToCart(id)} 
                            src={assets.add_icon_green} 
                            alt="Increase Quantity" 
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p className='food-item-name'>{name}</p> {/* Sınıf adı eklendi */}
                    <div className="rating-stars">
                        {renderRatingStars()}
                    </div>
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
