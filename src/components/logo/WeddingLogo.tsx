import { useCallback } from "react";
import { useNavigate } from "react-router";
import { HOME_LINK } from "../../Globals";
import classNames from "./WeddingLogo.module.css";
import { WeddingLogoProps } from "./WeddingLogo.types";

export const WeddingLogo = ({ fontSize, width, isClickable = false }: WeddingLogoProps) => {
  const navigate = useNavigate();

  const navigateToHome = useCallback(() => navigate(HOME_LINK), [navigate]);

  return (
    <div
      className={`fleur-de-leah-regular highlighted-text ${classNames.weddingLogoText}`}
      style={{ fontSize, width, cursor: isClickable ? "pointer" : undefined }}
      onClick={isClickable ? navigateToHome : undefined}
    >
      Zita &#9901; Péter
    </div>
  );
};
