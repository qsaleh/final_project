import { useState } from 'react';
 let state = {
   cartItems: []
 }
export const useGlobal = () => {
  const [cartItems, setCartItems] = useState([])
  const addToCart = (product) => {
    // check if product is already in cart
    let isNew = true;
    let updatedCartItems = cartItems.map(item => {
      if (item.upc === product.upc) {
        isNew = false;
        const existingItem = { ...item }
        existingItem.quantity += 1;
        existingItem.subTotal += existingItem.unitPrice;
        return existingItem
      }
      return item;
    });
    if (isNew) {
      // transform product to cartItem: { productName, unitPrice, qty, subTotal }
      // update cart with the new cartItem
      const cartItem = {
        upc: product.upc,
        productName: product.name,
        unitPrice: product.price,
        qty: 1,
        subTotal: product.price
      }
      // updatedCartItems = [ ...updatedCartItems, cartItems]
      updatedCartItems = updatedCartItems.concat(cartItem)
    }
    state = { ...state, cartItems: updatedCartItems }
    setCartItems(updatedCartItems);
  }
console.log("cartItems in global.js", cartItems);
console.log("addtoCart", addToCart);
  return {
    addToCart,
    cartItems: state.cartItems
  }
}