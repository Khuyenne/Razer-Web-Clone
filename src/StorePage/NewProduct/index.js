import React from "react";

import {
  NewProductContainer,
  NPRow,
  NPHeading,
  NPHearder,
  NPParagraphs,
  Paragraph,
  NPMultilPanels,
  NPCardNav,
  NPul,
  NPLi,
  NPLiContent,
  NPLiBody,
  NPLiBodyHeading,
  NPLiBodyParagraphs,
  NPLiOptions,
  NPColorB,
  NPColorQuartz,
  NPCtaContainer,
  NPPrice,
  NPPriceParagraph,
  NPPriceButton,
  NPBadgeGreen,
  NPSpan1,
  NPSpan2,
  NPBadgeBlue,
} from "./NewProductElements";

const NewProduct = () => {
  return (
    <NewProductContainer>
      <NPRow>
        <NPHeading>
          <NPHearder>FRESH OFF THE LINE</NPHearder>
        </NPHeading>
        <NPParagraphs>
          <Paragraph>
            Check out our latest releases to secure the most up-to-date upgrades
            for your setup
          </Paragraph>
        </NPParagraphs>
        <NPMultilPanels>
          <NPCardNav>
            <NPul>
              <NPLi>
                <img
                  src="/storepage/card/audio_card.png"
                  alt="audio"
                  width={298}
                  height={298}
                />
                <NPLiContent>
                  <NPLiBody>
                    <NPLiBodyHeading>
                      Razer Kraken Kitty Edition V2 Pro
                    </NPLiBodyHeading>
                    <NPLiBodyParagraphs>
                      Wired RGB Headset with Interchangeable Ears
                    </NPLiBodyParagraphs>
                    <NPLiOptions>
                      <NPColorB>
                        <NPSpan1></NPSpan1>
                      </NPColorB>
                      <NPColorQuartz>
                        <NPSpan2></NPSpan2>
                      </NPColorQuartz>
                    </NPLiOptions>
                  </NPLiBody>
                  <NPCtaContainer>
                    <NPPrice>
                      <NPPriceParagraph>US$199.99</NPPriceParagraph>
                    </NPPrice>
                    <NPPriceButton>BUY</NPPriceButton>
                  </NPCtaContainer>
                </NPLiContent>
                <NPBadgeGreen>NEW</NPBadgeGreen>
              </NPLi>
              <NPLi>
                <img
                  src="/storepage/card/laptop_card.png"
                  alt="laptop"
                  width={298}
                  height={298}
                />
                <NPLiContent>
                  <NPLiBody>
                    <NPLiBodyHeading>
                      Razer Blade 14 - QHD 165Hz - GeForce RTX 3070 Ti - Mercury
                    </NPLiBodyHeading>
                    <NPLiBodyParagraphs>
                      14-inch Gaming Laptop with AMD Ryzen™ 6900HX
                    </NPLiBodyParagraphs>
                    <NPLiOptions>
                      <NPColorB>
                        <NPSpan1></NPSpan1>
                      </NPColorB>
                      <NPColorQuartz>
                        <NPSpan2></NPSpan2>
                      </NPColorQuartz>
                    </NPLiOptions>
                  </NPLiBody>
                  <NPCtaContainer>
                    <NPPrice>
                      <NPPriceParagraph>US$2.199.99</NPPriceParagraph>
                    </NPPrice>
                    <NPPriceButton>BUY</NPPriceButton>
                  </NPCtaContainer>
                </NPLiContent>
                <NPBadgeBlue>15% OFF</NPBadgeBlue>
              </NPLi>
              <NPLi>
                <img
                  src="/storepage/card/mouse_card.png"
                  alt="mouse"
                  width={298}
                  height={298}
                />
                <NPLiContent>
                  <NPLiBody>
                    <NPLiBodyHeading>Razer Naga V2 Pro</NPLiBodyHeading>
                    <NPLiBodyParagraphs>
                      MMO Wireless Gaming Mouse with HyperScroll Pro Wheel
                    </NPLiBodyParagraphs>
                  </NPLiBody>
                  <NPCtaContainer>
                    <NPPrice>
                      <NPPriceParagraph>US$199.99</NPPriceParagraph>
                    </NPPrice>
                    <NPPriceButton>BUY</NPPriceButton>
                  </NPCtaContainer>
                </NPLiContent>
                <NPBadgeGreen>NEW</NPBadgeGreen>
              </NPLi>

              <NPLi>
                <img
                  src="/storepage/card/xbox_card.png"
                  alt="xbox"
                  width={298}
                  height={298}
                />
                <NPLiContent>
                  <NPLiBody>
                    <NPLiBodyHeading>
                      Razer NWolverine V2 Pro - White
                    </NPLiBodyHeading>
                    <NPLiBodyParagraphs>
                      Wireless Pro Gaming Controller for PS5™ Consoles and PC
                    </NPLiBodyParagraphs>
                  </NPLiBody>
                  <NPCtaContainer>
                    <NPPrice>
                      <NPPriceParagraph>US$179.99</NPPriceParagraph>
                    </NPPrice>
                    <NPPriceButton>BUY</NPPriceButton>
                  </NPCtaContainer>
                </NPLiContent>
                <NPBadgeGreen>NEW</NPBadgeGreen>
              </NPLi>

              <NPLi>
                <img
                  src="/storepage/card/keyboard_card.png"
                  alt="keyboard custom"
                  width={298}
                  height={298}
                />
                <NPLiContent>
                  <NPLiBody>
                    <NPLiBodyHeading>
                      Razer DeathStalker V2 Pro Tenkeyless - Linear Optical
                      Switch - US - White
                    </NPLiBodyHeading>
                    <NPLiBodyParagraphs>
                      Wireless Low-Profile RGB Tenkeyless Optical Keyboard
                    </NPLiBodyParagraphs>
                  </NPLiBody>
                  <NPCtaContainer>
                    <NPPrice>
                      <NPPriceParagraph>US$219.99</NPPriceParagraph>
                    </NPPrice>
                    <NPPriceButton>NOTIFY ME</NPPriceButton>
                  </NPCtaContainer>
                </NPLiContent>
              </NPLi>

              <NPLi>
                <img
                  src="/storepage/card/keyboard_pink_card.png"
                  alt="keyboard huntsman"
                  width={298}
                  height={298}
                />
                <NPLiContent>
                  <NPLiBody>
                    <NPLiBodyHeading>
                      Razer Huntsman V2 Tenkeyless
                    </NPLiBodyHeading>
                    <NPLiBodyParagraphs>
                      Tenkeyless Optical Gaming Keyboard
                    </NPLiBodyParagraphs>
                  </NPLiBody>
                  <NPCtaContainer>
                    <NPPrice>
                      <NPPriceParagraph>US$159.99</NPPriceParagraph>
                    </NPPrice>
                    <NPPriceButton>BUY</NPPriceButton>
                  </NPCtaContainer>
                </NPLiContent>
              </NPLi>

              <NPLi>
                <img
                  src="/storepage/card/audio_pink_card.png"
                  alt="audio pink"
                  width={298}
                  height={298}
                />
                <NPLiContent>
                  <NPLiBody>
                    <NPLiBodyHeading>Razer BlackShark V2 X</NPLiBodyHeading>
                    <NPLiBodyParagraphs>
                      Multi-platform wired esports headset
                    </NPLiBodyParagraphs>
                  </NPLiBody>
                  <NPCtaContainer>
                    <NPPrice>
                      <NPPriceParagraph>US$59.99</NPPriceParagraph>
                    </NPPrice>
                    <NPPriceButton>BUY</NPPriceButton>
                  </NPCtaContainer>
                </NPLiContent>
              </NPLi>
            </NPul>
          </NPCardNav>
        </NPMultilPanels>
      </NPRow>
    </NewProductContainer>
  );
};

export default NewProduct;
