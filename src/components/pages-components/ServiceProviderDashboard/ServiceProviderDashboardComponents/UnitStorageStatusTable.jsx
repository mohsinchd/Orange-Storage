import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteStorageUnit } from "../../../actions/storageUnitActions";
import { toast } from "react-toastify";

const UnitStorageStatusTable = ({ data }) => {
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.deleteStorageUnit);

  useEffect(() => {
    if (error) {
      toast.error("Something Went Wrong");
    }
  }, [error]);

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Created At</th>
            <th scope="col">Progress</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((unit) => (
            <tr key={unit.id}>
              <td>{unit.name}</td>
              <td>{unit.created_at.substring(0, 10)}</td>
              <td>
                <div
                  className="progress mt-2"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: 5 }}
                >
                  <div
                    className="progress-bar"
                    style={{
                      width: `${
                        (unit.occupied_space / unit.total_size) * 100
                      }%`,
                      backgroundColor: "#fe7096",
                    }}
                  ></div>
                </div>
              </td>
              <td>
                <Link
                  to={`/service-provider-dashboard/analytics/${unit.id}`}
                  className="btn btn-sm btn-dark"
                >
                  View
                </Link>
              </td>
              <td>
                <Link
                  to={`/service-provider-dashboard/addUnit/${unit.id}`}
                  className="btn btn-sm btn-dark"
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-sm"
                  onClick={() => dispatch(deleteStorageUnit(unit.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnitStorageStatusTable;
