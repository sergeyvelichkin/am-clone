export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((sum, item) => sum + item.price, 0);
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
