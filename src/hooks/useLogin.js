import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/auth/userSlice";
import axios from "axios";
const BASE_URL_USER = "https://miraplay-94ik.onrender.com/api/users";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const loginMutation = useMutation({
    mutationFn: async (user) => {
      const { data } = await axios.post(`${BASE_URL_USER}/login`, user);
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
    loginMutation,
    error,
    isError: loginMutation.isError,
    isLoading: loginMutation.isLoading,
  };
};
