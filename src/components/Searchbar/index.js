import React from "react";
import {
  SearchbarContainer,
  Icon,
  CloseIcon,
  SearchbarWrapper,
  SearchbarMenu,
  SearchbarInput,
  // Closebutton,
} from "./SearchbarElements";

const Searchbar = ({ isOpen, toggle }) => {
  return (
    <SearchbarContainer isOpen={isOpen} onClick={toggle}>
      <SearchbarWrapper>
        <Icon></Icon>
        <SearchbarMenu>
          <SearchbarInput
            type="text"
            placeholder="Search razer.com"
            maxlength="50"
            minlength="1"
          ></SearchbarInput>
        </SearchbarMenu>
        {/* <Closebutton data-closable>
          <CloseIcon aria-label="Close alert" type="button" data-close />
          <span aria-hidden="true">&times;</span>
        </Closebutton> */}
        <CloseIcon />
      </SearchbarWrapper>
    </SearchbarContainer>
  );
};
export default Searchbar;
