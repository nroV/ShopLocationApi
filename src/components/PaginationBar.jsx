
import ReactPaginate from "react-paginate";
// eslint-disable-next-line import/no-anonymous-default-export
export default function ({
  totalPage,
  currentPage,
  onChangePage,
}) {

  const handlePageClick = (event) => {
    const toPage = event.selected;
    onChangePage(toPage + 1);
  };
  return (
    <div className="flex flex-row col-span-3 space-x-8 text-sm justify-center">
     
      <ReactPaginate
        className="flex gap-5 space-x-5"
        breakLabel="..."
        nextLabel="next "
        activeClassName="bg-primaryColor-label px-3 py-[1px] text-white"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPage}
        forcePage={currentPage}
        previousLabel="previous"
        renderOnZeroPageCount={0}
      />

      {/* <button onClick={{}}>Next</button> */}
    </div>
  );
}
