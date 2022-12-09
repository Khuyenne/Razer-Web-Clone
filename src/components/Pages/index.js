import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../SideBar";
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
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
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
