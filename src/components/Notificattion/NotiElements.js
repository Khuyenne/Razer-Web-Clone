import styled from "styled-components";

export const NotiContainer = styled.div`
  background-color: #555555;
  display: flex;
  align-items: center;
  color: #999999;
  justify-content: center;
  line-height: 20px;
  margin: 0px;
  @media screen and (max-width: 768px) {
    line-height: 10px;
  }
`;

export const NotiAlert = styled.p`
  color: #eeeeee;
  margin: 20px;
  text-align: center;
  font-size: 15px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
