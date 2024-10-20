const Banner = () => {
  return (
    <div>
      <img
        className="object-cover relative rounded-t-xl w-full opacity-10"
        src="https://cdn.dribbble.com/users/1699813/screenshots/4061248/francispaper_animate.gif"
        alt=""
      />
      <h2 className="md:text-6xl md:left-96 left-32 text-2xl absolute top-48">
        WelCome To PrintMama
      </h2>
      {/* <div>
        <video
          className="object-cover overflow-hidden  min-h-screen w-full  opacity-90   -z-1 top-0  "
          src="https://wdtprintme.wpengine.com/wp-content/uploads/2023/10/Home-1-Slider-Bg-Vid.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div> */}
    </div>
  );
};

export default Banner;
