import { useCallback } from "react";
import { useNavigate } from "react-router";
import { HOME_LINK } from "../../Globals";
import classNames from "./WeddingLogo.module.css";
import { WeddingLogoProps } from "./WeddingLogo.types";

export const WeddingLogo = ({ className, isClickable = false, isSingleLine = true }: WeddingLogoProps) => {
  const navigate = useNavigate();

  const navigateToHome = useCallback(() => navigate(HOME_LINK), [navigate]);

  return (
    <div
      className={`fleur-de-leah-regular ${classNames.weddingLogoText} ${className}`}
      style={{ cursor: isClickable ? "pointer" : undefined }}
      onClick={isClickable ? navigateToHome : undefined}
    >
      {isSingleLine ? (
        <>Zita &#9901; Péter</>
      ) : (
        <>
          Zita
          <br />
          &#9901;
          <br />
          Péter
        </>
      )}
    </div>
  );
};
