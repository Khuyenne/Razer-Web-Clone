import React, { useState } from "react";
import Navbar from "../Navbar";
import Searchbar from "../Searchbar";
import Notification from "../Notificattion";
import Info from "../Info";
import { homeObjThree, homeObjTwo } from "../Info/Data";
import { homeObjOne } from "../Homepages/Data";
import Homepages from "../Homepages";
import Bannerpages from "../Bannerpages";
import { homeObjFour, homeObjFive } from "../Bannerpages/Data";
import Footer from "../Footer";
import FooterMobile from "../FooterMobile";

// import ShoppingCart from "../ShoppingCart";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [selected, setSelected] = useState(null);
  const event = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(!selected);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Searchbar isOpen={isOpen} toggle={toggle} />
      {/* <ShoppingCart isActive={isActive} toggle={toggleCart} /> */}
      <Notification />
      <Homepages {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
      <Bannerpages {...homeObjFour} />
      <Bannerpages {...homeObjFive} />
      <Footer />
      <FooterMobile selected={selected} event={event} />
    </>
  );
};

export default Home;
