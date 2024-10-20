import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/mainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddService from "../Pages/Services/AddService";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import MyServices from "../Pages/Services/MyServices/MyServices";
import PrivateRoute from "./PrivateRoute";
import UpdateService from "../Pages/Services/MyServices/UpdateService";
import MySchedules from "../Pages/MySchedules/MySchedules";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyBooking from "../Pages/MySchedules/MyBooking";
import MyPending from "../Pages/MySchedules/MyPending";
import MyScheduleLayout from "../Pages/MySchedules/MyScheduleLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },

      {
        path: "/updateService/:id",
        element: (
          <PrivateRoute>
            <UpdateService />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/myServices",
        element: (
          <PrivateRoute>
            <MyServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/mySchedules",
        element: (
          <PrivateRoute>
            <MyScheduleLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard/mySchedules",
            element: (
              <PrivateRoute>
                <MySchedules />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/mySchedules/myBooking",
            element: (
              <PrivateRoute>
                <MyBooking />
              </PrivateRoute>
            ),
          },
          {
            path: "/dashboard/mySchedules/myPending",
            element: (
              <PrivateRoute>
                <MyPending />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
