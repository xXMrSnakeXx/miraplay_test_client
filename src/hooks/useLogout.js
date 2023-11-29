import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../redux/selectors";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { logoutUser } from "../redux/auth/userSlice";
const BASE_URL_USER = "https://miraplay-94ik.onrender.com/api/users";

export const useLogout = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const queryClient = useQueryClient();

  const logoutMutation = useMutation({
    mutationFn: async () => {
      return await axios.get(`${BASE_URL_USER}/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      dispatch(logoutUser());
      queryClient.clear();
    },
    onError: (error) => {
      console.log("ERROR_LOGOUT", error);
    },
  });
  return { logoutMutation };
};
