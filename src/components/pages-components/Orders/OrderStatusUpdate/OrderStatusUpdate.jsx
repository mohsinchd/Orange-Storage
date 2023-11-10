import React, { useState } from "react";

const OrderStatusUpdate = ({ order, id, dispatch, updateOrderAdmin }) => {
  const [formData, setFormData] = useState({
    pending: order.pending,
    proccess: order.proccess,
    completed: order.completed,
  });

  return (
    <>
      <form>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={() =>
              setFormData((prev) => ({
                ...prev,
                pending: !prev.pending,
              }))
            }
            checked={formData.pending}
            id="pending"
          />
          <label className="form-check-label" htmlFor="pending">
            Pending
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={() =>
              setFormData((prev) => ({
                ...prev,
                proccess: !prev.proccess,
              }))
            }
            checked={formData.proccess}
            id="pending"
          />
          <label className="form-check-label" htmlFor="pending">
            Processing
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={() =>
              setFormData((prev) => ({
                ...prev,
                completed: !prev.completed,
              }))
            }
            checked={formData.completed}
            id="pending"
          />
          <label className="form-check-label" htmlFor="pending">
            Completed
          </label>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(updateOrderAdmin(id, formData));
          }}
          className="btn btn-dark mt-3"
        >
          Update
        </button>
      </form>
    </>
  );
};

export default OrderStatusUpdate;
