import React from "react";

const FooterDetails = () => {
  return (
    <div className="mt-5 bg-light p-3">
      <h5>
        Choose Orange Storages as Your Storage Place in New York City, New York,
        10035
      </h5>
      <p>
        Conveniently located at 220 E 117th St, U-Rent Storage is part of the
        Orange Storages Self-Storage Affiliate Network. Our storage affiliates
        are independently owned and run, providing our customers with additional
        storage options. Each facility is unique to its local market and
        offerings.
      </p>
      <h5 className="my-3">Small, Medium or Large Units Available</h5>
      <p>
        This facility offers a unique variety of unit sizes to fit your needs.
        Need help choosing the right size? View our Self-Storage Size Guide for
        additional help.
      </p>
      <h5>Additional Amenities:</h5>
      <p>
        {" "}
        <span className="fw-bold">Climate Controlled Storage:</span> This
        facility keeps temperatures between 65 to 85 degrees year-round
        depending on the system to protect your items against temperature and
        humidity.
      </p>
    </div>
  );
};

export default FooterDetails;
