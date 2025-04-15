import { DetailedHTMLProps, IframeHTMLAttributes } from "react";
import { Places } from "./WeddingTimeline.types";

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const getPlacePrefix = (place: Places): string => {
  switch (place) {
    case Places.CHURCH:
      return "churchWedding";
    case Places.COURTHOUSE:
      return "civilWedding";
    case Places.RECEPTION:
      return "weddingReception";
    default:
      return "";
  }
};

export const getEmbeddedMapProps = (
  place: Places,
  className: string,
  language: string,
): DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement> => {
  return {
    src: `https://www.google.com/maps/embed/v1/place?q=place_id:${place}&key=${GOOGLE_MAPS_API_KEY}&language=${language}`,
    className,
    allowFullScreen: true,
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
  };
};
