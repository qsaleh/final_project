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
  IncrementItem = (id) => {
    // setCartItems(() => {
    const updatedCartItems = state.cartItems.map((product) => {
      // if (product.) {
      // {...product, }
      product.qty += 1
      product.subTotal += product.unitPrice
      // } 
      return product;
      //   {
      //   productName: product.productName,
      //   qty: product.qty + 1,
      //   subTotal: product.subTotal + product.unitPrice,
      //   unitPrice: product.unitPrice,
      //   upc: product.upc
      // }
    }
    );

    state.cartItems = updatedCartItems
    setCartItems(updatedCartItems)

    // });
  };
  DecreaseItem = (items) => {
    //if quantity is zero, remove the item
    // setCartItems(() => {
    const updatedCartItems = items.map((product) => {
      product.qty -= 1
      product.subTotal -= product.unitPrice
      // } 
      return product;
      //   productName: product.productName,
      //   qty: product.qty - 1,
      //   subTotal: product.subTotal - product.unitPrice,
      //   unitPrice: product.unitPrice,
      //   upc: product.upc
    }
    );
    // return {
    //   ...state,
    //   cartItems: removeItem
    // };
    // });
    state.cartItems = updatedCartItems
    setCartItems(updatedCartItems)
  };
  console.log("cartItems in global.js", cartItems);
  console.log("addtoCart", addToCart);
  return {
    addToCart,
    cartItems: state.cartItems,
    DecreaseItem,
    IncrementItem
  }
}