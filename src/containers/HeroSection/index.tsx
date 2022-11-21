import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const TopSectionContainer = styled.div`
  ${tw`
flex  
w-full
h-screen
flex-col
relative


`}
`;

export function TopSection() {
  return <TopSectionContainer></TopSectionContainer>;
}
