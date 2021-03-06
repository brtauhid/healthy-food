import styled from "styled-components";
import heroBg from "../../src/img/heroBg.jpeg";

const Container = styled.div`
  height: calc(100vh - 70px);
  background-color: yellow;
  display: flex;
  align-items: center;
  background-image: url(${heroBg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Left = styled.div`
  width: 50%;
  flex: 3;
`;
const Right = styled.div`
  width: 50%;
  flex: 2;
`;

const Title = styled.div`
  font-size: 130px;
  font-weight: 700;
  color: white;
`;
const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

const Desc = styled.p`
  font-size: 16px;
  width: 90%;
  margin: 30px 0;
  color: white;
  line-height: 2;
`;

const Btn = styled.button`
  text-transform: uppercase;
  letter-spacing: 3px;
  border-style: none;
  font-weight: 700;
  padding: 16px 52px 16px 51px;
`;

const Hero = () => {
  return (
    <Container>
      <Left></Left>
      <Right>
        <Title>health</Title>
        <SubTitle>Time to Get Healthy & Active</SubTitle>
        <Desc>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Desc>
        <Btn>READ MORE</Btn>
      </Right>
    </Container>
  );
};

export default Hero;
