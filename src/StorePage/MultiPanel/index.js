import React from "react";
import "./MultiPanelElements.css";

const MultiPanel = () => {
  return (
    <div className="mulcomponents">
      <div className="multicontainer">
        <div className="panel-container" role={"list"}>
          <div role={"listitem"} className="item1">
            <a
              href="//www.razer.com/store/rewards"
              target="_self"
              data-gtm-promotion-viewed="true"
              id="itembox1"
            >
              <img
                className="iconitem1"
                src="//assets2.razerzone.com/images/pnx.assets/fcab8716aea0f5c6a069b0b9210a1c70/razer-store-v2_razerstorerewards_500x500.jpg"
                alt=""
              />
            </a>
            <div className="item-text-1">
              <a
                href="//www.razer.com/store/rewards"
                data-gtm-promotion-viewed="true"
                className="headingtext1"
              >
                RazerStore Rewards
              </a>
            </div>
          </div>

          <div role={"listitem"} className="item2">
            <a
              href="//www.razer.com/customs"
              target="_self"
              id="itembox2"
              data-gtm-promotion-viewed="true"
            >
              <img
                class="iconitem2"
                src="//assets2.razerzone.com/images/pnx.assets/8bb73d36a73c2f69b3cffb43669c4978/500x500-copy.jpg"
                alt=""
                pnxssr_14=""
              />
            </a>
            <div className="item-text-1">
              <a
                href="//www.razer.com/customs"
                data-gtm-promotion-viewed="true"
                className="headingtext1"
              >
                RAZER
                <br />
                CUSTOMS
              </a>
            </div>
          </div>

          <div role={"listitem"} className="item1">
            <a
              href="//www.razer.com/store/programs"
              target="_self"
              id="itembox1"
              data-gtm-promotion-viewed="true"
            >
              <img
                class="iconitem1"
                src="//assets2.razerzone.com/images/pnx.assets/fcab8716aea0f5c6a069b0b9210a1c70/razer-store-v2_purchaseprograms_500x500.jpg"
                alt=""
                pnxssr_21=""
              />
            </a>
            <div class="item-text-1">
              <a
                href="//www.razer.com/store/programs"
                className="headingtext1"
                data-gtm-promotion-viewed="true"
              >
                Purchase Programs
              </a>
            </div>
          </div>

          <div role={"listitem"} className="item2">
            <a href="//www.razer.com/razercare" target="_self" pnxssr_27="">
              <img
                class="iconitem2"
                src="//assets2.razerzone.com/images/pnx.assets/fcab8716aea0f5c6a069b0b9210a1c70/razer-store-v2_razercare_500x500.jpg"
                alt=""
              />
            </a>
            <div class="item-text-1">
              <a href="//www.razer.com/razercare" className="headingtext1">
                RAZERCARE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiPanel;
