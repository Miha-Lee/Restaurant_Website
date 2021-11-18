import React, { Component } from "react";
import Loin from "../images/loin.jpg";
import Skirt from "../images/outside_skirt.jpg";
import Rib from "../images/short_rib.jpg";
import Pork_belly from "../images/pork_belly.jpg";
import Sundae from "../images/Sundaegukbap.jpg";
import Ttukbae from "../images/Ttukbae.jpg";
import Stew from "../images/Kimchi_stew.jpg";
import Chicken from "../images/chicken_soup.jpg";
import Banquet from "../images/Banquet_noodles.jpg";
import Cold from "../images/Cold_noodle.jpg";
import Spicy from "../images/spicy_noodle.jpg";
import Noodle_Soup from "../images/Noodle_Soup.jpg";
import Soybean from "../images/Rice_Black_Soybean_Sauce.jpg";
import Cheese from "../images/Cheese_Bibimbap.jpg";
import Stir from "../images/Stir_fried_Pork.jpg";
import Fried from "../images/fried_rice.jpg";
import Milkis from "../images/Milkis.jpg";
import Banana from "../images/Banana Flavored Milk.jpg";
import Grape from "../images/Grape Juice.jpg";
import Peach from "../images/Peach Juice.jpg";
import $ from "jquery";

export class Menu extends Component {
  componentDidMount() {
    var $grid = window.$(".carty").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
    });

    $(".masonry_section").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });

    $(".masonry_section button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    });
  }

  render() {
    return (
      <div className="menu-section" id="m-menu">
        <div className="container">
          <div
            className="about-title"
            style={{ marginBottom: "50px", marginTop: "0px" }}
          >
            <p className="top-title">
              <span className="discover" style={{ fontSize: "16px" }}>
                Our Menu
              </span>
            </p>
            <h3 className="title" style={{ fontSize: "50px" }}>
              Popular Dishes
            </h3>
          </div>
          <div className="row">
            <div className="masonry_section">
              <button className="active" data-filter="*">
                all categories
              </button>
              <button data-filter=".cat1">bbq</button>
              <button data-filter=".cat2">soup</button>
              <button data-filter=".cat3">noodle</button>
              <button data-filter=".cat4">rice</button>
              <button data-filter=".cat5">beverage</button>
            </div>
          </div>
          <div className="carty">
            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat1">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Loin} alt="loin" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">bbq</span>
                  </div>
                  <h3 className="cart_title">Loin</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$25.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat1">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Skirt} alt="Outside_Skirt" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">bbq</span>
                  </div>
                  <h3 className="cart_title">Outside Skirt</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$30.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat1">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Rib} alt="Short_Rib" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">bbq</span>
                  </div>
                  <h3 className="cart_title">Short Rib</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$24.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat1">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Pork_belly} alt="pork_belly" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">bbq</span>
                  </div>
                  <h3 className="cart_title">Pork Belly</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$10.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat2">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Sundae} alt="Sundaegukbap" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">soup</span>
                  </div>
                  <h3 className="cart_title">Sundaegukbap</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$5.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat2">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Ttukbae} alt="Ttukbaegi_Bulgogi" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">soup</span>
                  </div>
                  <h3 className="cart_title">Ttukbaegi Bulgogi</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$7.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat2">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Stew} alt="Kimchi Stew" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">soup</span>
                  </div>
                  <h3 className="cart_title">Kimchi stew</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$7.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat2">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Chicken} alt="Chicken Soup" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">soup</span>
                  </div>
                  <h3 className="cart_title">Korean Chicken Soup</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$12.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat3">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Banquet} alt="Banquet Noodles" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">noodle</span>
                  </div>
                  <h3 className="cart_title">Banquet Noodles</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$3.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat3">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Cold} alt="Cold Noodles" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">noodle</span>
                  </div>
                  <h3 className="cart_title">Cold Noodles</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$11.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat3">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Spicy} alt="Spicy Noodles" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">noodle</span>
                  </div>
                  <h3 className="cart_title">Spicy Noodles</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$3.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat3">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Noodle_Soup} alt="Noodle Soup" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">noodle</span>
                  </div>
                  <h3 className="cart_title">Noodle Soup</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$5.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat4">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Soybean} alt="Rice with Black Soybean Sauce" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">rice</span>
                  </div>
                  <h3 className="cart_title">Rice with Black Soybean Sauce</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$6.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat4">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Cheese} alt="Cheese_Bibimbap" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">rice</span>
                  </div>
                  <h3 className="cart_title">Cheese Bibimbap</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$3.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat4">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Stir} alt="Stir-fried Pork" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">rice</span>
                  </div>
                  <h3 className="cart_title">Stir-fried Pork</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$8.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat4">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Fried} alt="Fried Rice" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">rice</span>
                  </div>
                  <h3 className="cart_title">Fried Rice</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$3.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat5">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Milkis} alt="Milkis" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">beverage</span>
                  </div>
                  <h3 className="cart_title">Milkis</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$2.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat5">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Banana} alt="Banana Flavored Milk" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">beverage</span>
                  </div>
                  <h3 className="cart_title">Banana Flavored Milk</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$1.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat5">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Grape} alt="Grape Juice" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">beverage</span>
                  </div>
                  <h3 className="cart_title">Grape Juice</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$1.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="margin-b30 m-col-lg-4 m-col-md-6 m-col-sm-6 grid-item cat5">
              <div className="single_cart">
                <div className="thumb">
                  <a href="/#" className="image">
                    <img src={Peach} alt="Peach Juice" />
                  </a>
                </div>
                <div className="content">
                  <div className="star-section">
                    <span className="cat">beverage</span>
                  </div>
                  <h3 className="cart_title">Peach Juice</h3>
                  <div className="price-section">
                    <span>Price -</span>
                    <span>$1.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
