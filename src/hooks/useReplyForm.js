import { useReducer } from "react";

export const useReplyForm = () => {
  const reducer = (state, action) => {
    if (state?._id !== action?._id) {
      return { ...action };
    } else {
      return {};
    }
  };
  const [formState, setFormState] = useReducer(reducer, {});

  return { formState, setFormState };
};
