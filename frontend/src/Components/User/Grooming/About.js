import React from "react";
import "./About.css";

function ServiceSection() {
  return (
    <div className="container">
      <h1 className="center-heading mt-5">About</h1>
      <section className="responsive-section mt-5">
        <div className="responsive-section-left">
          <img src="../../../../Images/HERO2.jpg" alt="your-image-alt-text" />
        </div>
        <div className="responsive-section-right">
          <p>
            Welcome to our Grooming Service, where we provide professional and
            compassionate grooming services for your furry friends. Our friends.
            Our experienced grooming team is dedicated to making your pet look
            and feel their best. We believe that regular grooming is for a pet s
            overall health and well-being. Our state-of-the-art grooming
            facilities are equipped with the latest tools and equipment to
            ensure a safe and comfortable grooming experience for your pet. We
            offer a range of services, including bathing, trimming, brushing,
            and more, to help keep your pet s coat healthy and shiny.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ServiceSection;
