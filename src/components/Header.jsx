import React from "react";
import { BiGridAlt } from "react-icons/bi";
import { FaListUl } from "react-icons/fa6";
import ToggleBar from "./ToggleBar";
import { useAppToggle } from "../utils/store/appContext";
export default function Header({ children, setToggle }) {
  return (
    <div className="w-full col-span-3 ">
      <h1 className="text-center text-4xl text-primaryColor-label font-bold mb-9">
        {children}
      </h1>

      <div className="toggle flex gap-2">
        <ToggleBar
          icon={<FaListUl fill="green" />}
          bgcolor={"green"}
          onToggle={() => setToggle("list")}
        />

        <ToggleBar
          icon={<BiGridAlt fill="green" />}
          bgcolor={"green"}
          onToggle={() => setToggle("grid")}
        />
      </div>
    </div>
  );
}
