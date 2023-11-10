import React, { useState, useEffect } from "react";
import ButtonGroupAndForm from "./ButtonGroupAndForm";
import FiltersAndStorages from "./FiltersAndStorages";
import ChooseOrangeDetails from "./ChooseOrangeDetails";
import Stepper from "../../../shared-components/Stepper/Stepper";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsStorageFacilities } from "../../../actions/usStorageFacilityActions";
import Spinner from "../../../shared-components/Spinner/Spinner";

const Storages = () => {
  const [changeView, setChangeView] = useState({
    list: true,
    map: false,
  });

  const { loading, error, storageFacilties } = useSelector(
    (state) => state.usStorageFacilities
  );

  // let paramsObj = {};
  // let storage = [];

  // const [searchParams] = useSearchParams();
  // for (const entry of searchParams.entries()) {
  //   const [param, value] = entry;
  //   if (param === "storage_type") {
  //     storage.push(value);
  //     paramsObj[param] = storage;
  //   } else {
  //     paramsObj[param] = value;
  //   }
  // }

  const dispatch = useDispatch();

  useEffect(() => {
    let paramsObj = JSON.parse(sessionStorage.getItem("us_Storage_facility"));

    dispatch(getAllUsStorageFacilities(paramsObj));
  }, []);

  return (
    <div className="container py-2">
      <Stepper step1 step2 />
      {loading ? (
        <>
          <h3>Loading your query.</h3>
        </>
      ) : (
        <>
          {storageFacilties &&
            storageFacilties.results &&
            storageFacilties.results.length > 0 && (
              <h3>
                Find a Storage Unit Near You in{" "}
                {storageFacilties.results[0].location.address}
              </h3>
            )}
          {error && <h3>{error.msg}</h3>}
        </>
      )}

      <ButtonGroupAndForm
        changeView={changeView}
        onChangeView={setChangeView}
      />

      <FiltersAndStorages view={changeView} />

      <ChooseOrangeDetails />
    </div>
  );
};

export default Storages;
