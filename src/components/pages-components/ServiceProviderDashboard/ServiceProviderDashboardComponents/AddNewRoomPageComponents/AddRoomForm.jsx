import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { createRooms } from "../../../../actions/roomsActions";
import { MdDelete } from "react-icons/md";

const AddRoomForm = ({ id }) => {
  const [formFields, setFormFields] = useState([
    {
      storage_facility_ids: id,
      name: "",
      size: 0,
      per_unit_price: 0,
      free_space: 0,
      occupied_space: 0,
      storage_unit_type: {},
      description: "",
      is_occupied: false,
      is_available: false,
    },
  ]);

  const dispatch = useDispatch();

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const isAvailableChangeHandler = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = !data[index].is_available;
    setFormFields(data);
  };

  const storageTypeTitleHandler = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = {
      ...data[index].storage_unit_type,
      title: event.target.value,
    };
    setFormFields(data);
  };

  const storageTypeDescriptionHandler = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = {
      ...data[index].storage_unit_type,
      description: event.target.value,
    };
    setFormFields(data);
  };

  const addFieldsHandler = () => {
    let fields = {
      storage_facility_ids: id,
      name: "",
      size: 0,
      per_unit_price: 0,
      storage_unit_type: {},
      description: "",
      free_space: 0,
      occupied_space: 0,
    };

    setFormFields([...formFields, fields]);
  };

  const removeFieldsHandler = (id) => {
    setFormFields(formFields.filter((f, index) => index !== id));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    formFields.forEach((item) => {
      item.size = Number(item.size);
      item.per_unit_price = Number(item.per_unit_price);
    });
    dispatch(createRooms(id, formFields));
  };

  return (
    <>
      <form>
        <ul className="list-group list-group-flush">
          {formFields.map((field, index) => (
            <li
              key={index}
              className="list-group-item py-4 border-bottom border-dark"
            >
              <div className="row">
                <div className="col-md-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={field.name}
                    className="form-control"
                    placeholder="Unit Name"
                    onChange={(event) => handleFormChange(event, index)}
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="size">Size</label>
                  {/* <input
                type="number"
                name="size"
                id="size"
                value={field.size}
                className="form-control"
                placeholder="Unit Size"
                min={0}
                onChange={(event) => handleFormChange(event, index)}
              /> */}
                  <select
                    required
                    class="form-select"
                    id="size"
                    name="size"
                    onChange={(event) => handleFormChange(event, index)}
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
                <div className="col-md-2">
                  <label htmlFor="per_unit_price">Per Unit Price</label>
                  <input
                    type="number"
                    name="per_unit_price"
                    id="per_unit_price"
                    value={field.per_unit_price}
                    className="form-control"
                    placeholder="Per Unit Price"
                    min={0}
                    onChange={(event) => handleFormChange(event, index)}
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="is_available">Is Available?</label>
                  <div className="form-check text-center">
                    <input
                      type="checkbox"
                      name="is_available"
                      id="is_available"
                      value={field.is_available}
                      style={{
                        padding: 13,
                      }}
                      className="form-check-input"
                      onChange={(event) =>
                        isAvailableChangeHandler(event, index)
                      }
                    />
                  </div>
                </div>

                <div className="col-md-2">
                  <button
                    type="button"
                    className="border border-0 bg-white rounded mt-4 ms-2"
                    onClick={() => removeFieldsHandler(index)}
                  >
                    <MdDelete size={30} className="text-danger" />
                  </button>
                </div>

                <div className="col-md-4">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    onChange={(event) => handleFormChange(event, index)}
                    placeholder="Write the description of the Storage Unit"
                    className="form-control"
                  ></textarea>
                </div>

                <div className="col-md-2">
                  <label htmlFor="storage_unit_type">Storage Unit Type</label>
                  <select
                    required
                    class="form-select"
                    id="storage_unit_type"
                    name="storage_unit_type"
                    onChange={(event) => storageTypeTitleHandler(event, index)}
                  >
                    <option selected>Choose Type</option>
                    <option value="indoor_storage">Indoor Storage</option>
                    <option value="outdoor">Outdoor Storage</option>
                    <option value="climate_control">Climate Control</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="storage_unit_type">Type Description</label>
                  <textarea
                    onChange={(event) =>
                      storageTypeDescriptionHandler(event, index)
                    }
                    name="storage_unit_type"
                    id="storage_unit_type"
                    className="form-control"
                  ></textarea>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="border border-0 p-2 bg-orange text-light rounded mt-3"
          onClick={addFieldsHandler}
        >
          Add More Unit
        </button>
        <div className="text-center">
          <button
            className="border border-0 p-2 bg-orange text-light rounded mt-2"
            type="submit"
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AddRoomForm;
