import React from "react";
import "./WhyBuyElements.css";

const WhyBuy = () => {
  return (
    <div className="wbcomponents">
      <div className="wbcontainer">
        <h2 className="section-header">WHY BUY FROM RAZER.COM</h2>
        <div className="panel-contain" role={"list"}>
          <div className="item-1" role={"listitem"}>
            <img
              className="icon-item-1"
              src="//assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/first-dibs-icon.svg"
              alt=""
            />
            <div class="item-text">Get First Dibs</div>
            <p class="item-long-text-1">
              Razer.com is the only place where you can buy our most anticipated
              Razer gear immediately upon release.
            </p>
          </div>

          <div className="item-1" role={"listitem"}>
            <img
              class="icon-item-1"
              src="//assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/largest-array-icon.svg"
              alt=""
            />
            <div className="item-text">The Largest Array Of Razer Gear</div>
            <div className="item-long-text-1">
              As Razer's official online store, we hold a massive collection of
              products that can't be matched anywhere else.
            </div>
          </div>

          <div className="item-1" role={"listitem"}>
            <img
              class="icon-item-1"
              src="//assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/exclusives-icon.svg"
              alt=""
            />
            <div className="item-text">Exclusive Razer Gear And Swag</div>
            <div className="item-long-text-1">
              Get access to limited edition Razer gear that's only avaiable on
              Razer.com
            </div>
          </div>

          <div className="item-1" role={"listitem"}>
            <img
              class="icon-item-1"
              src="//assets2.razerzone.com/images/pnx.assets/c26dadd460db814353e32536f8f160b7/buynow-paylater-icon.svg"
              alt=""
            />
            <div className="item-text">Play Now,Pay Later</div>
            <div className="item-long-text-1">
              With our 0% installment plant, spend more time gaming with your
              sweet new gear and less time fussing over payment.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBuy;
