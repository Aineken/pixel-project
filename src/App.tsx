import React from "react";
import tw from "twin.macro";

import "./App.css";
import HeroSection from "./containers/HeroSection/HeroSection";

const AppContainer = tw.div`
flex
w-full
h-full
`;

function App() {
  return (
    <AppContainer>
      <HeroSection />
    </AppContainer>
  );
}

export default App;
