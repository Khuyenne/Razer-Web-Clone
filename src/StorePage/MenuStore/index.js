import React from "react";
import {
  MenuContainer,
  MenuMain,
  MenuNavList,
  MenuHeading,
  NavItems,
  MenuLinks,
  MenuNavRowTop,
  MenuSide,
  MenuText1,
  MenuText2,
  SideLink,
  IconArrow,
} from "./MenuElements";

const MenuStore = () => {
  return (
    <MenuContainer>
      <MenuMain>
        <MenuNavList>
          <NavItems>
            <img
              src="/storepage/icon/blade-17-2022.png"
              alt="laptop"
              width={100}
              height={75}
            />
            <MenuLinks>Laptops</MenuLinks>
          </NavItems>

          <NavItems>
            <img
              src="/storepage/icon/components_icon.png"
              alt="components"
              width={94}
              height={75}
            />
            <MenuLinks>Components</MenuLinks>
          </NavItems>

          <NavItems>
            <img
              src="/storepage/icon/basilisk_2x.png"
              alt="mouse"
              width={45}
              height={75}
            />
            <MenuLinks>Mice</MenuLinks>
          </NavItems>

          <NavItems>
            <img
              src="/storepage/icon/tenkeyless_2x.png"
              alt="keyboard"
              width={84}
              height={75}
            />
            <MenuLinks>Keyboards</MenuLinks>
          </NavItems>

          <NavItems>
            <img
              src="/storepage/icon/audio_icon.png"
              alt="audio"
              width={84}
              height={75}
            />
            <MenuLinks>Audio</MenuLinks>
          </NavItems>

          <NavItems>
            <img
              src="/storepage/icon/streaming_icon.png"
              alt="streaming"
              width={59}
              height={75}
            />
            <MenuLinks>Streaming</MenuLinks>
          </NavItems>

          <NavItems>
            <img
              src="/storepage/icon/chair-front-bright_2x.png"
              alt="chair"
              width={40}
              height={75}
            />
            <MenuLinks>Chairs</MenuLinks>
          </NavItems>

          <NavItems>
            <img
              src="/storepage/icon/wolverine_2x.png"
              alt="console"
              width={72}
              height={75}
            />
            <MenuLinks>Console</MenuLinks>
          </NavItems>

          <NavItems>
            <img
              src="/storepage/icon/kishi_2x.png"
              alt="mobbile"
              width={93}
              height={75}
            />
            <MenuLinks>Mobile</MenuLinks>
          </NavItems>

          <NavItems>
            <img
              src="/storepage/icon/rogue-15-chromatic.png"
              alt="gear"
              width={53}
              height={75}
            />
            <MenuLinks>Gear</MenuLinks>
          </NavItems>
        </MenuNavList>
        <MenuNavRowTop>
          <MenuHeading>
            <MenuText1>THE LATEST AND GREATEST GAMING GEAR </MenuText1>
            <MenuText2>RAZE MICE, KEYBOARDS, HEADSETS, LAPTOP & MORE</MenuText2>
          </MenuHeading>
          <MenuSide>
            <img
              src="https:////assets2.razerzone.com/images/pnx.assets/8a4cf27b0557ec77704bd4de1d471a17/razerstore-icon.svg"
              alt="store"
              width={24}
              height={30}
            />
            <SideLink>
              Find a RazerStore near you <IconArrow />
            </SideLink>
          </MenuSide>
        </MenuNavRowTop>
      </MenuMain>
    </MenuContainer>
  );
};

export default MenuStore;
