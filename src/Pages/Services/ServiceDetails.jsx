import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import ServiceProviderCard from "../../Components/sharedComponents/Button/Card/ServiceProviderCard";
import Btn from "../../Components/sharedComponents/Button/Btn";
import useAuth from "../../Components/Hooks/useAuth";
import toast from "react-hot-toast";

const ServiceDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { user } = useAuth();
  const view = "Book Now";
  const view2 = "Close";

  const { data: service } = useQuery({
    queryKey: ["update"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/serviceDetails/${id}`);
      console.log(res);

      return res;
    },
  });

  const serviceData = service?.data;
  console.log(serviceData);

  const handleBookingService = (e) => {
    e.preventDefault();

    const form = e.target;
  const  providerEmail= form.providerEmail.value;
   const userEmail =form.userEmail.value;




  

    const bookedServiceData = {
      serviceName: form.name.value,
      serviceId:id,
      serviceImage: serviceData?.image,
      servicePrice: form.price.value,
      providerEmail: providerEmail,
      serviceProviderName: serviceData?.serviceProviderName,
      providerImage: serviceData?.serviceProviderPhoto,
      userEmail: userEmail,
      serviceTakingDate: form.serviceTakingDate.value,
      serviceArea: form.serviceTakingArea.value,
      address: form.address.value,
      serviceStatus: "Pending",
    };


   

      if(providerEmail === userEmail){
        toast.error("This is your service you can't booked");
        return
      }else{
        // console.log(bookedServiceData);
    const toastId = toast.loading("Product Purchase Pending...");
    // post booking service in db
    axiosSecure.post("/booking", bookedServiceData).then((res) => {
      // console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Product Purchase SuccessFully", { id: toastId });
      }
    });
      }
   

    // checkService(providerEmail,userEmail)
  //   // console.log(bookedServiceData);
  //   const toastId = toast.loading("Product Purchase Pending...");
  //   // post booking service in db
  //   axiosSecure.post("/booking", bookedServiceData).then((res) => {
  //     // console.log(res.data);
  //     if (res.data.insertedId) {
  //       toast.success("Product Purchase SuccessFully", { id: toastId });
  //     }
  //   });
  };

  return (
    <div>
      <div
        className="hero min-h-[30vh]"
        style={{
          backgroundImage:
            "url(https://wdtprintme.wpengine.com/wp-content/uploads/2023/09/Breadcrumb-Bg.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>{serviceData?.serviceName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* display: grid;
    width: 100%;
    place-items: center;
    background-size: cover;
    background-position: center;
}
.hero > * {
    grid-column-start: 1;
    grid-row-start: 1; */}

      <div
        className="grid w-full bg-cover bg-center min-h-[450px]"
        style={{ backgroundImage: `url(${serviceData?.image})` }}
      >
        <div className="hero-overlay bg-opacity-60">
          <div className="container  grid md:grid-cols-2 pt-20 mx-auto">
            {/* service info  */}
            <div className="space-y-3 ">
              <h2 className="text-4xl text-secondary font-bold">
                {serviceData?.serviceName}
              </h2>
              <h2 className="text-2xl font-bold">
                Price: {serviceData?.price} BDT
              </h2>
              <div className="max-w-md">
                <label className="text-lg font-bold">Description</label>
                <p className="text-sm font-md">
                  {" "}
                  {serviceData?.description} BDT
                </p>
              </div>

              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                <Btn view={view} />
              </button>
              <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-2xl">
                  <form onSubmit={handleBookingService}>
                    <div className="relative z-0 w-full object-cover mb-6 flex justify-between group">
                      <img
                        className="w-48 hover:-rotate-12 hover:relative hover:left-50 hover:animate-0 transition-colors  rounded-3xl"
                        src={serviceData?.image}
                        alt=""
                      />

                      <div>
                        <ServiceProviderCard service={serviceData} />
                        <h2 className="text-md font-bold">
                          Name: {serviceData?.serviceProviderName}
                        </h2>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-10">
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="name"
                          readOnly
                          defaultValue={serviceData?.serviceName}
                          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                          Service Name
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="price"
                          readOnly
                          defaultValue={serviceData?.price}
                          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                          Price
                        </label>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          readOnly
                          name="providerEmail"
                          defaultValue={serviceData?.serviceProviderEmail}
                          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                          Service Provider Email
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="userEmail"
                          readOnly
                          defaultValue={user?.email}
                          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                          Your Email
                        </label>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="date"
                          name="serviceTakingDate"
                          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                          required
                        />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                          Service Taking Date
                        </label>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                        <input
                          type="text"
                          name="serviceTakingArea"
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
                        name="address"
                        className="block py-2.5 px-0 w-full textarea textarea-bordered  text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Full Address Details
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <input
                        type="submit"
                        className="btn btn-secondary"
                        value="Purchase This Service"
                      />
                      <div className="modal-action mt-0  w-16">
                        <form method="dialog">
                          <span>
                            {" "}
                            <Btn view={view2} />
                          </span>
                        </form>
                      </div>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
            {/* provider information */}
            <div className="mt-10 md:mt-0">
              <h2 className="text-2xl border-b-2">Provider Information </h2>
              <div className="flex mt-10 gap-10">
                <ServiceProviderCard service={serviceData} />
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">
                    Name: {serviceData?.serviceProviderName}
                  </h2>
                  <h2 className="text-xl font-bold">
                    Location: {serviceData?.serviceArea}
                  </h2>
                  <p>This Service Provider sort detail more khow later</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
