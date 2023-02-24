import React, { useState } from "react";

import "./FooterMobile.css";

function FooterMobile() {
  const [selected, setSelected] = useState(null);
  const event = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="wrapperF">
      <div className="accordion">
        {data.map((itemm, i) => (
          <div className="itemm">
            <div className="titleF" onClick={() => event(i)}>
              <h2 className="headingF">{itemm.question}</h2>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              <li className="liF">
                <a href="/">{itemm.answer}</a>
              </li>
              <li className="liF">
                <a href="/">{itemm.answer1}</a>
              </li>
              <li className="liF">
                <a href="/">{itemm.answer2}</a>
              </li>
              <li className="liF">
                <a href="/">{itemm.answer3}</a>
              </li>
              <li className="liF">
                <a href="/">{itemm.answer4}</a>
              </li>
              <li className="liF">
                <a href="/">{itemm.answer5}</a>
              </li>
              <li className="liF">
                <a href="/">{itemm.answer6}</a>
              </li>
              <li className="liF">
                <a href="/">{itemm.answer7}</a>
              </li>
            </div>
            <hr />
          </div>
        ))}
        <div className="bottomF">
          <div className="rowF">
            <div className="copyright">
              Copyright © 2023 Razer Inc. All rights reserved.
            </div>
            <div className="legal-term">
              <ul>
                <li className="liF1">
                  <a href="/">Site Map</a>
                </li>
                <li className="liF2">
                  <a href="/">Legal Term</a>
                </li>
                <li className="liF2">
                  <a href="/">Privacy Policy</a>
                </li>
                <li className="liF2">
                  <a href="/">Cookie Setting</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    question: "Shop",
    answer: "RazerStores",
    answer1: "RazerCafe",
    answer2: "Store Locator",
    answer3: "Purchase Programs",
    answer4: "Education",
    answer5: "Exclusives",
    answer6: "RazerStore Rewards",
    answer7: "Newsletter",
  },
  {
    question: "Explore",
    answer: "Technology",
    answer1: "Chroma RGB",
    answer2: "Concepts",
    answer3: "Esports",
    answer4: "Collabs",
  },
  {
    question: "Support",
    answer: "Get Help",
    answer1: "Registration & Warranty",
    answer2: "RazerStore Support",
    answer3: "RazerCare",
    answer4: "Manage Razer ID",
    answer5: "Support Videos",
    answer6: "Accessibility Statement",
  },
  {
    question: "Company",
    answer: "About Us",
    answer1: "Careers",
    answer2: "Press Room",
    answer3: "zVentures",
    answer4: "Contact Us",
  },
];

export default FooterMobile;
