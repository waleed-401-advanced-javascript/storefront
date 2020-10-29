let initalState = {
  basket: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initalState, action) => {
  let { type, payload } = action;
  let basket = state.basket;
  switch (type) {
    case "Add":
    
      console.log('AddCart ' ,Object.values(payload))

      if (basket.indexOf(payload.name) <= -1) {
        basket = [...basket, payload];
        console.log('basket ---> : ',basket)
      }
      return { basket };
      case "Delete":
        basket.splice(basket.indexOf(payload), 1);
        basket = [...basket];
        return { basket };
  
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

export const Delete = (product) => {
  return {
    type: 'Delete',
    payload: product
  }
}