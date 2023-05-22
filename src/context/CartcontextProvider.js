import React, { useReducer , createContext} from "react";

const initialstate = {
  selectItems: [],
  total: 0,
  checkout: false,
};
const sumItem= items => {
  const itemCounter = items .reduce ((total,Product)=>total+Product.quantity,0);
  const total =items .reduce ((total,Product)=>total+Product.price*Product.quantity,0);
  return {itemCounter,total}
}

const cartreducer = (state, action) => {

  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectItems.find((item) => item.id === action.payload.id)) {
        state.selectItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectItems: [...state.selectItems],
        ...sumItem(state.selectItems),
        checkout: false,
      };
    case "REMOVE_ITEM":
      const newSelectItems = state.selectItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectItems: [...newSelectItems],
        ...sumItem(state.selectItems)
      };
    case "INCREASE":
      const idexI = state.selectItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectItems[idexI].quantity++;
      return {
        ...state,
        ...sumItem(state.selectItems)
      };
    case "DECREASE":
      const idexD = state.selectItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectItems[idexD].quantity--;
      return {
        ...state,
        ...sumItem(state.selectItems)
      };
    case "CHECKOUT":
      return {
        selectItems: [],
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectItems: [],
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};
export const cartContext = createContext()
const CartcontextProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartreducer, initialstate);
  return (
    <cartContext.Provider value={{state,dispatch}}>
      {children}
    </cartContext.Provider>
  );
};

export default CartcontextProvider;
