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

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Searchbar isOpen={isOpen} toggle={toggle} />
      <Notification />
      <Homepages {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
      <Bannerpages {...homeObjFour} />
      <Bannerpages {...homeObjFive} />
      <Footer />
    </>
  );
};

export default Home;
