import React, { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
// Plugins
import lgZoom from "lightgallery/plugins/zoom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import GLightbox from "glightbox";
import lightGallery from 'lightgallery/react/Lightgallery.es5';
import ImageGallery from "react-image-gallery";
// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'

import "react-image-gallery/styles/css/image-gallery.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

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

  const displayimages = images.map((img)=>{
    return {original:img.image,thumbnail:img.image}
  })


  return (
    <main className="space-y-15 ">
      <section>
        <div className="slide-container w-full mb-5">
          {/* <Carousel
          key={Date.now()}
            swipeable={false}
            className="space-x-5"
            draggable={false}
            showDots={true}
            arrows={true}
            // centerMode={true}
            partialVisible={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-60-px"
          >
            {images.map((item,index) => (
              <lightGallery plugins={[lgThumbnail]} speed={500}>
              <a href={item.image}  data-lg-size="1600-2400">
              <img
                  key={index}
                  data-gallery="my-gallery"
                  className="w-[650px] h-full object-cover mr-9 glightbox-link"
                  src={item.image}
                />
              </a>
           
              </lightGallery>
            ))}
          </Carousel> */}
          {
            images === null ? <>
              <h1>loading...</h1>
            </> :  
             <ImageGallery
             showBullets = {true}
            //  onImageLoad={}
            originalWidth="200px"
            originalHeight="200px"
            sizes = {200}
            
             items={displayimages}
             showIndex={true}
           
             />
          }
    
        
    
        </div>

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
                {social_link.map((social, index) => (
                  <li key={index}>
                    <FaFacebook width={110} height={50} color="#0C356A" />
                    <a
                      href={social?.link}
                      target="_blank"
                      className=" w-fit 
                  hover:cursor-pointer font-bold text-blue-950 font-bold underline"
                    >
                      {social?.name}
                    </a>
                  </li>
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
