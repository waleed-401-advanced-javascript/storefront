// State should be a list of all products
// Each product should have a category association, name, description, price, inventory count
// Create an action that will trigger when the active category is changed
// HINT: Multiple reducers can respond to the same actions
// Create a reducer that will filter the products list based on the active category



// Define initial state

const initialState = {
    products: [
      {category: 'electronics', name: 'Laptop', description: 'For surfing the web on the go', price: '$2999', inventory: 20},
      {category: 'electronics', name: 'Phone', description: 'To keep you connected', price: '$999', inventory: 30},
      {category: 'food', name: 'Carrots', description: 'Improve your night vision', price: '$2.99', inventory: 50},
      {category: 'food', name: 'Apples', description: 'One a day keeps the doctor away', price: '$0.99', inventory: 80},
      {category: 'food', name: 'Beets', description: 'Caution: Will stain everything', price: '$3.99', inventory: 15},
    ],
    displayedProducts: []
  }
  
  
  // Define reducer
  export default (state = initialState, action) => {
  
    const {type, payload} = action;
  
    switch(type) {
  
      case 'Change':
        let displayedProducts = state.products.filter(product => {
          return product.category === payload;
        })
        return {...state, displayedProducts};
  
      default:
        return state;
  
    }
  }