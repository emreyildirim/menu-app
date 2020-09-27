import { SET_MENU} from "../actions/menuTypes";

const initialState = [];

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_MENU:
    return [
      ...state,
      ...payload
    ];
    default:
      return state;
  }
}
