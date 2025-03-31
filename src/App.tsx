import { Route, Routes } from "react-router";
import "./App.css";
import { ACCOMMODATION_LINK, FAQ_LINK, GALLERY_LINK, HOME_LINK, RSVP_LINK, TRAVEL_LINK } from "./Globals";
import { HomePage } from "./pages/HomePage";
import { OnePage } from "./pages/OnePage";
import { UnderConstruction } from "./pages/UnderConstruction";
import { ParallaxTest } from "./ParallaxTest";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<OnePage />} />
      <Route path="/test" element={<ParallaxTest />} />
      <Route path={HOME_LINK} element={<HomePage />} />
      <Route path={TRAVEL_LINK} element={<UnderConstruction />} />
      <Route path={ACCOMMODATION_LINK} element={<UnderConstruction />} />
      <Route path={FAQ_LINK} element={<UnderConstruction />} />
      <Route path={GALLERY_LINK} element={<UnderConstruction />} />
      <Route path={RSVP_LINK} element={<UnderConstruction />} />
      <Route path="*" element={<OnePage />} />
    </Routes>
  );
};
