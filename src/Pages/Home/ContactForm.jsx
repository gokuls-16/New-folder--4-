import { Link } from "react-router-dom";
const ContactForm = () => {
  return (
    <div>
      <div className="max-w-full lg:ms-auto mx-auto text-center ">
        <div className="py-16  rounded-md ">
          <form className="" method="POST">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none
                 focus:border-blue-700 "
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile *"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
              />
              <div className="md:col-span-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                  className="w-full border border-gray-200 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                />
              </div>

              <div className="md:col-span-2">
                <textarea
                  name="message"
                  rows="5"
                  cols=""
                  placeholder="Additional Massage *"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <Link
                  to="/"
                  className="py-3 btn text-base font-medium rounded text-white bg-primary w-full hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
