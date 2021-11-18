import React, { Component } from "react";
import Korean1 from "../images/korean-food-1.jpg";
import Korean2 from "../images/korean-food-2.jpg";
import Korean3 from "../images/korean-food-3.jpg";

class HeaderSlide extends Component {
  componentDidMount() {
    window
      .$(".pogoSlider")
      .pogoSlider({
        pauseOnHover: false,
      })
      .data("plugin_pogoSlider");
  }

  render() {
    return (
      <div className="slider-area" id="m-main">
        <div className="pogoSlider">
          <div
            className="pogoSlider-slide"
            data-transition="fade"
            data-duration="1500"
            style={{
              backgroundImage: `url(${Korean1})`,
              backgroundPosition: "0px 0px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
            }}
          >
            <h2
              className="pogoSlider-slide-element"
              data-in="slideDown"
              data-out="flipX"
              data-duration="700"
            >
              Welcome to
            </h2>
            <h1
              className="pogoSlider-slide-element"
              data-in="expand"
              data-out="flipX"
              data-duration="1500"
            >
              MK taste
            </h1>
          </div>
          <div
            className="pogoSlider-slide"
            data-transition="fade"
            data-duration="1500"
            style={{
              backgroundImage: `url(${Korean2})`,
              backgroundPosition: "0px 0px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
            }}
          >
            <h2
              className="pogoSlider-slide-element"
              data-in="slideDown"
              data-out="flipX"
              data-duration="700"
            >
              Our menus
            </h2>
            <h1
              className="pogoSlider-slide-element"
              data-in="expand"
              data-out="flipX"
              data-duration="1500"
            >
              See What's
              <span> new </span>
              today
            </h1>
          </div>
          <div
            className="pogoSlider-slide"
            data-transition="fade"
            data-duration="1500"
            style={{
              backgroundImage: `url(${Korean3})`,
              backgroundPosition: "0px 0px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
            }}
          >
            <h2
              className="pogoSlider-slide-element"
              data-in="slideDown"
              data-out="flipX"
              data-duration="700"
            >
              Get ready
            </h2>
            <h1
              className="pogoSlider-slide-element"
              data-in="expand"
              data-out="flipX"
              data-duration="1500"
            >
              to
              <span> Join </span>
              with us
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderSlide;
