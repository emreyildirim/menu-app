import { SET_MENU} from "./menuTypes";

export const setMenu = (payload) => {
  return { type: SET_MENU,
  payload,
  };
};

