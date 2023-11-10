import React from "react";

const IndoorStorageHeading = ({ product, storageType }) => {
  return (
    <div className="d-flex row">
      <div className="col-2">
        <img src={product.image} className="img-fluid rounded" alt="indoor" />
      </div>
      <div className="col-10">
        <h5>{storageType.title.toUpperCase()}</h5>
        <p>{storageType.description}</p>
      </div>
    </div>
  );
};

export default IndoorStorageHeading;
