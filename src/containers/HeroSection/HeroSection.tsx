import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "../../components/Navbar/Navbar";
import BackgroundImage from "../../images/indonesia-high-res.jpg";

const TopSectionContainer = styled.div`
  ${tw`
flex  
w-full
h-screen
flex-col
relative
`}
`;

const LandingSection = styled.div`
  ${tw`
  w-full
  h-screen
  flex
  flex-col
  `}

  background-image:url(${BackgroundImage}),linear-gradient(to left, #005b9c, #b1b1b148);
  background-size: cover;
  background-position: bottom 10% left;
  background-blend-mode: overlay;
`;

function HeroSection() {
  return (
    <TopSectionContainer>
      <LandingSection>
        <Navbar />
      </LandingSection>
    </TopSectionContainer>
  );
}

export default HeroSection;
