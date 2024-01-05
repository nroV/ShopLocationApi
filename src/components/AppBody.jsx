import React from "react";
import ShopItem from "./LocationList";
import PaginationBar from "./PaginationBar";
import { FaTruckLoading } from "react-icons/fa";
import LoadingIcons from "react-loading-icons";
export default function AppBody({
  data,
  isLoading,
  isError,
  layout = "grid",
  totalPage = 0,
  setCurrentPage,
  setOnSelectPage,
  currentPage
}) {
  if (isLoading) {
    return (
      <>
        <LoadingIcons.ThreeDots
          stroke="green"
          className="flex justify-center w-full col-span-3 items-center"
          widths={50}
          heights={50}
          fill="green"
          fillOpacity={10}
        />
      </>
    );
  }
  return (
    <>
      <main className="col-span-3 grid p-10 gap-8">
        <PaginationBar totalPage={totalPage} 
        setCurrentPage={setCurrentPage}  setOnSelectPage={setOnSelectPage}
         currentPage={currentPage} />
        <ShopItem data={data} layout={layout} />
      </main>
    </>
  );
}
