// State should contain a list of categories as well as the active category
// Each category should have a normalized name, display name, and a description
// Create an action that will trigger the reducer to change the active category
// Update the active category in the reducer when this action is dispatched



// Define initial state
import axios from 'axios'
const initialState = {
    categories: {
      // electronics: {displayName: 'Electronic Products', description: 'Devices to keep you connected'},
      // food: {displayName: 'Artisanal Eats', description: 'Healthy, locally sourced ingredients'},
    },
      activeCategory: {
       name: 'Electronic Products', description: 'Devices to keep you connected'
      },
  
  }
  
  
  // Define reducer
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = initialState, action) => {
  
    const {type, payload} = action;
  
    switch(type) {
  
      case 'Change':
        let categories = state.categories;
       
        let list = []
        categories.forEach(element => {
           list.push(Object.values(element))
          
        });
         console.log('list',list)
         for(let i = 0; i < list.length;i++ ){
        if (payload===list[i][1]){

        let activeCategory = list[i][1]
        return {activeCategory, categories};
      }}
      break
        case 'GetCategories':
          console.log('axios work !')
      return {...state, categories: payload};

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
  export function getCategories() {

    return async function (dispatch){
      const response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
      dispatch({
        type: 'GetCategories',
        payload: response.data.results
      })
    }
  
  }