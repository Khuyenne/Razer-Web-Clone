import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { CarouH3, CarouP } from "./BannerStoreElements";

const BannerStore = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets2.razerzone.com/images/pnx.assets/086e8ebad61146b379e25817618259c1/1920x400_nyng.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <CarouH3>NEW YEAR'S SPECIALS</CarouH3>
          <CarouP>Ready Up For 2023</CarouP>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets2.razerzone.com/images/pnx.assets/d90c20bd9a4df3f52933b15e89306f08/1920x400-(6).jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <CarouH3>RAZERSTORE REWARDS</CarouH3>
          <CarouP>Get $10 Off* Your Next Purchase</CarouP>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerStore;
