export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);

  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };

    case "REMOVE ITEM FROM BASKET":
      //logic for removing item from basket
      console.log("remove from basket");
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
      };

    case "IS USER LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    case "ORDER SUCCESS":
      return {
        ...state,
        basket: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
