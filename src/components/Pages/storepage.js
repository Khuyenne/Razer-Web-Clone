import React from "react";
import Navbar from "../Navbar";
import Notification from "../Notificattion";
import MenuStore from "../../StorePage/MenuStore";
import NewProduct from "../../StorePage/NewProduct";

const StorePage = () => {
  return (
    <>
      <Navbar />
      <Notification />
      <MenuStore />
      <NewProduct />
    </>
  );
};

export default StorePage;
