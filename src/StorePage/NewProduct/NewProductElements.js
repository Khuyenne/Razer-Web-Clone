import styled from "styled-components";

export const NewProductContainer = styled.div`
  background: #000000;
  margin: -4px -8px 0px -7.6px;
`;

export const NPRow = styled.div`
  line-height: 24px;
  margin: 0px 335.5px;
  padding: 40px 0px 0px;
`;

export const NPHeading = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const NPHearder = styled.h2`
  color: #eeeeee;
  font-family: RazerF5;
  font-size: 28px;
  font-weight: 700;
  line-height: 33.6px;
  text-align: left;
`;
export const NPParagraphs = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Paragraph = styled.p`
  color: #eeeeee;
  font-family: Roboto;
  font-size: 21px;
  line-height: 25.2px;
  text-align: left;
  font-weight: 400;
`;

export const NPMultilPanels = styled.div`
  margin-bottom: 1rem;
`;

export const NPCardNav = styled.div``;

export const NPul = styled.ul`
  overflow-x: scroll;

  scroll-snap-type: x proximity;
  max-width: unset;
  align-items: start;
  color: #ffffff;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 2rem;
  padding: 0;
  grid-template-rows: max-content;
  line-height: 24px;
  list-style: none;
  box-sizing: border-box;
`;

export const NPLi = styled.li`
  grid-template-rows: 298px 1fr;
  width: 18.625rem;
  min-height: 480px;
  transform: translateX(calc(min(100vw, 1920px) / 2 - 600px));
  scroll-snap-align: center;
  align-self: stretch;
  gap: 0;
  text-align: left;
  min-width: 0;
  align-content: flex-start;
  background-color: #111;
  display: grid;
  grid-auto-flow: row;
  box-sizing: border-box;
`;

export const NPLiContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 180px;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  gap: 1rem;
  background-color: #222;
  color: #ffffff;
  gap: 16px;
  line-height: 24px;

  text-align: left;
`;

export const NPLiBody = styled.div`
  color: #eeeeee;
  display: grid;
  font-size: 18px;
  gap: 16px;
  grid-template-columns: 266px;
  grid-template-rows: 50px 36.375px;
  line-height: 24px;
  text-align: left;
`;

export const NPLiBodyHeading = styled.h3`
  font-size: 1.125rem;
  line-height: 25px;
  font-weight: 400;
  margin: 0;
`;

export const NPLiBodyParagraphs = styled.p`
  text-align: left;
  font-size: 0.875rem;
  font-weight: 300;
  color: #888;
  line-height: 1.3;
`;

export const NPLiOptions = styled.ul`
  display: grid;
  gap: 0.5rem;
  grid-auto-flow: column;
  grid-template-columns: none;
  justify-content: flex-start;
  position: absolute;
  top: -50px;
  right: 0;
  margin: 0;
  padding: 0;
  grid-template-rows: max-content;
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  max-width: unset;
  justify-items: center;
  list-style: none;
  box-sizing: border-box;
  padding-inline-start: 40px;
`;

export const NPColorB = styled.li`
  border: 1px solid #fff;
  border-radius: 16px;
  display: inline-block;
  width: auto;
  height: auto;
  min-height: 0;
  transform: none;
  text-align: left;
  min-width: 0;
  background-color: #222;
  position: relative;
  justify-items: center;
  box-sizing: border-box;

  list-style: none;
`;
export const NPSpan1 = styled.span`
  background-color: #000;
  width: 18px;
  height: 18px;
  border-radius: 18px;
  min-height: 0;
  margin: 1px;
  position: relative;
  display: block;
  box-sizing: border-box;
`;

export const NPColorQuartz = styled.li`
  background-color: #222222;
  border-color: #ffffff;
  border-radius: 16px;
  border-style: solid;
  border-width: 1px;
  color: #eeeeee;
  font-family: Roboto;
  font-size: 18px;
  gap: 0px;
  grid-template-rows: 298px 1fr;
  line-height: 24px;
  text-align: left;
`;
export const NPSpan2 = styled.span`
  background-color: #ffc0cb;
  border-radius: 18px;
  color: #eeeeee;
  font-size: 18px;
  line-height: 24px;
  margin: 1px;
  text-align: left;
`;

export const NPCtaContainer = styled.div`
display: flex;
flex-direction: row;
align-content: flex-end;
justify-content: space-between;
align-items: flex-end;
font: normal normal bold 14px/14px Roboto;
}
`;

export const NPPrice = styled.div`
  box-sizing: border-box;
  display: block;
`;

export const NPPriceParagraph = styled.p`
  margin: 0;
  color: #eee;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
`;

export const NPPriceButton = styled.div`
  padding: 5px 10px;
  border-radius: 5px;
  color: #000;
  font-weight: 700;
  background-color: #44d62c;
  text-transform: uppercase;
`;

export const NPBadgeGreen = styled.div`
background-color: #44d62c;
font-size: 1rem;
    line-height: 1.5em;
    font-weight: 700;
    padding: 5px 1em;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 20px;
    left: -10px;
    max-width: 100%;
    color: #000;
    display: block;
    height: auto;
    justify-self: center;
    margin-bottom: 1rem;
    margin-left: 0;
    z-index: 3;
    min-width: 5.25rem;
    box-sizing: border-box;
}`;
export const NPBadgeBlue = styled.div`
background-color: #28aadc;
font-size: 1rem;
    line-height: 1.5em;
    font-weight: 700;
    padding: 5px 1em;
    position: absolute;
    text-align: center;
    top: 20px;
    left: -10px;
    max-width: 100%;
    color: #000;
    display: block;
    height: auto;
    justify-self: center;
    margin-bottom: 1rem;
    margin-left: 0;
    z-index: 3;
    min-width: 5.25rem;
    box-sizing: border-box;
}`;
