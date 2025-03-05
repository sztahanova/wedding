import { Route, Routes } from "react-router";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { OnePage } from "./pages/OnePage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<OnePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<OnePage />} />
    </Routes>
  );
};
