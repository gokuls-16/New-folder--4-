import { Outlet } from "react-router-dom";
import LoadingLottie from "../../Components/Hooks/Animation/LoadingLottie";
import SideBar from "../../Components/sharedComponents/SideBar/SideBar";
import DashboardNavBar from "../mainLayout/Shared/DashboardNavBar";
import NavBar from "../mainLayout/Shared/NavBar";
import useAuth from "./../../Components/Hooks/useAuth";

const DashboardLayout = () => {
  const { loading } = useAuth();
  return (
    <div className="flex justify-start ">
      <SideBar />
      <div>
        <div className="block md:hidden">
          <NavBar />
        </div>

        {loading ? (
          <>
            <LoadingLottie />
          </>
        ) : (
          <>
            {" "}
            <Outlet />
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
