import React from "react";

const RecentUnits = () => {
  return (
    <>
      <div className="mt-3 row gx-4">
        <div className="col-6">
          <img
            src="/images/storage1.jpg"
            alt="storage1"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-6">
          <img
            src="/images/storage2.jpg"
            alt="storage2"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <div className="mt-4 row gx-4">
        <div className="col-6">
          <img
            src="/images/storage3.jpg"
            alt="storage3"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-6">
          <img
            src="/images/storage4.jpg"
            alt="storage4"
            className="img-fluid rounded"
          />
        </div>
      </div>
    </>
  );
};

export default RecentUnits;
