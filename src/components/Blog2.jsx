import styled from "styled-components";
import Blog2Image from "../img/-min.jpg";

const Container = styled.div`
  height: 750px;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Blog2Content = styled.div`
  display: flex;
  width: 1080px;
  height: 550px;
  background-color: white;
`;
const Left = styled.div`
  flex: 1;
  margin-left: 40px;
  display: flex;
  //   align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Blog2Title = styled.h1`
  font-size: 48px;
  width: 90%;
`;
const Blog2Description = styled.p`
  margin: 50px 0;
  width: 96%;
  line-height: 1.5;
`;
const Blog2Btn = styled.button`
  text-transform: uppercase;
  letter-spacing: 3px;
  border-style: none;
  font-weight: 700;
  padding: 16px 52px 16px 51px;
  width: 50%;
  background-color: #292e33;
  color: white;
`;

const Right = styled.div`
  flex: 1.3;
`;
const Blog2Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Blog2 = () => {
  return (
    <Container>
      <Blog2Content>
        <Left>
          <Blog2Title>How can I eat more healthily?</Blog2Title>
          <Blog2Description>
            Vitae congue mauris rhoncus aenean vel elit scelerisque. Consequat
            nisl vel pretium lectus quam id leo in vitae. Dictum sit amet justo
            donec enim diam vulputate. Sociis natoque penatibus et magnis dis
            parturient. Molestie ac feugiat sed lectus vestibulum mattis.
          </Blog2Description>
          <Blog2Btn>read more</Blog2Btn>
        </Left>
        <Right>
          <Blog2Img src={Blog2Image}></Blog2Img>
        </Right>
      </Blog2Content>
    </Container>
  );
};

export default Blog2;
