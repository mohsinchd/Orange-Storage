import React, { useState } from "react";
import { GiOrange } from "react-icons/gi";
import {
  MdDriveFileRenameOutline,
  MdPhone,
  MdFax,
  MdEmail,
  MdWeb,
  MdFacebook,
} from "react-icons/md";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { AiFillGoogleSquare } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { toast } from "react-toastify";
import { updateServiceProviders } from "../../../actions/serviceProviderActions";

const ServiceProviderDetailsUpdateForm = ({ serviceProvider }) => {
  const [formData, setFormData] = useState({
    name: serviceProvider.name,
    phone_number: serviceProvider.phone_number,
    fax_number: serviceProvider.fax_number,
    email: serviceProvider.email,
    website: serviceProvider.website,
    facebook: serviceProvider.facebook || "",
    instagram: serviceProvider.instagram || "",
    twitter: serviceProvider.twitter || "",
    google_buisness: serviceProvider.google_buisness || "",
  });

  const dispatch = useDispatch();

  const formDataChangeHandler = (event) => {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.id]: event.target.value,
      };
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    dispatch(updateServiceProviders(formData, serviceProvider.id));
  };

  return (
    <>
      <div className="border-bottom">
        <h1 className="text-center mineTextOrange ">
          <GiOrange />
          range
        </h1>
        <p className="lead text-uppercase text-center">
          Please fill your data carefully to update your information.
        </p>
      </div>
      <form className="mt-2" onSubmit={submitFormHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <div className="input-group">
            <span className="input-group-text">
              <MdDriveFileRenameOutline />
            </span>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              placeholder="Enter Name"
              onChange={formDataChangeHandler}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone_number">Phone Number</label>
          <div className="input-group">
            <span className="input-group-text">
              <MdPhone />
            </span>
            <input
              type="text"
              value={formData.phone_number}
              className="form-control"
              id="phone_number"
              placeholder="Enter Phone Number"
              onChange={formDataChangeHandler}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="fax_number">Fax Number</label>
          <div className="input-group">
            <span className="input-group-text">
              <MdFax />
            </span>
            <input
              type="text"
              value={formData.fax_number}
              className="form-control"
              id="fax_number"
              placeholder="Enter Fax Number"
              onChange={formDataChangeHandler}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <div className="input-group">
            <span className="input-group-text">
              <MdEmail />
            </span>
            <input
              type="email"
              value={formData.email}
              className="form-control"
              id="email"
              placeholder="Enter Email"
              onChange={formDataChangeHandler}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <div className="input-group">
            <span className="input-group-text">
              <MdWeb />
            </span>
            <input
              type="text"
              value={formData.website}
              className="form-control"
              id="website"
              placeholder="Enter Website URL"
              onChange={formDataChangeHandler}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="facebook">Facebook</label>
          <div className="input-group">
            <span className="input-group-text">
              <MdFacebook />
            </span>
            <input
              type="text"
              value={formData.facebook}
              className="form-control"
              id="facebook"
              placeholder="Enter Facebook URL"
              onChange={formDataChangeHandler}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="instagram">Instagram</label>
          <div className="input-group">
            <span className="input-group-text">
              <FiInstagram />
            </span>
            <input
              type="text"
              value={formData.instagram}
              className="form-control"
              id="instagram"
              placeholder="Enter Instagram URL"
              onChange={formDataChangeHandler}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="twitter">Twitter</label>
          <div className="input-group">
            <span className="input-group-text">
              <FiTwitter />
            </span>
            <input
              type="text"
              value={formData.twitter}
              className="form-control"
              id="twitter"
              placeholder="Enter Twitter URL"
              onChange={formDataChangeHandler}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="google_buisness">Google Business</label>
          <div className="input-group">
            <span className="input-group-text">
              <AiFillGoogleSquare />
            </span>
            <input
              type="text"
              value={formData.google_buisness}
              className="form-control"
              id="google_buisness"
              placeholder="Enter Google Buisness URL"
              onChange={formDataChangeHandler}
            />
          </div>
        </div>
        <button className="mt-2 btn btn-dark">Update Details</button>
      </form>
    </>
  );
};

export default ServiceProviderDetailsUpdateForm;
