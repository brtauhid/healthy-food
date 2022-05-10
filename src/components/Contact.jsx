import React from "react";
import styled from "styled-components";
import contactBg from "../img/strawberryBg.jpeg";
const Container = styled.div`
  height: 630px;
  background-color: yellow;
  background-image: url(${contactBg});
  background-size: cover;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;
const Right = styled.div`
  flex: 2;
`;
const ContactTitle = styled.h1`
  font-size: 60px;
`;
const ContactInput = styled.input`
  padding: 15px 10px;
  width: 90%;
  border: white;
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #111111;
`;
const ContactBtn = styled.button`
  text-transform: uppercase;
  letter-spacing: 1px;
  border-style: none;
  font-weight: 700;
  padding: 16px 52px 16px 51px;
  width: 95%;
  background-color: #6a4aa1;
  color: white;
  font-size: 15px;
`;

const Contact = () => {
  return (
    <Container>
      <Left>
        <ContactTitle>Be Healthy!</ContactTitle>
        <ContactInput placeholder="Enter a valid email address"></ContactInput>
        <ContactBtn>Submit</ContactBtn>
      </Left>
      <Right></Right>
    </Container>
  );
};

export default Contact;
