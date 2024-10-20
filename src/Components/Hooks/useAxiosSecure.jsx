import axios from "axios";
import { Navigate } from "react-router-dom";

import { useEffect } from "react";

export const axiosSecure = axios.create({
  baseURL: "https://b8a11-server-side-ashiqee-ashiqee.vercel.app/api/mama",
  withCredentials: true,
});

const useAxiosSecure = () => {
  // const {logOut} = useAuth();
 

  // console.log(logOut);
  // const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        // console.log(res);

        return res;
      },
      (error) => {
        console.log("error tracked", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logOut User");
          logOut().then(() => {
            <Navigate to="/login" />;
          });
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
