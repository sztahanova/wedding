import { Route, Routes } from "react-router";
import "./App.css";
import { ACCOMMODATION_LINK, FAQ_LINK, GALLERY_LINK, HOME_LINK, RSVP_LINK, TRAVEL_LINK } from "./Globals";
import { HomePage } from "./pages/HomePage";
import { OnePage } from "./pages/OnePage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<OnePage />} />
      <Route path={HOME_LINK} element={<HomePage />} />
      <Route path={TRAVEL_LINK} element={<HomePage />} />
      <Route path={ACCOMMODATION_LINK} element={<HomePage />} />
      <Route path={FAQ_LINK} element={<HomePage />} />
      <Route path={GALLERY_LINK} element={<HomePage />} />
      <Route path={RSVP_LINK} element={<HomePage />} />
      <Route path="*" element={<OnePage />} />
    </Routes>
  );
};
