import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../Logo/Logo";
import { deviceSize } from "../responsive";
import { slide as Menu } from "react-burger-menu";
import styles from "./menuStyles";

const Container = styled.div`
  width: 90%;
  ${tw`
        flex 
        
        h-20
        pl-6
        pr-6
        pt-4
        border-b-2
        border-green-200
        items-center
        self-center
        
`};
`;
const NavItems = styled.ul`
  ${tw`
    list-none
    w-full
    max-w-max
    h-full
    flex
    justify-around
    items-center
`}
`;

const NavItem = styled.li`
  ${tw`
mx-8
lg:mx-4
sm:mx-1
flex
items-center
max-w-max
text-white
cursor-pointer
font-medium
lg:font-medium
text-xl
lg:text-lg
transition-colors
[transition-duration:300ms]
hover:text-gray-200
box-border

`}
`;

export default function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const navItems = (
    <NavItems>
      <NavItem>
        <Link to="Home" smooth={"easeInOutQuad"} duration={1500}>
          Home
        </Link>
      </NavItem>
      <NavItem>
        <Link to="Explore" smooth={"easeInOutQuad"} duration={1500}>
          Explore
        </Link>
      </NavItem>
      <NavItem>
        <Link to="travelPlaces" smooth={"easeInOutQuad"} duration={1500}>
          Travel Places
        </Link>
      </NavItem>
      <NavItem>
        <Link to="Footer" smooth={"easeInOutQuad"} duration={1500}>
          Contact
        </Link>
      </NavItem>
    </NavItems>
  );

  return (
    <Container>
      <Logo />
      {isMobile && (
        <Menu right styles={styles}>
          {navItems}
        </Menu>
      )}

      {!isMobile && navItems}
    </Container>
  );
}
