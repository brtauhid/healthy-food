import styled from "styled-components";
import women from "../img/women.jpg";

const Container = styled.div`
  height: 1000px;
  background-color: white;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 70px;
`;
const Right = styled.div`
  flex: 1;
  position: relative;
`;
const Blog1Description = styled.p`
  font-size: 16px;
  width: 80%;
  margin-bottom: 20px;
`;

const Blog1Btn = styled.button`
  text-transform: uppercase;
  letter-spacing: 1px;
  border-style: none;
  font-weight: 700;
  padding: 16px 52px 16px 51px;
  width: 40%;
  background-color: #6a4aa1;
  color: white;
  font-size: 15px;
`;

const Blog1Img = styled.img`
  height: 550px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 70px;
`;
const Blog1Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  width: 80%;
  margin-left: 40px;
  position: absolute;
  top: 260px;
`;

const Blog1 = () => {
  return (
    <Container>
      <Left>
        <Blog1Description>
          Nisl purus in mollis nunc sed id. Aenean vel elit scelerisque mauris
          pellentesque pulvinar pellentesque. Turpis egestas sed tempus urna et
          pharetra. Id aliquet risus feugiat in ante metus dictum. Aliquet nec
          ullamcorper sit amet risus nullam. Lectus nulla at volutpat diam ut.
        </Blog1Description>
        <Blog1Btn>read more</Blog1Btn>
        <Blog1Img src={women}></Blog1Img>
      </Left>
      <Right>
        <Blog1Title>25 Simple Tips to Make Your Diet Healthier</Blog1Title>
      </Right>
    </Container>
  );
};

export default Blog1;
