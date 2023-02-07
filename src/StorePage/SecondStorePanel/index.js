import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./SecondStorePanel.css";

function SecondStorePanel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://assets2.razerzone.com/images/pnx.assets/8e59bf4756003c288c33ed287d3371bc/1920x400-(3).jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="maincaption">
            <h3 className="captionskin">RAZER LAPTOP SKIN</h3>
            <p className="noteskin">
              Crafted with customized 3M™ cast vinyl for extreme durability and
              fused with cutting-edge adhesive technologies for an ultra-precise
              fit, our skins are decked out in an array of striking designs to
              express your personal style.
            </p>
            <a
              href="/gaming-laptops/skins/select-your-laptop"
              className="linkskin"
              target=""
              aria-label="choose your style - razer laptop skins"
              data-gtm-promotion-viewed="true"
            >
              Choose Your Style
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://assets2.razerzone.com/images/pnx.assets/3ab06c5a17df1ec96d6616f360e65e43/razer-refurbished-laptops_desktop_1920x400.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="maincaption">
            <h3 className="captionskin">
              RAZER CERTIFIED REFURBISHED PRODUCTS
            </h3>
            <p className="noteskin">
              Reborn and battle-ready, our restored products are
              indistinguishable from their brand-new counterparts and come
              outfitted with special savings that are second to none.
            </p>
            <a
              href="./store/refurbished"
              target=""
              aria-label="shop all refurbished products - razer certified refurbished products"
              className="linkskin"
              data-gtm-promotion-viewed="true"
            >
              Shop All Refurbished Products
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SecondStorePanel;
