import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import LogoText from "../../Components/sharedComponents/LogoText";
import SignUpBtn from "../../Components/sharedComponents/Button/SignUpBtn";
import { FcGoogle } from "react-icons/Fc";
import useAuth from "../../Components/Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";


const Login = () => {
  const { signInUser, googleLogin} = useAuth();
  const navigate = useNavigate();
  const location = useLocation()
  const axios = useAxiosSecure()

  const handleSingIn = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    try {
      await signInUser(email, password);
      navigate(location?.state ? location?.state : '/')
      toast.success("SingIn Successfully");
//get access token


        axios.post('/jwt',{email})
        .then(res=>{
          // console.log(res.data);
          if(res.data.success){
            navigate(location?.state ? location?.state : '/')
          }
        })
        .catch(err=>console.error(err))


    
    } catch (err) {
      toast.error("invalid User", err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate(location?.state ? location?.state : '/')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header className=" pattern">
      <div className="container mx-auto">
        <nav className="flex flex-col w-56 md:w-full mx-auto py-6 sm:flex-row sm:justify-between sm:items-center">
          <Link to="/">
            <LogoText />
          </Link>

          <div className="flex items-center mt-2 -mx-2 sm:mt-0">
            <Link
              to="/login"
              className="px-3 py-2 hover:bg-primary text-sm font-semibold text-white transition-colors duration-300 transform border-2 rounded-md"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className=" ml-4 transition-colors duration-300 transform bg-black rounded-md hover:bg-gray-800"
            >
              <SignUpBtn />
            </Link>
          </div>
        </nav>

        <div className="flex flex-col items-center py-0 lg:h-[32rem] lg:flex-row">
          <div className="lg:w-1/2 hidden md:block lg:block">
            <img
              src="https://i.ibb.co/4Kmbyf4/Humaaans-3-Characters.png"
              alt="Humaaans-3-Characters"
              border="0"
            />
          </div>

          <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
            <div className="w-full max-w-md bg-white bg-opacity-10 rounded-lg dark:bg-gray-800">
              <div className="px-6 py-8 text-center">
                <h2 className="text-2xl font-semibold  dark:text-white fo">
                  Sign In
                </h2>

                <form onSubmit={handleSingIn}>
                  <div className="mt-4">
                    <input
                      name="email"
                      className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                      type="email"
                      placeholder="Email address"
                      aria-label="Email address"
                    />
                    <input
                      name="password"
                      className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
                      type="password"
                      placeholder="Password"
                      aria-label="Password"
                    />
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <a
                      href="#"
                      className="text-sm text-gray-600 dark:text-gray-200 hover:underline"
                    >
                      Forget Password?
                    </a>

                    <input
                      value="Sing In"
                      type="submit"
                      className="px-6 py-2 font-medium text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-primary dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700"
                    />
                  </div>
                  <h2 className="my-5">
                    Don't have an account?{" "}
                    <Link to="/signup">
                      <span className="text-primary">Please signUp</span>
                    </Link>{" "}
                  </h2>
                </form>
                <hr />
              </div>
              <div
                onClick={handleGoogleLogin}
                className="md:text-xl bg-blue-600 w-fit  md:w-96 border-none hover:bg-primary flex mb-10 mx-auto btn"
              >
                <FcGoogle /> <h2>SingUp with Google</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Login;
