import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/Ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div>
      <div>
        <div
          className="lg:bg-gradient-to-l bg-gradient-to-l    
      bg-opacity-20 hero-overlay from-[#3c3757] rounded-b-2xl to-gray-800 shadow-2xl  "
        >
          <div className=" md:container py-20 md:mx-auto mx-10">
            <div
              className=" overflow-hidden   md:flex    w-full py-2  
           rounded-xl"
            >
              <div className="space-y-4 w-full  md:w-1/2 md:text-left text-center mx-2 my-auto">
                <h2 className="text-3xl font-bold">ABOUT US</h2>{" "}
                <p className=" text-justify ">
                  Praesent eget viverra ipsum. Duis ultricies rhoncus tempor.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Cras eget nulla sagittis, congue nibh ut, imperdiet nibh. Duis
                  metus odio, ullamcorper id dictum vitae, tincidunt a ante.
                  Pellentesque ac sapien id nisl pulvinar mollis sed quis
                  libero. Nam cursus orci ac eros maximus aliquam.
                  <br /> In hac habitasse platea dictumst. Suspendisse molestie
                  maximus rhoncus. Proin sit amet porttitor libero, in mollis
                  ex. Vivamus lobortis purus velit, vitae sodales augue ultrices
                  non. Donec egestas in neque non Praesent eget viverra ipsum.
                  Duis ultricies rhoncus tempor. Interdum et malesuada fames ac
                  ante ipsum primis in faucibus. Cras eget nulla sagittis,
                  congue nibh ut, imperdiet nibh.
                </p>
                <div className="flex gap-10 pt-10">
                  <Link to="/services" className="btn">
                    Get Now
                  </Link>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl text-secondary">
                      <FiPhoneCall />
                    </span>
                    <div>
                      <h2>Call us Anytime</h2>
                      <p>001465466</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl text-primary">
                      <AiOutlineMail />
                    </span>
                    <div>
                      <h2>Email us Anytime</h2>
                      <p>info@printmama.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" ">
                <div className="    relative overflow-hidden object-cover bottom-0 top-16 -left-4  md:-right-72 md:top-16 origin-center   ">
                  <img
                    className="w-32 animate-spin"
                    src="https://i.ibb.co/LtYCFy1/guaranteed.png"
                    alt="guaranteed"
                    border="0"
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <img
                    className="rounded-xl w-full  md:w-3/5  md:ml-auto"
                    src="https://wdtprintme.wpengine.com/wp-content/uploads/2023/09/Mega-Menu-Banner-5.png"
                    alt=""
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
