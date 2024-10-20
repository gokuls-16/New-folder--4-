import useAuth from "../../Components/Hooks/useAuth";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import MyPendingWorkCard from "./MyPendingWorkCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const MyPending = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [pendingServices, setPendingService] = useState([]);
  const url = `/pendingService?email=${user?.email}`;

  const [PendingDisplay, setDisplay] = useState([]);
  const [isProgress, setProgress] = useState([]);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    axiosSecure.get(url).then((res) => setPendingService(res.data));
  }, [axiosSecure, url, setPendingService]);

  // if (isLoading) {
  //   return (
  //     <span className="loading my-auto mx-auto text-4xl loading-lg loading-spinner  text-secondary"></span>
  //   );
  // }

  // if (isError) {
  //   return <p>Failed Load: {error}</p>;
  // }

  const handleStatus = (status, id) => {
    const statusUpdate = [];
    if (status === "Pending") {
      statusUpdate.push("In Progress");
    } else if (status === "In Progress") {
      statusUpdate.push("Completed");
    } else {
      return;
    }

    const serviceStatus = statusUpdate[0];

    fetch(
      `https://b8a11-server-side-ashiqee-ashiqee.vercel.app/api/mama/updatePending/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ serviceStatus }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Updated Status Done");
        if (data.modifiedCount > 0) {
          const remaining = pendingServices.filter(
            (pService) => pService._id !== id
          );
          const updated = pendingServices.find((service) => service._id === id);
          updated.serviceStatus = statusUpdate[0];
          const newServiceUpdated = [updated, ...remaining];
          // console.log(newServiceUpdated);
          setPendingService(newServiceUpdated);
        }
      });
  };

  const handleChangeStatus = (e) => {
    e.preventDefault();
    const form = e.target;
    // const status = form.paperSize.value;
    const sortValue = form.sort.value;

    const filter = pendingServices?.filter(
      (service) => service.serviceStatus === sortValue
    );

    setDisplay(filter);

    const filterInProgress = pendingServices?.filter(
      (service) => service.serviceStatus === sortValue
    );

    setDisplay(filterInProgress);
    const filterCompleted = pendingServices?.filter(
      (service) => service.serviceStatus === sortValue
    );

    setDisplay(filterCompleted);
  };

  useEffect(() => {
    setDisplay(pendingServices);
  }, [pendingServices]);

  return (
    <div className="mx-auto ml-10">
      <div>
        <form onSubmit={handleChangeStatus}>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select an option
          </label>
          <select
            name="sort"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Sort Status</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <input type="submit" className="btn bg-primary w-20" value="Sort" />
        </form>
      </div>
      {!pendingServices.length ? (
        <> No Available Any Service </>
      ) : (
        <>
          <div>
            <ul>
              {PendingDisplay?.map((pData) => (
                <MyPendingWorkCard
                  key={pData._id}
                  pendingData={pData}
                  handleStatus={handleStatus}
                />
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MyPending;
