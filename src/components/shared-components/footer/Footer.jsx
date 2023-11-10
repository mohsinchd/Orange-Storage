import React from "react";
import Container from "../container/Container";

const Footer = () => {
  /* Thank you for choosing Orange for your transportation and logistics
  needs. Our mission is to provide you with a fast, reliable, and secure
  shipping experience, so you can focus on running your business or
  managing your personal shipments. If you have any questions or
  concerns, please don't hesitate to contact our customer support team.
  We're available 24/7 to assist you with any issues or inquiries you
  may have. Thank you for your trust in Orange. We look forward to
  serving you and helping you transport your goods with ease and
  confidence.*/

  return (
    <footer className="bg-light p-5">
      <Container>
        <p className="m-0 text-center">
          Orange Application &copy; All Rights Reserved | 2023
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
