import { ADD_ITEM, DELETE_ITEM } from "../actions/cardTypes";

const initialState = [];

export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM: 
    return state.filter(item => item.name !== action.payload.name);
    default:
      return state;
  }
}
