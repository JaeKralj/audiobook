"use client";
import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();

type PropTypes = {
  slides: import("react").ReactNode[];
};
export const BooksSlider = ({ slides }: PropTypes) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const params = {
      slidesPerView: 1,
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
      navigation: true,
    };

    // Assign it to swiper element
    // @ts-ignore
    Object.assign(swiperElRef.current, params);

    //  @ts-ignore
    swiperElRef.current.initialize();
    // listen for Swiper events using addEventListener
    // @ts-ignore
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    //   @ts-ignore
    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    // @ts-ignore
    <swiper-container ref={swiperElRef} init="false">
      {slides.map((slide) => (
        /* @ts-ignore */
        <swiper-slide>{slide}</swiper-slide>
      ))}
      {/* @ts-ignore */}
    </swiper-container>
  );
};
