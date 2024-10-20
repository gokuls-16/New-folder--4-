import { useState } from "react";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Components/Hooks/useAuth";
import DashboardHeader from "../Dashboard/DashboardHeader";
import MyBookingTable from "./MyBookingTable";
import { Link } from "react-router-dom";

const MyBooking = () => {
  // /mybooking?email=lores@print.com

  const [myBookingData, setServiceData] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const getMyServiceData = async () => {
    // const url = `/myservice?email=${user?.email}`

    const res = await axiosSecure
      .get(`/mybooking?email=${user?.email}`)
      .then((res) => res.data);
    console.log(res);
    setServiceData(res);
    return res;
  };

  const {
    data: myService,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["myService"],
    queryFn: getMyServiceData,
  });

  if (isLoading) {
    return (
      <span className="loading my-auto mx-auto text-4xl loading-lg loading-spinner  text-secondary"></span>
    );
  }

  if (isError) {
    return <p>Failed Load: {error}</p>;
  }

  // console.log(myBookingData);
  const view = "My Booking Page";
  return (
    <div className=" container mx-auto   ">
      <DashboardHeader view={view} />
      {/* <my booking section  */}
      {!myBookingData.length ? (
        <>
          <h2 className="text-3xl">You have not booked any services yet</h2>

          <Link to="/services">
            <img
              src="https://danifoxhypnosis.com/wp-content/uploads/2016/09/booknow.gif"
              alt=""
            />
          </Link>
        </>
      ) : (
        <>
          <div className="mt-10">
            <h2 className="text-3xl">
              My Bookings total: {myBookingData?.length} Services
            </h2>

            <div className="w-full mt-10  p-4 bg-slate-300 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flow-root">
                <div
                  role="list"
                  className="divide-y divide-base-200 dark:divide-gray-700"
                >
                  {/* for table resposive issue  hidden */}
                  <div>
                    <ul className=" flex gap-16 text-black font-semibold text-xl  ">
                      <li>Image</li>
                      <li>Service Info</li>

                      <li>price</li>
                      <li>Status</li>
                    </ul>
                  </div>{" "}
                  <div className="grid grid-cols-1 gap-2">
                    {myBookingData?.map((myBooked) => (
                      <MyBookingTable key={myBooked._id} myBooked={myBooked} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 "></div>
            <div>
              <table hidden className=" p-10 ">
                <thead className=" p-2 h-20 bg-slate-800 text-white dark:bg-gray-800">
                  <th
                    scope="col"
                    className="px-1 py-1 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                  >
                    <h3 className="pl-10">Date</h3>
                  </th>
                  <th scope="col" className=" ">
                    <h3>Image</h3>
                  </th>
                  <th scope="col">
                    <h3>Service Info</h3>
                  </th>
                  <th scope="col">
                    <h3>Price</h3>
                  </th>
                  <th scope="col">
                    <h3>Service Area</h3>
                  </th>
                  <th scope="col">
                    <h3>Provider Info</h3>
                  </th>
                  <th scope="col">
                    <h3>Status</h3>
                  </th>
                </thead>
                <tbody className="bg-base-200 text-white divide-y divide-gray-200">
                  {myBookingData?.map((myBooked) => (
                    <MyBookingTable key={myBooked._id} myBooked={myBooked} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}{" "}
    </div>
  );
};

export default MyBooking;
