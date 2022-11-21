import React from "react";
import tw from "twin.macro";

import "./App.css";
import { TopSection } from "./containers/HeroSection";

const AppContainer = tw.div`
flex
w-full
h-full
`;

function App() {
  return (
    <AppContainer>
      <TopSection />
    </AppContainer>
  );
}

export default App;
