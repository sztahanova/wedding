import { useCallback } from "react";
import { useNavigate } from "react-router";
import { HOME_LINK } from "../../Globals";
import classNames from "./WeddingLogo.module.css";

export const WeddingLogo = () => {
  const navigate = useNavigate();

  const navigateToHome = useCallback(() => navigate(HOME_LINK), []);

  return (
    <div className={`fleur-de-leah-regular highlighted-text ${classNames.weddingLogoText}`} onClick={navigateToHome}>
      Zita &#9901; Péter
    </div>
  );
};
