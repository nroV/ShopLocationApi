import React, { useEffect, useMemo } from "react";
import { FaFacebook } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ImageCard from "./ImageCard.jsx";
import { clsx } from 'clsx';
export default function ShopCard({ item, layout = "grid"}) {
  const location = item;
  const isGrid = layout === "grid"
  let cardlayout = "bg-white shadow-lg  rounded-lg hover:scale-105 duration-500 transition-all gap-y-10 ";
  let imagelayout = "sm:w-full  object-cover w-full md:h-36 h-[200px] w-full";
  // const {
  //   id,
  //   name,
  //   latitute,
  //   longitude,
  //   description,
  //   social_link,
  //   open_close_time,
  //   price_range,
  //   address,
  //   website,
  //   contact,
  //   category,
  //   images,
  //   nearest,
  // } = location;

  const telephone = location?.contact.split(" ").splice(0, 4);
  const email = location?.contact.split(" ").splice(5);

  if (layout === "list") {
    cardlayout = "bg-white shadow-lg  rounded-lg hover:scale-105 duration-500 transition-all gap-y-10 md:flex items-center w-full flex-wrap md:flex-nowrap block ";

    // imagelayout = "lg:max-w-[220px] lg:h-full object-cover h-[200px] w-full";

    //close 
  }

  return (
    <div className={clsx({'card-grid':isGrid,'card-list':!isGrid})}>
      {location?.images[0]?.image && (
        <ImageCard src={location?.images[0]} imgstyle={imagelayout} />
      )}

      <div className="card-body text-xs  p-5 w-full space-y-4 hover:scale-105">
        <h1 className="text-md font-bold text-black">{location?.name}</h1>

        <div className="detail flex justify-between gap-6 ">
          <p className="text-white bg-primaryColor-label w-fit p-[4px] px-3 text-sm font-semibold">
            {location?.price_range || "N / A"}
          </p>
          <a href={`tel:${telephone}`}>
            <p className="hover:cursor-pointer w-full">📞 </p>
          </a>
        </div>
        <div className="extra-detail space-y-2">
          <p>🕐 {location?.open_close_time || "N / A"} </p>
          <div className="flex gap-2 items-center">
            <FaLocationDot width={110} height={50} color="red" />

            <p className="font-semibold">{location?.address}</p>
          </div>

          <div className="flex gap-2 items-center">
            <FaFacebook width={110} height={50} color="#0C356A" />

            <div
              className="font-semibold w-fit overflow-clip hover:underline hover:cursor-pointer"
            >
              <a href={location?.social_link[0]?.link} target="_blank">
              
                Social Media
              </a>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <IoEarthOutline />

    
              <a href={location?.website} target="_blank" className="font-semibold hover:cursor-pointer hover:underline">
                Visit Our Website
              </a>
       
          </div>

          <div className="flex gap-2 items-center">
            <MdEmail />


              <a href={`mailto: ${email}`} target="_blank" className="font-semibold hover:cursor-pointer hover:underline">
                {email ?? "No Information"}
              </a>
         
          </div>
        </div>
      </div>
    </div>
  );
}
