export const addItemToCart = (cartItems, cartItemToAdd) => {
  console.log(cartItems);
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

// Clears all items of the same kind
export const clearFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter(cartItem => {
    return cartItem.id !== cartItemToRemove.id;
  });
};

// removes only one item of a kind
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  if (cartItemToRemove.quantity === 1) {
    return clearFromCart(cartItems, cartItemToRemove);
  }

  return cartItems.map(cartItem => {
    if (cartItem.id === cartItemToRemove.id) {
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    }
    return cartItem;
  });
};
