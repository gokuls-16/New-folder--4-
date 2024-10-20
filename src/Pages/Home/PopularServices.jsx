import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import PopularServiceCard from "./PopularServiceCard";
import Banner from "./Banner";
import Btn from "./../../Components/sharedComponents/Button/Btn";
import { Link } from "react-router-dom";

const PopularServices = () => {
  const axios = useAxiosSecure();
  const view = "Show More";
  const viewShow = "Show All";

  //   const [serviceData, setServiceData] = useState();

  const getServiceData = async () => {
    const res = await axios.get("/services");
    // console.log(res);
    return res;
  };

  const {
    data: services,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["services"],
    queryFn: getServiceData,
  });

  if (isLoading) {
    return <span className="loading loading-spinner text-secondary"></span>;
  }
  if (isError) {
    return <p>Failed Load: {error}</p>;
  }

  // console.log(services.data);
  const serviceData = services.data;
  // const serviceLength = serviceData?.length;
  const start = serviceData?.length - 4;

  return (
    <div className="container mx-auto my-10">
      <div className="text-center my-10 mx-auto">
        <h2 className=" md:text-4xl text-2xl font-medium lg:text-6xl">
          Popular Services
        </h2>
        <p className="text-gray-500 w-1/2 mx-auto mt-10">
          Cras et magna magna. Proin a erat commodo, pretium diam id, volutpat
          lacus. Vestibulum mattis rutrum mauris. Morbi at faucibus nunc.
          Vivamus rhoncus placerat rhoncus.
        </p>
      </div>
      <div className="grid  mx-5 md:mx-0 grid-cols-1 gap-4">
        {serviceData.slice(start, serviceData?.length).map((service) => (
          <PopularServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="flex mt-10 justify-center">
        <button>
          <Link to="/services">
            {" "}
            <Btn view={viewShow} />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default PopularServices;
