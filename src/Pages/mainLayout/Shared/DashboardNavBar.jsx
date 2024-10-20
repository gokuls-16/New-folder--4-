import { Link, NavLink } from "react-router-dom";

import SignUpBtn from "../../../Components/sharedComponents/Button/SignUpBtn";
import LogoText from "../../../Components/sharedComponents/LogoText";
import useAuth from "./../../../Components/Hooks/useAuth";

const DashboardNavBar = () => {
  const { user, logOut } = useAuth();

  const navMenu = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-secondary-focus font-bold border-b-2"
              : "text-white"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-secondary-focus font-bold border-b-2"
              : "text-white"
          }
          to="/services"
        >
          Services
        </NavLink>{" "}
      </li>
      {/* <li>
        {" "}
        <NavLink to="/AddService">Add Service</NavLink>{" "}
      </li> */}
    </>
  );

  // Profile Menu

  const profileMenu = (
    <>
      <div className="space-y-3  text-center">
        <img
          className="w-28 mx-auto object-cover rounded-full"
          src={user?.photoURL}
          alt=""
        />
        <h2 className="text-center text-2xl">{user?.displayName}</h2>
        <Link to="/profile">
          <button className="btn mt-2 mb-5 text-white border-none  btn-primary ">
            View Profile
          </button>
        </Link>
      </div>
      <div className="text-2xl space-y-4">
        {" "}
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-secondary-focus font-bold border-b-2"
                : "text-white"
            }
          >
            Dashboard
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            to="/myServices"
            className={({ isActive }) =>
              isActive
                ? "text-secondary-focus font-bold border-b-2"
                : "text-white"
            }
          >
            My Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/addService"
            className={({ isActive }) =>
              isActive
                ? "text-secondary-focus font-bold border-b-2"
                : "text-white"
            }
          >
            Add Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/mySchedules"
            className={({ isActive }) =>
              isActive
                ? "text-secondary-focus font-bold border-b-2"
                : "text-white"
            }
          >
            My-schedules
          </NavLink>
        </li>
        <li>
          <button
            onClick={logOut}
            className="text-primary bg-secondary py-2 btn text-xl items-center "
          >
            Logout
          </button>
        </li>
      </div>
    </>
  );

  return (
    <div className="container lg:hidden mx-auto ">
      <header className="py-4  container ">
        <div className="   flex justify-between h-10">
          <div className="navbar-start  lg:hidden">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navMenu}
              </ul>
            </div>
          </div>
          <div className="flex   items-center">
            <h2 className="font-bold mr-5">
              <Link to="/">
                <LogoText />
              </Link>
            </h2>
          </div>
          <div className="items-center flex-shrink-0 lg:hidden gap-5 flex">
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-12 rounded-full ring ring-white dark:ring-gray-900 ">
                      <img className="  " src={user?.photoURL} />
                    </div>
                  </label>

                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-gradient-to-r 
                 from-slate-900 to-cyan-600 shadow-2xl opacity-50 rounded-box w-72"
                  >
                    {profileMenu}
                  </ul>
                </div>
              </>
            ) : (
              <>
                {/* small device singUp  */}
                <NavLink
                  className="px-3  text-sm py-2 font-semibold hover:bg-primary text-white
               transition-colors duration-300 transform border-2 rounded-md"
                  to="/login"
                >
                  Sign In
                </NavLink>
                <NavLink className="hidden md:block" to="/signup">
                  <SignUpBtn />
                </NavLink>
              </>
            )}
          </div>

          <div className="items-center flex-shrink-0 hidden gap-5 lg:flex">
            <div className="flex justify-end items-center">
              <ul className="items-stretch justify-end text-2xl hidden space-x-10 lg:flex">
                {navMenu}
              </ul>
            </div>
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-12 rounded-full ring ring-white dark:ring-gray-900 ">
                      <img className="  " src={user?.photoURL} />
                    </div>
                  </label>
                  {/* lg profile menu */}
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[60] p-2  bg-gradient-to-r 
                  from-slate-900 to-cyan-600 shadow-2xl opacity-50 rounded-box w-72"
                  >
                    {profileMenu}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <NavLink
                  className="px-3 py-2 text-sm font-semibold hover:bg-primary text-white transition-colors duration-300 transform border-2 rounded-md"
                  to="/login"
                >
                  Sign In
                </NavLink>
                <NavLink className="" to="/signup">
                  <SignUpBtn />
                </NavLink>{" "}
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default DashboardNavBar;
