import useAuth from "../../../Components/Hooks/useAuth";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import MyServiceTable from "./MyServiceTable";
import { useState } from "react";
import MyServiceTableSM from "./MyServiceTableSM";
import { toast } from "react-hot-toast";
import DashboardHeader from "../../Dashboard/DashboardHeader";

const MyServices = () => {
  const { user } = useAuth();
  const axios = useAxiosSecure();
  const [serviceData, setServiceData] = useState([]);

  const getMyServiceData = async () => {
    // const url = `/myservice?email=${user?.email}`

    const res = await axios
      .get(`/myService?email=${user?.email}`)
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
    return <span className="loading loading-spinner text-secondary"></span>;
  }

  if (isError) {
    return <p>Failed Load: {error}</p>;
  }

  const handleDeleteService = (id) => {
    axios.delete(`/delete/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        toast.dismiss("Delete Success fully");
        const remaining = serviceData.filter((service) => service._id !== id);
        setServiceData(remaining);
      }
    });
    console.log("delete click");
  };
  const headerView = "My Services";

  return (
    <div>
      <DashboardHeader view={headerView} />
      <div className="container  ">
        <div className=" w-full mx-auto">
          {/* <h2>My All Service Search</h2> */}
        </div>
        <section className="container hidden mt-10 lg:block  px-4 mx-auto">
          <div className="flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y  divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-slate-800 text-white dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5  px-4 text-sm font-normal text-left rtl:text-right"
                        >
                          <div className="flex items-center gap-x-3">
                            <button className="flex items-center ml-5 gap-x-2">
                              <span>Service Name</span>

                              <svg
                                className="h-3"
                                viewBox="0 0 10 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                />
                                <path
                                  d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                />
                                <path
                                  d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                />
                              </svg>
                            </button>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          Status
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          Service Area
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
                        >
                          Description
                        </th>

                        <th scope="col" className="relative py-3.5 px-4">
                          Action <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-base-200 text-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {serviceData?.map((service) => (
                        <MyServiceTable
                          key={service._id}
                          service={service}
                          handleDeleteService={handleDeleteService}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* //small device */}
        <div className="lg:hidden  container mx-auto">
          <table className="w-full  ">
            <thead className=" p-2 h-20 bg-slate-800 text-white dark:bg-gray-800">
              <th
                scope="col"
                className="px-1 py-1 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400"
              >
                <h3>SL</h3>
              </th>
              <th scope="col">
                <h3>Image</h3>
              </th>
              <th scope="col">
                <h3>Service Info</h3>
              </th>
              <th scope="col">
                <h3>Service Area</h3>
              </th>
              <th>
                <h3>Action</h3>
              </th>
            </thead>
            <tbody className="bg-base-200 text-white divide-y divide-gray-200">
              {serviceData?.map((service, i) => (
                <MyServiceTableSM
                  key={service._id}
                  service={service}
                  i={i}
                  handleDeleteService={handleDeleteService}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
