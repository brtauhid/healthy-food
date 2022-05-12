import styled from "styled-components";
import one from "../img/1.jpg";
import two from "../img/2.jpg";
import three from "../img/3.jpg";
import four from "../img/4.jpg";
import five from "../img/5.jpg";
import six from "../img/6.jpg";

const Container = styled.div`
  height: 1020px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const GalleryTitle = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
  color: #6a4aa1;
`;
const GalleryDesc = styled.p`
  font-size: 15px;
  font-style: italic;
`;
const GalleryItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px; ;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img1 = styled.img`
  width: 30%;
  padding: 10px;
`;
const Img2 = styled.img`
  width: 30%;
  padding: 10px;
`;
const Img3 = styled.img`
  width: 30%;
  padding: 10px;
`;
const Img4 = styled.img`
  width: 30%;
  padding: 10px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img5 = styled.img`
  width: 30%;
  padding: 10px;
`;
const Img6 = styled.img`
  width: 30%;
  padding: 10px;
`;

const Gallery = () => {
  return (
    <Container>
      <GalleryTitle>Seasona​l Fruits & Veg</GalleryTitle>
      <GalleryDesc>
        Organic food is food produced by methods that comply with the standards
        of organic farming.
      </GalleryDesc>
      <GalleryItems>
        <Left>
          <Img1 src={one}></Img1>
          <Img2 src={two}></Img2>
          <Img3 src={three}></Img3>
        </Left>
        <Right>
          <Img4 src={four}></Img4>
          <Img5 src={five}></Img5>
          <Img6 src={six}></Img6>
        </Right>
      </GalleryItems>
    </Container>
  );
};

export default Gallery;
