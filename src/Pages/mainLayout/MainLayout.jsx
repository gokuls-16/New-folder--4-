import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "./Shared/NavBar";
import Footer from "../Footer/Footer";
import LoadingLottie from "../../Components/Hooks/Animation/LoadingLottie";

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <NavBar />
      {isLoading ? (
        <>
          <LoadingLottie />
        </>
      ) : (
        <>
          <div className="flex flex-col min-h-screen">
            <Outlet />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default MainLayout;
