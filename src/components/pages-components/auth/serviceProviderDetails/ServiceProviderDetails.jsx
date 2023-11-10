import React, { useEffect } from "react";
import ServiceProviderDetailsForm from "./ServiceProviderDetailsForm";
import Spinner from "../../../shared-components/Spinner/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CREATE_SERVICE_PROVIDER_CLEAR } from "../../../constants/serviceProviderConstants";
import { logoutUser } from "../../../actions/userActions";

const ServiceProviderDetails = () => {
  const { loading, error, serviceProvider } = useSelector(
    (state) => state.createServiceProvider
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (serviceProvider) {
      dispatch(logoutUser(true));
      toast.success(
        "Service Provider Sign Up Successfully. Please Login to your account."
      );
      navigate("/sign-in");
      dispatch({ type: CREATE_SERVICE_PROVIDER_CLEAR });
    }

    if (error) {
      toast.error("Something went wrong.");
    }
  }, [serviceProvider, error]);

  return (
    <div className="py-5">
      <div className="container">
        <div className="mt-3">
          {loading ? (
            <Spinner />
          ) : (
            <div className="card authWidth w-75 m-auto">
              <div className="card-body">
                <ServiceProviderDetailsForm />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderDetails;
