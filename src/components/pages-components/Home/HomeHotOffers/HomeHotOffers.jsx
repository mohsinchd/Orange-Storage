import React from "react";
import Container from "../../../shared-components/container/Container";

const HomeHotOffers = () => {
  return (
    <Container>
      <p className="text-center">
        Orange® has the storage space to meet your needs. Each storage facility
        has a unique variety of sizes to fit their local customer's needs.
        Choosing the right storage unit size can be challenging. Here's a quick
        breakdown of each room by size category.
      </p>
      <div className="row gx-5 mt-5">
        <div className="col-md-4">
          <div className="card h-100">
            <img
              src="/images/unit-small.webp"
              className="card-img-top"
              alt="unit-small"
              style={{
                height: 200,
              }}
            />
            <div className="card-body bg-light text-center p-4">
              <h5 className="card-title">Small Storage Units</h5>
              <h6>Range in size from 5 x 5 up to 5 x10</h6>
              <p className="card-text">
                Recommend storing miscellaneaous items from around the house,
                dorm, or your extracurricular gear (fishing gear, skis, bikes,
                etc.).
              </p>
              <h6>0 – 50 sq ft.</h6>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img
              src="/images/unit-medium.webp"
              className="card-img-top"
              alt="unit-medium"
              style={{
                height: 200,
              }}
            />
            <div className="card-body bg-light text-center p-4">
              <h5 className="card-title">Medium Storage Units</h5>
              <h6>Range in size from 5 x 15 up to 10 x15</h6>
              <p className="card-text">
                Recommend storing items from a smaller home, apartment, while
                you're remodeling, or downsizing.
              </p>
              <h6>51 – 150 sq ft.</h6>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <img
              src="/images/unit-large.webp"
              className="card-img-top"
              alt="unit-large"
              style={{
                height: 200,
              }}
            />
            <div className="card-body bg-light text-center p-4">
              <h5 className="card-title">Large Storage Units</h5>
              <h6>Range in size from 10 x 20 and up</h6>
              <p className="card-text">
                Recommend storing an entire home's items if packed properly.
              </p>
              <h6>151 + sq ft.</h6>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeHotOffers;
