// State should contain a list of categories as well as the active category
// Each category should have a normalized name, display name, and a description
// Create an action that will trigger the reducer to change the active category
// Update the active category in the reducer when this action is dispatched



// Define initial state

const initialState = {
    categories: {
      electronics: {displayName: 'Electronic Products', description: 'Devices to keep you connected'},
      food: {displayName: 'Artisanal Eats', description: 'Healthy, locally sourced ingredients'},
    },
      activeCategory: {displayName: 'Electronic Products', description: 'Devices to keep you connected'},
  
  }
  
  
  // Define reducer
  export default (state = initialState, action) => {
  
    const {type, payload} = action;
  
    switch(type) {
  
      case 'Change':
        let categories = state.categories;
        let activeCategory = categories[payload];
        return {activeCategory, categories};
        
      default:
        return state;
  
    }
  }
  
  
  // Define action creators
  
  export const swapActive = (active) => {
    return {
      type: 'Change',
      payload: active
    }
  }