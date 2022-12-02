import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarInput,
  Cross,
} from "./SideBarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarInput
            type="text"
            placeholder="Search razer.com"
          ></SidebarInput>
          <SidebarLink to="pc" onClick={toggle}>
            PC
          </SidebarLink>
          <Cross />
          <SidebarLink to="console" onClick={toggle}>
            Console
          </SidebarLink>
          <Cross />
          <SidebarLink to="mobile" onClick={toggle}>
            Mobile
          </SidebarLink>
          <Cross />
          <SidebarLink to="lifestyle" onClick={toggle}>
            Lifestyle
          </SidebarLink>
          <Cross />
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <Cross />
          <SidebarLink to="community" onClick={toggle}>
            Community
          </SidebarLink>
          <Cross />
          <SidebarLink to="support" onClick={toggle}>
            Support
          </SidebarLink>
          <Cross />
          <SidebarLink to="store" onClick={toggle}>
            Store
          </SidebarLink>
          <Cross />
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default Sidebar;
