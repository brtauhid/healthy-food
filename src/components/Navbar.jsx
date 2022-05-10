import styled from "styled-components";

const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: #ddd;
`;

const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 4;
`;

const Logo = styled.h1`
  color: gray;
`;

const MenuItemUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 30px;
`;
const MenuItemLi = styled.li`
  list-style: none;
  padding-left: 20px;
`;
const MenuItemA = styled.a``;

const Navbar = () => {
  return (
    <Container>
      <Left>
        <Logo>HF</Logo>
      </Left>
      <Right>
        <MenuItemUl>
          <MenuItemLi>
            <MenuItemA>Home</MenuItemA>
          </MenuItemLi>
          <MenuItemLi>
            <MenuItemA>Features</MenuItemA>
          </MenuItemLi>
          <MenuItemLi>
            <MenuItemA>Contact</MenuItemA>
          </MenuItemLi>
          <MenuItemLi>
            <MenuItemA>Tips</MenuItemA>
          </MenuItemLi>
          <MenuItemLi>
            <MenuItemA>Blog</MenuItemA>
          </MenuItemLi>
          <MenuItemLi>
            <MenuItemA>Gallary</MenuItemA>
          </MenuItemLi>
        </MenuItemUl>
      </Right>
    </Container>
  );
};

export default Navbar;
