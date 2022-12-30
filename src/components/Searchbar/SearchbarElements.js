import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchbarContainer = styled.div`
  display: flex;
  top: 0;
  z-index: 10;
  position: absolute;
  cursor: pointer;
  width: 61%;
  height: 6%;
  background: #0d0d0d;

  top: 0;
  left: 20%;
  background: #222;

  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(AiOutlineClose)`
  display: flex;
  position: absolute;
  top: 16%;
  right: 2%;
  transform: translate(0%, 60%);
  font-size: 18px;
  color: #999;
`;
export const Icon = styled(AiOutlineSearch)`
  position: absolute;
  top: 1rem;

  background: transparent;
  color: #999;
  cursor: pointer;
  outline: none;
  font-size: 1.2rem;
`;
export const SearchbarWrapper = styled.div`
  color: #fff;
`;
export const SearchbarMenu = styled.ul``;

export const SearchbarInput = styled.input`
  overflow: visible;
  font-size: 17px;
  padding: 0 3rem;
  background: 0 0;
  border-radius: 0;
  color: #fff;
  min-height: inherit;
  border: 0;
`;
// export const Closebutton = styled.div`
//   display: flex;
//   position: absolute;
//   top: 16%;
//   right: 2%;
//   transform: translate(0%, 60%);
//   font-size: 18px;
//   color: #999;
// `;
// export const Cross = styled.hr`
//   height: 0;
//   margin-top: 0px;
//   margin-right: 30px;
//   margin-left: 35px;
// `;
