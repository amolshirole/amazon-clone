export const initialState = {
  basket: [],
  // user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Add_TO_BASKET":
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "Remove from basket":
      // Logic for Removing item from basket
      return { state };
    default:
      return state;
  }
};

export default reducer;
