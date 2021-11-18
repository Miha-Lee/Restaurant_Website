import React from "react";
import Korean4 from "../images/korean-food-4.jpg";

const About = () => {
  return (
    <div className="about-content-wrapper" id="m-about">
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={Korean4} alt="Hansik" className="img-responsive" />
            </div>
            <div className="col-md-6">
              <div className="about-title">
                <p className="top-title">
                  <span className="discover">Discover</span>
                </p>
                <h3 className="title">Our Story</h3>
              </div>
              <p className="second-title">
                WE LOVE TO SERVE FRESH MEAlS TO ANYONE.
              </p>
              <p className="third-title">
                MK Taste is a restaurant that featuring a menu that changes
                daily with a focus on Korean foods. Our goal is to bring healthy
                Korean food and cuisine to every corner of the globe as nothing
                makes us happier than seeing people enjoy our food.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
