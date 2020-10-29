  
let initalState = {};
  
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initalState, action) => {
  let { type, payload } = action;
  switch(type)
  {
    case "View":
      //let obj=payload;
      return {payload} ;
    default:
      return state;
  }
};

export const ViewAction = (product) => {
  return {
    type: 'View',
    payload: product
  }
}
