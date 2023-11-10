import React, { useEffect } from "react";
import ServiceProviderDetailsUpdateForm from "./ServiceProviderDetailsUpdateForm";
import Spinner from "../../../shared-components/Spinner/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { UPDATE_SERVICE_PROVIDER_CLEAR } from "../../../constants/serviceProviderConstants";

const ServiceProviderDetailsUpdate = () => {
  const { serviceProvider, loading: allServiceProviderLoading } = useSelector(
    (state) => state.getServiceProvider
  );
  const {
    serviceProvider: updatedServiceProvider,
    loading,
    error,
  } = useSelector((state) => state.updateServiceProvider);

  const dispatch = useDispatch();

  useEffect(() => {
    if (updatedServiceProvider) {
      toast.success("Information Updated Successfully");
      dispatch({ type: UPDATE_SERVICE_PROVIDER_CLEAR });
    }
    if (error) {
      toast.error("Something went wrong while updation.");
      dispatch({ type: UPDATE_SERVICE_PROVIDER_CLEAR });
    }
  }, [updatedServiceProvider, error]);

  return (
    <div className="py-5">
      <div className="container">
        <div className="mt-3">
          {loading || allServiceProviderLoading ? (
            <Spinner />
          ) : (
            <div className="card authWidth w-75 m-auto">
              <div className="card-body">
                <ServiceProviderDetailsUpdateForm
                  serviceProvider={serviceProvider}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderDetailsUpdate;
