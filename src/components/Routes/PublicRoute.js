import { useSelector } from "react-redux";
import { selectToken } from "../../redux/selectors";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children, restricted = false, redirectTo }) => {
  const token = useSelector(selectToken);
  const shouldRedirect = token && restricted;
  return <> {shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
};
