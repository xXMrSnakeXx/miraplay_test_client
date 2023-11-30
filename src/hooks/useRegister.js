import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/auth/userSlice";
import { useState } from "react";
import axios from "axios";
const BASE_URL_USER = "https://miraplay-94ik.onrender.com/api/users";

export const useRegister = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const registerMutation = useMutation({
    mutationFn: async (user) => {
      const { data } = await axios.post(`${BASE_URL_USER}/signup`, user);
      return data;
    },
    onSuccess: (data) => {
      dispatch(setUser(data));
      queryClient.setQueryData("users", data.user);
    },

    onError: ({ response: { data } }) => {
      setError(data.message);
    },
  });

  return {
    registerMutation,
    error,
    isError: registerMutation.isError,
    isLoading: registerMutation.isLoading,
  };
};
