import React from "react";
import RatingStars from "../../../shared-components/RatingStars/RatingStars";

const UnitStorageReviewsTable = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">Storage Unit</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>
                <img
                  src={user.profilePic}
                  alt="user"
                  className="img-fluid rounded-circle"
                  style={{ width: 30 }}
                />
                <span> {user.name}</span>
              </td>
              <td>{user.unitName}</td>
              <td>
                <RatingStars value={user.rating} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnitStorageReviewsTable;
