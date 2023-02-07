import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container } from "react-bootstrap";
import { SPanelContainer } from "./StorePanelElements";
import "./StorePanelStyle.css";

const StorePanel = () => {
  return (
    <SPanelContainer>
      <Container>
        <div>
          <h2 className="header">ONLY AT RAZER.COM</h2>
          <div className="subheader text-white">
            DISCOVER EXCLUSIVE GEAR AND SERVICES FOUND NOWHERE ELSE
          </div>
        </div>
      </Container>
    </SPanelContainer>
  );
};

export default StorePanel;
