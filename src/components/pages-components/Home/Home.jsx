import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../../shared-components/container/Container";
import HomeCard from "./HomeCard/HomeCard";
import TopCards from "./HomeTopCards/TopCards";
import WelcomeOrange from "./WelcomeOrange/WelcomeOrange";
import WhyOrange from "./WhyOrange/WhyOrange";
import HomeHotOffers from "./HomeHotOffers/HomeHotOffers";
import HomeClientsTestimonials from "./HomeClientsTestimonials/HomeClientsTestimonials";

import "./Home.css";

const Home = () => {
  const { user } = useSelector((state) => state.userLogin);

  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.service_provider && user && user.is_provider_verified) {
      navigate("/service-provider-dashboard/analytics");
    } else if (
      user &&
      user.service_provider &&
      user &&
      !user.is_provider_verified
    ) {
      navigate("/provider-details-verification");
    }
  }, [user]);

  return (
    <>
      <section id="showcase-area">
        <div className="dark-overlay">
          <div className="showcase-content py-5">
            <Container>
              <HomeCard />
            </Container>
          </div>
        </div>
      </section>
      {/* Welcome To Orange App */}
      <section id="welcome-orange" className="p-5 ">
        <Container>
          <WelcomeOrange />
        </Container>
      </section>
      {/* Top Cards */}
      <section id="top-cards" className="pb-5">
        <Container>
          <TopCards />
        </Container>
      </section>
      {/* Why Orange app */}
      <section id="why-orange" className="py-5">
        <Container>
          <WhyOrange />
        </Container>
      </section>
      {/* Some cards */}
      <section id="some-cards" className="py-5 bg-light">
        <h1 className="text-center">
          Small. <span className="mineTextOrange">Medium.</span> Large.
        </h1>

        <HomeHotOffers />
      </section>
      {/* Client Testimonials */}
      <section id="clients" className="py-5">
        <h1 className="text-center mb-5">
          See What Our <span className="mineTextOrange">Clients</span> Says
          about us
        </h1>
        <HomeClientsTestimonials />
      </section>
    </>
  );
};

export default Home;
