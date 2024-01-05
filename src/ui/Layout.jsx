import React from "react";
import { useAppToggle } from "../utils/store/appContext";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ children }) {

  
  const  stylegrid = "max-w-[1200px] mx-auto my-10 grid grid-cols-3 justify-items-center"

  return <div className={stylegrid}>{children}</div>;
}
