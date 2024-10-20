import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";

import toast from "react-hot-toast";

const UpdateService = () => {
  const axiosSecure = useAxiosSecure();

  const { id } = useParams();

  const { data: service } = useQuery({
    queryKey: ["update"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/updateService/${id}`);
      console.log(res);

      return res;
    },
  });

  const serviceData = service?.data;

  // console.log(serviceData);

  const handleUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedService = {
      image: form.image.value,
      serviceName: form.serviceName.value,
      serviceArea: form.serviceArea.value,
      price: form.price.value,
      description: form.description.value,
    };

    fetch(
      `https://b8a11-server-side-ashiqee-ashiqee.vercel.app/api/mama/update/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedService),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          const toastId = toast.loading("Updating data...");
          toast.success("Data Updating Done", { id: toastId });
        }
      });

    // console.log(updatedService);
  };

  return (
    <div className="relative  container     lg:flex my-auto  mx-auto  ">
      <div className=" md:w-1/2 lg:flex">
        <div className="text-lg space-y-5 mx-14 md:mx-0 mb-2">
          <h2 className="text-2xl text-secondary">
            {serviceData?.serviceName}
          </h2>
          <h2>Price: {serviceData?.price} BDT</h2>
          <h2>Service Area: {serviceData?.serviceArea}</h2>
        </div>
        <img
          className="md:w-1/2 w-96  rounded-xl mx-auto"
          src={serviceData?.image}
          alt=""
        />
      </div>

      <div className="md:w-1/2 my-10  md:my-auto mx-10">
        <h2 className="mb-16 text-3xl">Update Printing Service</h2>

        <form onSubmit={handleUpdateService}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="image"
              defaultValue={serviceData?.image}
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Paste URL of the Service
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="serviceName"
              defaultValue={serviceData?.serviceName}
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Service Name
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="price"
                defaultValue={serviceData?.price}
                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Price
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="serviceArea"
                defaultValue={serviceData?.serviceArea}
                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Service Area
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <textarea
              type="text"
              name="description"
              defaultValue={serviceData?.description}
              className="block py-2.5 px-0 w-full textarea textarea-bordered  text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Description
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
