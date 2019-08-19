import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from './../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import './Cart-dropdown.scss';
import CustomButton from './../custom-button/Custom-button';
import CartItem from './../cart-item/Cart-item';

const CartDropdown = ({ cartItems }) => {
	console.log(cartItems);
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default connect(mapStateToProps, null)(CartDropdown);
