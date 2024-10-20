import Slider from "./Slider";
import { AiFillPrinter, AiTwotoneNotification } from "react-icons/Ai";

const VideoBanner = () => {
  return (
    <div>
      <div
        className="lg:bg-gradient-to-l bg-gradient-to-l relative z-0 top-0  min-h-screen 
      bg-opacity-20 hero-overlay from-[#9080eb] rounded-b-2xl to-gray-800 shadow-2xl  "
      >
        <div className="mx-auto  container">
          <div
            className=" overflow-hidden  md:flex    w-full py-2  
           rounded-xl"
          >
            <div className="space-y-4 md:text-left text-center mt-28  mx-2 items-center   my-auto">
              <h2>DIGITAL PRINTING SERVICE</h2>{" "}
              <AiFillPrinter className="text-6xl mx-auto md:mx-0 text-secondary " />
              <h2 className="text-3xl font-bold">
                Truly Inspired Personal & Promotional Gifts
              </h2>
              <p className="hidden md:block">
                Morbi at faucibus nunc. Vivamus rhoncus placerat rhoncus. Cras
                et magna magna. Proin a erat commodo, pretium diam id, volutpat
                lacus. Vestibulum mattis rutrum mauris.
              </p>
              <div className="flex">
                <input
                  className="border-2 border-blue-400 block h-12 w-full rounded-md  border-double
                border-transparent bg-transparent 
               bg-base-100,linear-gradient(to_right,#334454,#334454)]
               	bg-origin-border px-3 py-2 text-slate-200 transition-all 
              duration-500 "
                  placeholder="Enter your email"
                />
                <button
                  className="text-2xl btn bg-secondary border-none"
                  type="submit"
                  name=""
                  id=""
                >
                  <AiTwotoneNotification />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 md:mt-20 mt-5 mx-auto object-cover">
              <Slider />
            </div>
          </div>
          {/* <div
          className="relative z-0 flex lg:w-1/3  w-full md:hidden 
        lg:block md:-left-0 lg:left-[900px] -top-[550px] md:-top-[800px]   rounded-xl"
        >
          <Slider />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
