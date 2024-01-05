import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import ScrollCarousel from "scroll-carousel-react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function LocationPopUpDetail({ detail }) {
  const {
    id,
    name,
    description,
    social_link,
    price_range,
    images,
    address,
    website,
    contact,
    open_close_time,
    latitude,
    longitude,
  } = detail;

  const telephone = contact.split(" ").splice(0, 4);
  const email = contact.split(" ").splice(5);
  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 16,
  };
  return (
    <main className="space-y-15 ">
      <section>
        <div className="slide-container">
          <ScrollCarousel
            autoplay
            autoplaySpeed={1}
            speed={1}
            className="w-full mb-3"
          >
            {images.map((item) => (
              <img
                key={item}
                className="w-[300px] h-[270px] object-cover"
                src={item.image}
              />
            ))}
          </ScrollCarousel>
        </div>

        {/* <div className="img-thumbnail flex my-4 gap-x-5">

      {
          images.map((image)=><img src={image.image} className="w-[50px] h-[50px]" />)
        }
      </div> */}
        <header className="flex justify-between">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <a href={`tel:${telephone}`}>
              <p className="hover:cursor-pointer w-full">📞 </p>
            </a>
        </header>

        <div className="body text-lg font-semibold space-y-5 my-4">
          <div className="top-detail flex justify-between items-center flex-wrap">
            <div className="detail flex justify-between gap-6 ">
              <p className="text-white bg-primaryColor-label w-fit p-[4px] px-3 text-md font-semibold">
                {price_range || "N / A"}
              </p>
            </div>
            <p className="text-md font-normal">
              🕐 {open_close_time || "N / A"}{" "}
            </p>
          </div>

          <div className="social-link flex items-center justify-start text-sm flex-wrap">
            <div className="items-center mr-3">
              <ul className="flex items-center gap-1  ">
                {social_link.map((social) => (
                  <>
                    <FaFacebook width={110} height={50} color="#0C356A" />
                    <a
                      href={social?.link}
                      target="_blank"
                      className=" w-fit 
                  hover:cursor-pointer font-bold text-blue-950 font-bold underline"
                    >
                      {social?.name}
                    </a>
                  </>
                ))}
              </ul>
            </div>
            <div className="flex gap-1 items-center text-primaryColor-label mr-3">
              <IoEarthOutline />

              <a
                href={website}
                target="_blank"
                className="font-semibold hover:cursor-pointer underline"
              >
                Visit Our Website
              </a>
            </div>
            <div className="flex gap-2 items-center text-red-500 mr-3">
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
          <p className="text-md font-light">{description}</p>

          <div className="map-location space-y-3">
            <h1>Location</h1>
            <div className="flex items-center gap-2">
              <FaLocationDot width={110} height={150} color="red" />

              <span className="font-normal">{address}</span>
            </div>
            <div className="w-full h-[300px]">
              <GoogleMapReact
                yesIWantToUseGoogleMapApiInternals
                bootstrapURLKeys={{
                  key: "AIzaSyD1_KdnFnGdb403DWgSgu2Z6Mmzb3HsGo8",
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                debounced={false}
                draggable={false}
                shouldUnregisterMapOnUnmount
                fullscreenControl={false}
              >
                <a
                  href={`http://maps.google.com/?q=${address}`}
                  target="_blank"
                >
                  <FaMapMarkerAlt className="text-3xl text-red-600"></FaMapMarkerAlt>{" "}
                </a>
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
