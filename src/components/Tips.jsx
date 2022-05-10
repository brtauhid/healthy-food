import styled from "styled-components";
import icon1 from "../img/spoon.png";

const Container = styled.div`
  height: 670px;
  background-color: #6a4aa1;
`;

const TipsTitle = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;
  padding-top: 45px;
`;
const TipsContainer = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 0 100px;
`;
const TipsContent = styled.div`
  flex: 1;
`;
const SingleTipsContent = styled.div`
  display: flex;
`;
const TipsIcon = styled.img`
  width: 15%;
  height: 15%;
`;
const TipsInfo = styled.div``;

const TipsInfoTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;
const TipsInfoDescription = styled.p`
  font-size: 16px;
  font-style: italic;
  color: white;
`;

const Tips = () => {
  return (
    <Container>
      <TipsTitle>Top tips from the experts</TipsTitle>
      <>
        <TipsContainer>
          <TipsContent>
            <SingleTipsContent>
              <TipsIcon src={icon1}></TipsIcon>
              <TipsInfo>
                <TipsInfoTitle>
                  Base your meals on higher fibre starchy carbohydrates
                </TipsInfoTitle>
                <TipsInfoDescription>
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </TipsInfoDescription>
              </TipsInfo>
            </SingleTipsContent>
          </TipsContent>
          <TipsContent>
            <SingleTipsContent>
              <TipsIcon src={icon1}></TipsIcon>
              <TipsInfo>
                <TipsInfoTitle>
                  Base your meals on higher fibre starchy carbohydrates
                </TipsInfoTitle>
                <TipsInfoDescription>
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </TipsInfoDescription>
              </TipsInfo>
            </SingleTipsContent>
          </TipsContent>
          <TipsContent>
            <SingleTipsContent>
              <TipsIcon src={icon1}></TipsIcon>
              <TipsInfo>
                <TipsInfoTitle>
                  Base your meals on higher fibre starchy carbohydrates
                </TipsInfoTitle>
                <TipsInfoDescription>
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </TipsInfoDescription>
              </TipsInfo>
            </SingleTipsContent>
          </TipsContent>
        </TipsContainer>
        <TipsContainer>
          <TipsContent>
            <SingleTipsContent>
              <TipsIcon src={icon1}></TipsIcon>
              <TipsInfo>
                <TipsInfoTitle>
                  Base your meals on higher fibre starchy carbohydrates
                </TipsInfoTitle>
                <TipsInfoDescription>
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </TipsInfoDescription>
              </TipsInfo>
            </SingleTipsContent>
          </TipsContent>
          <TipsContent>
            <SingleTipsContent>
              <TipsIcon src={icon1}></TipsIcon>
              <TipsInfo>
                <TipsInfoTitle>
                  Base your meals on higher fibre starchy carbohydrates
                </TipsInfoTitle>
                <TipsInfoDescription>
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </TipsInfoDescription>
              </TipsInfo>
            </SingleTipsContent>
          </TipsContent>
          <TipsContent>
            <SingleTipsContent>
              <TipsIcon src={icon1}></TipsIcon>
              <TipsInfo>
                <TipsInfoTitle>
                  Base your meals on higher fibre starchy carbohydrates
                </TipsInfoTitle>
                <TipsInfoDescription>
                  Sample text. Click to select the text box. Click again or
                  double click to start editing the text.
                </TipsInfoDescription>
              </TipsInfo>
            </SingleTipsContent>
          </TipsContent>
        </TipsContainer>
      </>
    </Container>
  );
};

export default Tips;
