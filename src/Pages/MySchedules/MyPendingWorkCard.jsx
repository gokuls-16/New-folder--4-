const MyPendingWorkCard = ({ pendingData, handleStatus }) => {
  const status = pendingData?.serviceStatus;
  const id = pendingData?._id;

  return (
    <div>
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="w-32 h-32 rounded-xl"
              src={pendingData?.serviceImage}
              alt="Neil image"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-lg font-medium text-secondary truncate dark:text-white">
              <h2>{pendingData?.serviceName}</h2>
              <h2>Price: {pendingData?.servicePrice} BDT</h2>
              <p> Client: {pendingData?.userEmail}</p>
              <p> Service Date: {pendingData?.serviceTakingDate}</p>
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold  dark:text-white">
            {status === "Completed" ? (
              <>
                {" "}
                <span className="font-bold text-primary">{status}</span>{" "}
              </>
            ) : (
              <>
                {status === "In Progress" ? (
                  <>
                    <button
                      onClick={() => handleStatus(status, id)}
                      className="p-4 bg-yellow-600 rounded-xl"
                    >
                      {status}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleStatus(status, id)}
                      className="p-4 bg-red-500 rounded-xl"
                    >
                      {status}
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </li>
    </div>
  );
};

export default MyPendingWorkCard;
