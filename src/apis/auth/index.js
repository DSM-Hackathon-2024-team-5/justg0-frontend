import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const router = "/auth";

export const useSignUp = () => {
  return useMutation({
    mutationFn: async () => {
      await axios.post(`${router}/signup`, {});
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: async () => await axios.post(`${router}/login`, {}),
  });
};
