// }
const ServiceProviderCard = ({ service }) => {
  return (
    <>
      <div className="card relative h-36  w-36 hover:rotate-6  rounded-lg bg-base-400 transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform">
        <div
          className="group relative flex h-full w-full select-none items-center justify-center rounded-lg border
         border-neutral-900  font-light text-slate-300"
        >
          <div className="duration-600 absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#17225e] to-[#f2f0ff] opacity-0 blur transition group-hover:opacity-75" />
          <span className="text-md bg-gradient-to-t from-neutral-400 to-white bg-clip-text font-bold text-transparent">
            <img
              className="w-full rounded-lg"
              src={service?.serviceProviderPhoto}
              alt=""
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default ServiceProviderCard;
