import { useState } from 'react';
let state = {
  cartItems: []
}
export const useGlobal = () => {
  const [cartItems, setCartItems] = useState([])
  const addToCart = (product) => {
    let isNew = true;
    let updatedCartItems = state.cartItems.map(item => {
      if (item.upc === product.upc) {
        isNew = false;
        const existingItem = { ...item }
        existingItem.qty += 1;
        existingItem.subTotal += existingItem.unitPrice;
        return existingItem
      }
      return item;
    });
    if (isNew) {
      const cartItem = {
        upc: product.upc,
        productName: product.name,
        unitPrice: product.price,
        qty: 1,
        subTotal: product.price
      }
      updatedCartItems = updatedCartItems.concat(cartItem)
    }
    state = { ...state, cartItems: updatedCartItems }
    setCartItems(updatedCartItems);
  }
  IncrementItem = (item) => {
    const updatedCartItems = state.cartItems.map((product) => {
      if (product.upc === item.upc) {
        product.qty += 1
        product.subTotal += product.unitPrice
        return product;
      }
      return product
    });
    state.cartItems = updatedCartItems
    setCartItems(updatedCartItems)
  };
  DecreaseItem = (item) => {
    const updatedCartItems = state.cartItems.map((product) => {
      if (product.upc === item.upc && product.qty > 1) {
        product.qty -= 1
        product.subTotal -= product.unitPrice
        return product;
      }
      return product
    });
    state.cartItems = updatedCartItems
    setCartItems(updatedCartItems)
  };
  RemoveItem = (item) => {
    const updatedCartItems = state.cartItems.filter((product) => {
      if (product.upc != item.upc) {
        return product;
      }
    });
    state.cartItems = updatedCartItems
    setCartItems(updatedCartItems)
  };
  return {
    addToCart,
    cartItems: state.cartItems,
    DecreaseItem,
    IncrementItem,
    RemoveItem
  }
}