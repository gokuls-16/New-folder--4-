import ContactForm from "./ContactForm";
const ContactUs = () => {
  return (
    <div className=" ">
      <div>
        <div
          className="lg:bg-gradient-to-l bg-gradient-to-l mb-28 
      bg-opacity-20 hero-overlay from-[#3c3757] rounded-b-2xl to-gray-800 shadow-2xl  "
        >
          <div className=" container md:mx-auto py-20 ">
            <div
              className=" overflow-hidden   md:flex gap-10   py-2  
           rounded-xl"
            >
              <div
                className="hero bg-cover rounded-lg"
                style={{
                  backgroundImage:
                    "url(https://wdtprintme.wpengine.com/wp-content/uploads/2023/08/Contact-form-image.jpg)",
                }}
              > 
             
                <div
                  className="lg:bg-gradient-to-t bg-gradient-to-b  opacity-30   
      bg-opacity-20 hero-overlay from-[#9080eb] rounded-b-2xl to-gray-700 shadow-2xl "
                >

{/* <img src="https://wdtprintme.wpengine.com/wp-content/uploads/2023/08/Contact-form-image.jpg" alt="" /> */}
                </div>
                
              </div>

              <div className="space-y-4  lg:w-1/2 md:text-left text-center mx-2 my-auto">
                <h2 className="text-3xl font-bold">Contact Us</h2>{" "}
                <p className=" ">
                  Praesent eget viverra ipsum. Duis ultricies rhoncus tempor.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Cras eget nulla sagittis, congue nibh ut, imperdiet nibh.
                </p>
                <div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
