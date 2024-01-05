import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({
  totalPage,
  setCurrentPage,
  setOnSelectPage,
  currentPage,
}) {


  const onNextpage= ()=>{
    setOnSelectPage(pre=>{
    
      return pre+1
    })
  }

  console.log(currentPage)
  return (
    <div className="flex flex-row col-span-3 space-x-8 text-sm justify-center">
      <button onClick={{}}>Prevs</button>

      <ul className="flex gap-5 space-x-5">
        {Array.from({ length: totalPage }, (item, index) => (
          <li
            onClick={() => setOnSelectPage(index + 1)}
            key={index}
            className={
              currentPage === index
                ? ` bg-primaryColor-label px-3 py-[1px] text-white`
                : "hover:cursor-pointer"
            }
          >
            {index}
          </li>
        ))}
      </ul>
      <button onClick={onNextpage}>Next</button>
    </div>
  );
}
