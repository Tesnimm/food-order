import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  // Formu göndermek için bir işlev ekleyin (örnek olarak):
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form verilerini işleme kodunu buraya ekleyin
  };

  return (
    <form className='place-order' onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <div className="field-group">
            <label htmlFor="first-name">First Name</label>
            <input id="first-name" type="text" placeholder='First Name' />
          </div>
          <div className="field-group">
            <label htmlFor="last-name">Last Name</label>
            <input id="last-name" type="text" placeholder='Last Name' />
          </div>
        </div>
        <div className="field-group">
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" placeholder='Email address' />
        </div>
        <div className="field-group">
          <label htmlFor="street">Street</label>
          <input id="street" type="text" placeholder='Street' />
        </div>
        <div className="multi-fields">
          <div className="field-group">
            <label htmlFor="city">City</label>
            <input id="city" type="text" placeholder='City' />
          </div>
          <div className="field-group">
            <label htmlFor="state">State</label>
            <input id="state" type="text" placeholder='State' />
          </div>
        </div>
        <div className="multi-fields">
          <div className="field-group">
            <label htmlFor="zip-code">Zip code</label>
            <input id="zip-code" type="text" placeholder='Zip code' />
          </div>
          <div className="field-group">
            <label htmlFor="country">Country</label>
            <input id="country" type="text" placeholder='Country' />
          </div>
        </div>
        <div className="field-group">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="text" placeholder='Phone' />
        </div>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
