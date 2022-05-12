import styled from "styled-components";
const Container = styled.div`
  height: 500px;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AboutTitle = styled.h1``;
const AboutContentArea = styled.div`
  display: flex;
`;
const Left = styled.div`
  background-color: red;
  height: 300px;
`;
const Right = styled.div`
  background-color: green;
  height: 300px;
`;

const About = () => {
  return (
    <Container>
      <AboutTitle>About Us</AboutTitle>
      <AboutContentArea>
        <Left>l</Left>
        <Right>r</Right>
      </AboutContentArea>
    </Container>
  );
};

export default About;
