"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css/styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img className="object-cover  h-full w-full"
            src="https://imgs.search.brave.com/IVODDHSOTepWuWiszAbDG-tYUCqu837Wzele6VH2vOk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lY29t/bWVyY2UtcGxhdGZv/cm1zLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wMS9z/aG9waWZ5LW5ldy1v/Y3RvYmVyLW9mZmVy/LTEwMjR4NTc2LnBu/Zw"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide ><img src="https://imgs.search.brave.com/5t2G6aiXT5XqQOvKOwNRYsjRd1-hJHMcCZNfjj1qz-I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEzLzgyLzkzLzI2/LzM2MF9GXzEzODI5/MzI2MzZfUmtUU3ND/T2pyWWtWNmxKUmU3/ZnQxQk9QTEFYT21Y/bksuanBn" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://imgs.search.brave.com/WjlbvFJW1ykTqrysZlgW3vln7QQQnzekfGghINq8sSM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzkyLzIxLzA5/LzM2MF9GXzM5MjIx/MDkyOF9KZ21QWnNH/dUtTeWU1RnFPb0N5/alNHUlRGN2ZKSWdP/Uy5qcGc" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://imgs.search.brave.com/WPcl0UvCZpE-okyu5aU6FDLxBeAxR9FZR-JRB5YDA20/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAw/NzAvNzAzMi9hcnRp/Y2xlcy9lY29tbWVy/Y2VfMjBwbGF0Zm9y/bXNfOTIwYWMyNTkt/NjgwNS00MzNhLThj/YmItMzI0MGE2Y2Fm/NTc0LnBuZz92PTE3/NTUzMDAwNzAmb3Jp/Z2luYWxXaWR0aD0x/ODQ4Jm9yaWdpbmFs/SGVpZ2h0PTc4Mg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
