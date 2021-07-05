// const cartReducer = (state :{product : []}, action)  => {
//     switch(action.)
// }

// const action = {
//     type: 'addproduct',
//     payload: ...product
// }
// type: 'addedSuccessfully'
// payload: {loader: true}

// type: 'resetCard'
// payload: {product: []}

// type: 'removeProduct'
// payload : {}

export const cartReducer = (state = { cartItem: [] }) => {
  switch (action.type) {
    case 'CartAdd':
      const product = action.payload;

      const ifproductesist = cartItem.find((x) => x.id === product.id);
      if (ifproductesist) {
        return {
          ...state,
          cartItem: cartItem.map((data) => data.id ==  product.id ? item : data) )
        }
      } else {
        return { ...state, cartItem: [...products] };
      }

    case 'RemoveProduct':
        return {
            ...state,
            cartItem: cartItem.map((x) => x.id !== product.id)
        }

    case 'RestCart': 
    return{
        ...state,
        artItem: [] 
    }
  }
};
