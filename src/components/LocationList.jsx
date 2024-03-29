import React, { useMemo } from "react";
import LocationCard from "./LocationCard";
import { useAppToggle } from "../utils/store/appContext";

export default function LocationList({ data, layout ,onClickItem}) {
  const locations = data;

  return (
    <div className="col-span-3 block sm:grid w-full sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-x-10 gap-y-10 space-y-10 sm:space-y-0">
      {locations?.map((location) => (
        <LocationCard layout={layout} key={location.id} item={location} onClickItem ={onClickItem} />
      ))}
    </div>
  );
}
