import React, { useState } from "react";
import Navbar from "../Navbar";
import Searchbar from "../Searchbar";
import Notification from "../Notificattion";
import MenuStore from "../../StorePage/MenuStore";
<<<<<<< Updated upstream
=======
import NewProduct from "../../StorePage/NewProduct";
import BannerStore from "../../StorePage/BannerStore";
import StorePanel from "../../StorePage/StorePanel";
import StoreEffect from "../../StorePage/StoreEffect";
import SecondStorePanel from "../../StorePage/SecondStorePanel";
import MultiPanel from "../../StorePage/MultiPanel";
import Footer from "../Footer";
import WhyBuy from "../../StorePage/WhyBuy";
>>>>>>> Stashed changes

const StorePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar />
      <Searchbar isOpen={isOpen} toggle={toggle} />
      <Notification />
      <MenuStore />
<<<<<<< Updated upstream
=======
      <NewProduct />
      <BannerStore />
      <StorePanel />
      <StoreEffect />
      <SecondStorePanel />
      <MultiPanel />
      <WhyBuy />
      <Footer />
>>>>>>> Stashed changes
    </>
  );
};

export default StorePage;
