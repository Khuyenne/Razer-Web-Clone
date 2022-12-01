import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../SideBar";
import Notification from "../Notificattion";
import Info from "../Info";
import { homeObjOne, homeObjTwo } from "../Info/Data";

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
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
    </>
  );
};

export default Home;
