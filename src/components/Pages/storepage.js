import React from "react";
import Navbar from "../Navbar";
import Notification from "../Notificattion";
import MenuStore from "../../StorePage/MenuStore";

const StorePage = () => {
  return (
    <>
      <Navbar />
      <Notification />
      <MenuStore />
    </>
  );
};

export default StorePage;
