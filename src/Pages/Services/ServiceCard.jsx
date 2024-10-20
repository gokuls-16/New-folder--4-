import { Link } from "react-router-dom";
import ServiceProviderCard from "../../Components/sharedComponents/Button/Card/ServiceProviderCard";
import Btn from "../../Components/sharedComponents/Button/Btn";

const ServiceCard = ({ service }) => {

  const viewDetails = "View Details"
  const {
    image,
    serviceName,
    serviceArea,
    price,
    serviceProviderName,
    _id,
    description,
  } = service;
  return (
  <div>
 

   <div className="container animate-background- bg-[linear-gradient(20deg,#E77951,4%,#1e2631,95%,#000103)] 
    bg-[length:200%_100%]  border-primary bg-primary 
    bg-opacity-10 shadow-2xl  rounded-xl border flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold tracking-wide text-secondary dark:text-white lg:text-4xl">{serviceName}</h1>
                <p className="mt-4 text-white dark:text-gray-300">{description?.slice(0,100)}</p>
                <div className="grid gap-4 mt-8  sm:grid-cols-2">
                    

                  
                <div>
                <ServiceProviderCard service={service}/> 
                
                </div>
                <div className="space-y-2">
                <h2> {serviceProviderName}</h2>
                <h2>Price: {price} BDT</h2>
                <h2>Service Area: {serviceArea} </h2>
               
                <span><Link to={`/serviceDetails/${_id}`} > <Btn view={viewDetails} /></Link></span>
                </div>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img className="object-cover w-full h-full max-w-2xl rounded-lg" src={image} alt="glasses photo"/>
        </div>
    </div>

    </div>
  );
};

export default ServiceCard;
