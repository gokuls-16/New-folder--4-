const DashboardHeader = ({ view }) => {
  return (
    <div>
      <div className="  ">
        <div
          className="hero min-h-[12vh]"
          style={{
            backgroundImage:
              "url(https://wdtprintme.wpengine.com/wp-content/uploads/2023/09/Breadcrumb-Bg.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content  text-center text-neutral-content">
            <div className="max-w-md">
              <h2 className="text-2xl">{view}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
