import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
// import Slider from "../Home/Slider";
import { useQuery } from "@tanstack/react-query";
import ServiceCard from "./ServiceCard";
import Btn from "../../Components/sharedComponents/Button/Btn";
import { useEffect, useState } from "react";

const Services = () => {
  const axiosSecure = useAxiosSecure();
  const [dataLength, setDataLength] = useState(6);
  const view = "Show More";
  const [search, setSearch] = useState("");
  const [serviceData, setService] = useState([]);
  // .get(`/services?search=${search}`)

useEffect(()=>{
  axiosSecure.get(`/service?search=${search}`)
  .then(res=> setService(res.data))
},[axiosSecure,setService,search])



  const getServiceData = async () => {
    const res = await axiosSecure.get("/services");
    // console.log(res);
    setService(res.data);
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
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchInputValue = form.search.value;
    setSearch(searchInputValue);
    form.reset()
  };


  // useEffect(() => {
  //   axiosSecure(`/searchService?search=${search}`).then((res) => set);
  // }, [axiosSecure, search]);

  return (
    <div className="relative top-20 mb-28 container mx-auto">
      <div className="flex justify-between mt-10">
      <form onSubmit={handleSearch}>
        <input className="input border-primary" type="text" name="search" />
        <input className="btn" type="submit" value="Search Services" />
      </form>
        <button onClick={()=>getServiceData()} className="btn bg-secondary">View All</button>
      </div>
      
      <h2 className="text-left mt-10">Your Got Total service Here {serviceData?.length} - you last searching value {search}</h2>
      <div className="grid grid-cols-1 gap-10">
        {serviceData?.slice(0, dataLength)?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div
        className={
          dataLength === serviceData?.length ? "hidden" : "flex justify-center"
        }
      >
        <button onClick={() => setDataLength(serviceData?.length)}>
          <Btn view={view} />
        </button>
      </div>
    </div>
  );
};

export default Services;
