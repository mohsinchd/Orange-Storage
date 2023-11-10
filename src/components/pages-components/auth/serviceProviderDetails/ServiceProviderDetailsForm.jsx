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
import { createServiceProviders } from "../../../actions/serviceProviderActions";
import { toast } from "react-toastify";

const ServiceProviderDetailsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone_number: null,
    fax_number: null,
    email: "",
    website: null,
    facebook: null,
    instagram: null,
    twitter: null,
    google_buisness: null,
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
    if (!formData.name || !formData.email) {
      return toast.error("Name , Email  Website are the required Fields");
    }

    dispatch(createServiceProviders(formData));
  };

  return (
    <>
      <div className="border-bottom">
        <h1 className="text-center mineTextOrange ">
          <GiOrange />
          range
        </h1>
        <p className="lead text-uppercase text-center">
          Please fill all the fields to get access to your dashboard
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
              className="form-control"
              id="google_buisness"
              placeholder="Enter Google Buisness URL"
              onChange={formDataChangeHandler}
            />
          </div>
        </div>
        <button className="mt-2 btn btn-dark">Submit Form</button>
      </form>
    </>
  );
};

export default ServiceProviderDetailsForm;
