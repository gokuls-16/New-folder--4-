import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Components/Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation()


  if (loading) {
    return (
      <progress className="progress progress-error w-56 text-center my-auto"></progress>
    );
  }

  if (!loading && !user?.email) {
    return <Navigate state={location.pathname} to="/login" replace />;
  }
  return children;
};
export default PrivateRoute;
