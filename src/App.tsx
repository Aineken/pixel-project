import React from "react";
import tw from "twin.macro";

import "./App.css";
import { Footer } from "./components/footer";
import { ExploreSection } from "./containers/ExploreSection";
import HeroSection from "./containers/HeroSection/HeroSection";

const AppContainer = tw.div`
flex
flex-col
overflow-hidden
w-full
h-full
`;

function App() {
  return (
    <AppContainer>
      <HeroSection />
      <ExploreSection />
      <Footer />
    </AppContainer>
  );
}

export default App;
