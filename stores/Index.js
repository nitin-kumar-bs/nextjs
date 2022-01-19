import { createStore } from "redux";
const cartReducer = (state, action) => {
  if (action.type == "ADD__ITEM") {
    //   console.log(state.items);
    return { ...state, items: [...state.items, action.item] };
  }
  if (action.type === "DEL__ITEM") {
    return {
      ...state,
      items: state.items.filter((id) => action.id !== id.id),
    };
  }

  if (action.type == "ADD__ITEM") {
    //   console.log(state.items);
    return { ...state, items: [] };
  }

  return { items: [] };
};

const store = createStore(cartReducer);

export default store;
