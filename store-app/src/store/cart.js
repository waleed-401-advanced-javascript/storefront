/* eslint-disable no-lone-blocks */
/* eslint-disable import/no-anonymous-default-export */
let initalState = {
    basket: [],
  };
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = initalState, action) => {
    let { type, payload } = action;
    let basket = state.basket;
    switch (type) {
      case "Add":
        if (basket.indexOf(payload) <= -1) {
          basket = [...basket, payload];
        }
        return { basket };
        case "Remove":
           {
           
                basket.splice(basket.indexOf(payload), 1);
                basket = [...basket];
                return { basket };
          
            }
         
      default:
        return state;
    }
  };
  export const AddCart = (product) => {
    return {
      type: 'Add',
      payload: product
    }
  }
  export const RemoveFromCart = (product) => {
    return {
      type: 'Remove',
      payload: product
    }
  }