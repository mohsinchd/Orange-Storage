import React from "react";
import Container from "../../../shared-components/container/Container";
import dummyClients from "../../../../dummyClients";
import ClientsTestimonialsCards from "./ClientsTestimonialsCards/ClientsTestimonialsCards";

const HomeClientsTestimonials = () => {
  return (
    <Container>
      <div className="row">
        {dummyClients.map((client) => (
          <div key={client.id} className="col-md-3">
            <ClientsTestimonialsCards client={client} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HomeClientsTestimonials;
