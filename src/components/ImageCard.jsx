import React from "react";
import { useAppToggle } from "../utils/store/appContext";

export default function ImageCard({ src ,imgstyle}) {
 
  return (
    <img
      src={src.image}
      className={imgstyle}
      alt="img-thumbnail"
    />
  );
}
