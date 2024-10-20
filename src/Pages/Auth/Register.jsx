import { Link, useNavigate } from "react-router-dom";
import LogoText from "../../Components/sharedComponents/LogoText";
import SignUpBtn from "../../Components/sharedComponents/Button/SignUpBtn";
import useAuth from "../../Components/Hooks/useAuth";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, user } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const full_name = form.fullName.value;
    const photoURL = form.profileImg.value;

    // const userInfo = {
    //   full_name: form.fullName.value,
    //   photoURL: form.profileImg.value,
    //   userEmail: form.email.value,
    // };

    // console.log(userInfo);

    if (password.length < 6) {
      toast.error("password must be six digit");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Your password must need one Capital Letter");
      return;
    } else if (
      !/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}/.test(
        password
      )
    ) {
      toast.error("Your password must need one special character!");
      return;
    }
    const toastId = toast.loading("Creating user...");
    const toastIdUpdate = toast.loading("Updating user...");
    try {
      const userInfo = await createUser(email, password);
      toast.success("User Created", { id: toastId });

      await updateProfile(userInfo.user, {
        displayName: full_name,
        photoURL: photoURL,
      });
      toast.success("User Data Updated", { id: toastIdUpdate });
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err.message, { id: toastId });
    }
  };

  //     //user data send database

  //         if (data.insertedId) {
  //           Swal.fire({
  //             position: "center",
  //             icon: "success",
  //             title: "Data Update Successfully!",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });

  //   }

  return (
    <div className="container  mx-auto">
      <nav className="flex flex-col py-auto pt-6 sm:flex-row sm:justify-between sm:items-center">
        <Link to="/">
          <LogoText />
        </Link>

        <div className="flex items-center mt-2 -mx-2 sm:mt-0">
          <Link
            to="/login"
            className="px-3 py-1 hover:bg-primary text-sm font-semibold text-white transition-colors duration-300 transform border-2 rounded-md"
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

      <section className=" dark:bg-gray-900">
        <div className="flex items-center justify-center min-h-[85vh]">
          <div>
            <img
              className=" hidden max-h-[85vh] my-auto object-cover lg:block lg:w-full rounded-3xl"
              src="https://img.freepik.com/premium-vector/organic-flat-printing-industry-illustration_52683-59566.jpg"
              alt=""
            />
          </div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-white capitalize dark:text-white">
                Get your Printing account now.
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Lets get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>

              <form
                onSubmit={handleSignUp}
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              >
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Ashiqe"
                    required
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Profile Picture Link
                  </label>
                  <input
                    type="text"
                    name="profileImg"
                    required
                    placeholder="Paste your image link "
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="ashiqe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Enter your password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <input type="submit" value="Sign Up" />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
