import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import { useDispatch } from "react-redux";
import { updateRoom } from "../../../../actions/roomsActions";

const EditUnitForm = ({ room, storageId, roomId }) => {
  const [formData, setFormData] = useState({
    name: room.name,
    size: room.size,
    per_unit_price: room.per_unit_price,
    free_space: room.free_space,
    occupied_space: room.occupied_space,
    storage_unit_type: {
      title: room.storage_unit_type.title,
      description: room.storage_unit_type.description,
    },
    description: room.description,
    is_occupied: false,
    is_available: room.is_available,
  });

  const dataChangeHandler = (e) => {
    const { name, value, id } = e.target;

    if (name === "storage_unit_type") {
      if (id === "title") {
        setFormData({
          ...formData,
          storage_unit_type: {
            ...formData.storage_unit_type,
            title: value === "Choose Type" ? "" : value,
          },
        });
      } else {
        setFormData({
          ...formData,
          storage_unit_type: {
            ...formData.storage_unit_type,
            description: value,
          },
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const inputCheckHandler = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.id]: !formData.is_available,
      };
    });
  };

  // const storageTypeDescriptionHandler = (e) => {
  //   setFormData((prev) => {
  //     return {
  //       ...prev,
  //       [e.target.id]: {
  //         ...prev.storage_unit_type,
  //         description: e.target.value,
  //       },
  //     };
  //   });
  // };

  // const storageTypeTitleHandler = (e) => {
  //   setFormData((prev) => {
  //     return {
  //       ...prev.storage_unit_type,
  //       [e.target.id]: { title: e.target.value },
  //     };
  //   });
  // };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    formData.size = Number(formData.size);
    formData.free_space = Number(formData.free_space);
    formData.occupied_space = Number(formData.occupied_space);

    dispatch(updateRoom(roomId, formData));
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            className="form-control"
            placeholder="Storage Unit Name"
            onChange={dataChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Size</label>
          <select
            required
            className="form-select"
            id="size"
            name="size"
            onChange={dataChangeHandler}
          >
            <option selected>Choose size</option>
            <option value={10 * 10}>10 x 10</option>
            <option value={15 * 15}>15 x 15</option>
            <option value={20 * 20}>20 x 20</option>
            <option value={25 * 25}>25 x 25</option>
            <option value={30 * 30}>30 x 30</option>
            <option value={35 * 35}>35 x 35</option>
            <option value={40 * 40}>40 x 40</option>
            <option value={45 * 45}>45 x 45</option>
            <option value={50 * 50}>50 x 50</option>
            <option value={55 * 55}>55 x 55</option>
            <option value={60 * 60}>60 x 60</option>
            <option value={65 * 65}>65 x 65</option>
            <option value={70 * 70}>70 x 70</option>
            <option value={75 * 75}>75 x 75</option>
            <option value={80 * 80}>80 x 80</option>
            <option value={85 * 85}>85 x 85</option>
            <option value={90 * 90}>90 x 90</option>
            <option value={95 * 95}>95 x 95</option>
            <option value={100 * 100}>100 x 100</option>
          </select>
        </div>
        <div className="form-group">
          <label>Per Unit Price</label>
          <input
            type="number"
            min={0}
            name="per_unit_price"
            id="per_unit_price"
            value={formData.per_unit_price}
            className="form-control"
            placeholder="Per Unit Price"
            onChange={dataChangeHandler}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={dataChangeHandler}
            placeholder="Write the description of the Storage Unit"
            className="form-control"
            value={formData.description}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="storage_unit_type">Storage Unit Type</label>
          <select
            className="form-select"
            id="title"
            name="storage_unit_type"
            onChange={dataChangeHandler}
          >
            <option selected>Choose Type</option>
            <option value="indoor_storage">Indoor Storage</option>
            <option value="outdoor">Outdoor Storage</option>
            <option value="climate_control">Climate Control</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="storage_unit_type">Type Description</label>
          <textarea
            value={formData.storage_unit_type.description}
            onChange={dataChangeHandler}
            name="storage_unit_type"
            id="storage_unit_type"
            className="form-control"
          ></textarea>
        </div>

        <div className="form-group">
          <label>Is Available?</label>
          <div>
            <input
              type="checkbox"
              name="is_available"
              checked={formData.is_available}
              id="is_available"
              onChange={inputCheckHandler}
              className="form-check-input p-2"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-dark mt-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default EditUnitForm;
