import React from 'react';
import './Cart-dropdown.scss';
import CustomButton from './../custom-button/Custom-button';

const CartDropdown = () => (
	<div className="cart-dropdown">
		<div className="cart-items" />
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

export default CartDropdown;
