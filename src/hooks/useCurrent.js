import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../redux/selectors";
import { useQuery } from "react-query";
import axios from "axios";
import { setUser } from "../redux/auth/userSlice";

const BASE_URL_USER = "https://miraplay-94ik.onrender.com/api/users";
export const useCurrent = () => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  return useQuery({
    queryKey: "users",
    queryFn: async () => {
      if (!token) {
        return;
      }
      const { data } = await axios.get(`${BASE_URL_USER}/current`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setUser(data));
      return data.user;
    },
  });
};
