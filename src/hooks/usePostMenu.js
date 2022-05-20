import { useReducer } from "react";

export const usePostMenu = () => {
  const reducer = (state, action) => {
    if (!state[action._id]) {
      return { ...action };
    } else {
      return {};
    }
  };
  const [menuState, setMenuState] = useReducer(reducer, {});

  return { menuState, setMenuState };
};
