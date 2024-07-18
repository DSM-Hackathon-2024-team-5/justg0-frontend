import { useState } from "react";

export const useForm = (initialValue) => {
  const [state, setState] = useState(initialValue);
  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return { state, setState, onChange };
};
