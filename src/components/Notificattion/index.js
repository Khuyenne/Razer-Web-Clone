import React from "react";
import { NotiContainer, NotiAlert } from "./NotiElements";

const Notification = () => {
  return (
    <NotiContainer>
      <NotiAlert>
        All orders over US$49 will enjoy free standard shipping to the United
        States.
      </NotiAlert>
    </NotiContainer>
  );
};

export default Notification;
