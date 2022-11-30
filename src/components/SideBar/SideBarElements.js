import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;

  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(AiOutlineClose)`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(0%, 60%);
  font-size: 2rem;
  color: #fff;
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 70px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const SidebarLink = styled(LinkS)`
  display: flex;
  padding: 10px;
  text-align: left;
  height: 50px;
  font-size: 1.2rem;
  margin-top: 5px;
  margin-left: 20px;
  margin-bottom: 3px;
  text-decoration: none;
  list-style: none;
  transition: 01s ease-in-out;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
export const SidebarInput = styled.input`
  border-radius: 25px;
  padding: 10px;
  margin-top: 35 px;
  margin-right: 20px;
  margin-left: 20px;
  font-size: 17px;
`;

export const Cross = styled.hr`
  height: 0;
  margin-top: 0px;
  margin-right: 30px;
  margin-left: 35px;
`;
