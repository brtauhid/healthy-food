import React from "react";
import styled from "styled-components";
import burger from "../img/burger.png";
import chocolate from "../img/chocolate.png";
import fish from "../img/fish.png";

const Container = styled.div`
  height: 500px;
  display: flex;
  padding: 0 50px;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const FeatureInfo = styled.div`
  flex: 2;
`;
const Title = styled.h1`
  font-size: 36px;
  color: #111111;
  font-weight: 700;
`;
const Description = styled.p`
  font-size: 16px;
  color: #111111;
  margin: 20px 0;
`;
const Btn = styled.button`
  text-transform: uppercase;
  letter-spacing: 3px;
  border-style: none;
  font-weight: 700;
  padding: 16px 52px 16px 51px;
`;
const Feature1 = styled.div`
  flex: 1;
  background-color: #6a4aa1;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: 270px;
`;
const Feature2 = styled.div`
  flex: 1;
  background-color: #d01e55;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: 270px;
`;
const Feature3 = styled.div`
  flex: 1;
  background-color: #292d33;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: 270px;
`;

const F1Img = styled.img`
  width: 25%;
`;
const F2Img = styled.img`
  width: 25%;
`;
const F3Img = styled.img`
  width: 25%;
`;
const F1Title = styled.h1`
  font-size: 24px;
  color: white;
  text-align: center;
  margin: 20px auto;
`;
const F1Description = styled.p`
  font-size: 14px;
  text-align: center;
  color: white;
`;
const F2Title = styled.h1`
  font-size: 24px;
  color: white;
  text-align: center;
  margin: 20px auto;
`;
const F2Description = styled.p`
  font-size: 14px;
  text-align: center;
  color: white;
`;
const F3Title = styled.h1`
  font-size: 24px;
  color: white;
  text-align: center;
  margin: 20px auto;
`;
const F3Description = styled.p`
  font-size: 14px;
  text-align: center;
  color: white;
`;
const Features = () => {
  return (
    <Container>
      <FeatureInfo>
        <Title>Weight Loss Linked To Healthy Eating</Title>
        <Description>
          Participants who ate the most vegetables and consumed the fewest
          processed foods, sugary drinks and unhealthy fats shed the most
          kilograms
        </Description>
        <Btn>Read More</Btn>
      </FeatureInfo>
      <Feature1>
        <F1Img src={burger}></F1Img>
        <F1Title>Over 300 food products</F1Title>
        <F1Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
          justo sagittis suscipit ultrices.
        </F1Description>
      </Feature1>
      <Feature2>
        <F2Img src={fish}></F2Img>
        <F2Title>Only natural products</F2Title>
        <F2Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
          justo sagittis suscipit ultrices.
        </F2Description>
      </Feature2>
      <Feature3>
        <F3Img src={chocolate}></F3Img>
        <F3Title>Significant weight loss</F3Title>
        <F3Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc
          justo sagittis suscipit ultrices.
        </F3Description>
      </Feature3>
    </Container>
  );
};

export default Features;
