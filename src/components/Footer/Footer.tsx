import React from "react";
import { Link } from "react-scroll";
import tw from "twin.macro";
import Logo from "../Logo/Logo";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import styled from "styled-components";
import { Element } from "react-scroll";

const FooterContainer = tw(Element)`
    w-full
    h-96
    bg-dark-blue-500
    mt-10
    flex
    pt-6
    pl-2
    pr-2
    lg:pt-14
    lg:pr-16
    lg:pl-16
    text-white
    items-center
    flex-col
`;

const Wrapper = tw.div`
    flex
    flex-col
    w-full
    h-full
    justify-center
    max-w-6xl
    lg:max-w-7xl
`;

const TopSection = tw.div`
    flex
    [width: 90%]
    justify-center
    lg:justify-start
    mr-3
    lg:ml-5
    lg:mr-16
`;

const InnerContainer = tw.div`
    [width: 90%]
    flex
    flex-col
    lg:flex-row
    flex-wrap
    pt-16
    lg:pt-9
    justify-between
    lg:justify-start
    h-full
`;

const LeftInnerContainer = tw.div`
    flex
    [flex:5]
    w-full
    h-full
    justify-between
    lg:justify-start
`;

const RightInnerContainer = tw.div`
    flex
    flex-col
    lg:flex-row
    [flex:1]
    w-full
    h-full
    mb-5
    lg:mb-0
    flex-wrap
`;

const Menu = tw.ul`
    flex
    flex-col
    list-none
    mr-3
    lg:ml-5
    lg:mr-16
`;

const MenuItem = tw.li`
    flex
    text-white
    text-sm
    lg:text-base
    mt-2
`;

const BottomSection = tw.div`
    w-full
    flex
    flex-wrap
    items-center
    justify-around
    px-1
    h-28
    lg:h-14
    bottom-0
    border-t
    border-t-gray-300
    border-opacity-50
    [width: 90%]
`;

const Copyright = tw.span`
    [font-size:x-small]
    text-gray-300
    w-auto
    lg:w-auto
    text-center
`;

const SmallText = styled.span`
  ${tw`
  
  [font-size:medium]
    text-gray-300
  `}
  a {
    text-decoration: none;
    ${tw`
    text-gray-300
    `}
  }
`;

const SocialMedia = tw.div`
    flex
    justify-center
`;

const Icon = tw.span`
    h-6
    flex
    mr-4
    cursor-pointer
    transition-colors
    hover:text-gray-300
`;

export default function Footer() {
  return (
    <FooterContainer name="Footer">
      <Wrapper>
        <TopSection>
          <Logo />
        </TopSection>
        <InnerContainer>
          <LeftInnerContainer>
            <Menu>
              <MenuItem>
                <Link to="Home">Home</Link>
              </MenuItem>
              <MenuItem>
                <Link to="Explore">Explore</Link>
              </MenuItem>
              <MenuItem>
                <Link to="TravelPlaces">Travel Places</Link>
              </MenuItem>
            </Menu>
            <Menu>
              <MenuItem>
                <Link to="#">About Us</Link>
              </MenuItem>
              <MenuItem>
                <Link to="# ">Contact Us</Link>
              </MenuItem>
              <MenuItem>
                <Link to="#">Our Travel Terms</Link>
              </MenuItem>
            </Menu>
            <Menu>
              <MenuItem>
                <Link to="#">Company</Link>
              </MenuItem>
              <MenuItem>
                <Link to="#">Careers</Link>
              </MenuItem>
              <MenuItem>
                <Link to="#">Travel Guide</Link>
              </MenuItem>
            </Menu>
          </LeftInnerContainer>
          <RightInnerContainer>
            <SocialMedia>
              <Icon>
                <SiFacebook size={25} />
              </Icon>
              <Icon>
                <SiInstagram size={25} />
              </Icon>
              <Icon>
                <SiTwitter size={25} />
              </Icon>
            </SocialMedia>
          </RightInnerContainer>
        </InnerContainer>
        <BottomSection>
          <Copyright>
            © {new Date().getFullYear()} Andrzul Web Studio. All rights
            reserved.
          </Copyright>
          <SmallText>
            <a href="/">Terms of Service</a>
          </SmallText>
          <SmallText>
            <a href="/">Privacy Policy</a>
          </SmallText>
          <SmallText>
            <a href="/">Security</a>
          </SmallText>
          <SmallText>
            <a href="/">Sitemap</a>
          </SmallText>
        </BottomSection>
      </Wrapper>
    </FooterContainer>
  );
}
