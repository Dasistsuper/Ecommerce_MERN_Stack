import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined, Instagram, Facebook, Pinterest, TabletSharp } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import zamboza from "../zamboza.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { logout } from "../redux/userRedux";
import { mobile, smallMobile, tablet } from "../responsive"


const Container = styled.div`
  height: 100px;
  ${mobile({ flex: "0 0 50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tablet({ padding: "10px 0" })};
  ${mobile({ padding: "10px 0" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}

`;


const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  gap: 5px;
`;


const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.div`
  ${mobile({ fontSize: 18 })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;

const MenuItem = styled.div`
  font-size: 16px;
  color: #000;
  cursor: pointer;
  margin-left: 25px;
  ${tablet({ fontSize: 24, marginLeft: 16 })};
  margin-right : ${(props) =>
    // @ts-ignore
    props.last && "14px"};
  ${mobile({ fontSize: 14, marginLeft: 6 })};
  position:relative;
 `;

  

const Navbar = () => {

  const {currentUser} = useSelector(state => state.user)

  const [isOpen, setIsOpen] = useState(false)

  const quantity = useSelector(state=>state.cart.quantity)

  const dispatch = useDispatch()

  

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/products"  style={{ textDecoration: 'none' }}>
        <MenuItem>What's New</MenuItem>
        </Link>
        <Link to="/products/women"  style={{ textDecoration: 'none' }}>
        <MenuItem>Women</MenuItem>
        </Link>
        <Link to="/products/men"  style={{ textDecoration: 'none' }}>
        <MenuItem>Men</MenuItem>
        </Link>
        <MenuItem>Classics</MenuItem>
        </Left>
        <Center>
          <Link to="/"  style={{ textDecoration: 'none' }}>
          <Logo><img src={zamboza} /></Logo>
          </Link> 
        </Center>
        <Right>
          <SocialIcons>
          <Instagram />
          <Facebook />
          <Pinterest />
          </SocialIcons>
          {!currentUser  ?
          <>
          <Link to="/register"  style={{ textDecoration: 'none' }}>
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login"  style={{ textDecoration: 'none' }}>
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          </>
          :
          <Link to="/"  onClick={(e) =>{e.preventDefault(); dispatch(logout())}} style={{ textDecoration: 'none' }}>
          <MenuItem>SIGN OUT</MenuItem>
          </Link>
          }
          <Link to="/cart"  style={{ textDecoration: 'none' }}>
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;