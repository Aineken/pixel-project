import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const LogoContainer = styled.div`
  ${tw`

    [font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif]
    font-black
    text-2xl
    lg:text-xl
    text-white 
    w-full
    max-w-max
    `}
`;
function Logo() {
  return <LogoContainer>Andrzul Web Studio</LogoContainer>;
}

export default Logo;
