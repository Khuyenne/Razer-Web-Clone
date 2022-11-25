import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SideBarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="pc" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="console" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="mobile" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="lifestyle" onClick={toggle}>
            Sign up
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Sign up
          </SidebarLink>
          <SidebarLink to="community" onClick={toggle}>
            Sign up
          </SidebarLink>
          <SidebarLink to="support" onClick={toggle}>
            Sign up
          </SidebarLink>
          <SidebarLink to="store" onClick={toggle}>
            Sign up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute>Way a minute</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default Sidebar;
