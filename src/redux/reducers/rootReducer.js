import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import cardReducer from './cardReducer';

export default combineReducers({
  menu: menuReducer,
  card: cardReducer,
});
