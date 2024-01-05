import React, { useEffect, useMemo, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ImageCard from "./ImageCard.jsx";
import { clsx } from "clsx";
import PopUpModal from "./LocationPopUpDetail.jsx";
import Popup from "reactjs-popup";
export default function LocationCard({ item, layout = "grid", onClickItem }) {
  const location = item;
  const isGrid = layout === "grid";
  const telephone = location?.contact.split(" ").splice(0, 4);
  const email = location?.contact.split(" ").splice(5);

  return (
    <>
      <div
        className={clsx({ "card-grid": isGrid, "card-list": !isGrid })}
        onClick={() => onClickItem(location)}
      >
        {location?.images[0]?.image && (
          <ImageCard
            src={location?.images[0]}
            imgstyle={clsx({
              "image-card-list": !isGrid,
              "image-card-grid": isGrid,
            })}
          />
        )}

        <div className="card-body text-xs  p-5 w-full space-y-4 hover:scale-105">
          <h1 className="text-lg font-bold text-black">{location?.name}</h1>

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
              {location?.social_link.length > 0 && (
                <>
                  <FaFacebook width={110} height={50} color="#0C356A" />

                  <ul>
                    {location?.social_link.map((social) => (
                      <a
                        href={social?.link}
                        target="_blank"
                        className="font-semibold w-fit overflow-clip hover:underline hover:cursor-pointer"
                      >
                        {social?.name}
                      </a>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="flex gap-2 items-center">
              <IoEarthOutline />

              <a
                href={location?.website}
                target="_blank"
                className="font-semibold hover:cursor-pointer hover:underline"
              >
                Visit Our Website
              </a>
            </div>

            <div className="flex gap-2 items-center">
              {email.length > 0 && (
                <>
                  <MdEmail />
                  <a
                    href={`mailto: ${email}`}
                    target="_blank"
                    className="font-semibold hover:cursor-pointer underline"
                  >
                    {email}
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
