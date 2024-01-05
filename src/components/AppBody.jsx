import React from "react";
import LocationList from "./LocationList";
import PaginationBar from "./PaginationBar";
import LoadingIcons from "react-loading-icons";
export default function AppBody({
  data,
  isLoading,
  layout = "grid",
  pagination,
  setPagination,
  onChangePage,
  onClickItem
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
        <PaginationBar
          totalPage={pagination?.totalPage}
          onChangePage={onChangePage}
          currentPage={pagination?.currentPage}
        />
        <LocationList data={data} layout={layout} onClickItem ={onClickItem} />
      </main>
    </>
  );
}
