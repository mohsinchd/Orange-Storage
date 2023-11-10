import React from "react";

const ClientsTestimonialsCards = ({ client }) => {
  return (
    <div className="card text-center h-100">
      <div className="card-body">
        <img
          src={client.profilePic}
          alt={client.name}
          className="img-fluid mb-3 rounded-circle w-50"
        />
        <h3>{client.name}</h3>
        <p>{client.description}</p>
      </div>
    </div>
  );
};

export default ClientsTestimonialsCards;
