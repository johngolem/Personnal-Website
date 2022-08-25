// import React, { useRef, useState } from "react";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import "./testimonials.css";
import avt1 from "../../assets/avatar1.jpeg";

const data = [
  {
    avatar: avt1,
    name: "Nottech Lab",
    review:
      "loren ipsum dolor sit amet consectetur adipisicing elit. Laboriosam velit dolores perferendis minima ab laudantium hic sed! Corrupti itaque dignissimos ea beatae similique, numquam nostrum suscipit ducimus unde temporibus amet!",
  },
  {
    avatar: avt1,
    name: "Nottech Lab",
    review:
      "loren ipsum dolor sit amet consectetur adipisicing elit. Laboriosam velit dolores perferendis minima ab laudantium hic sed! Corrupti itaque dignissimos ea beatae similique, numquam nostrum suscipit ducimus unde temporibus amet!",
  },
  {
    avatar: avt1,
    name: "Nottech Lab",
    review:
      "loren ipsum dolor sit amet consectetur adipisicing elit. Laboriosam velit dolores perferendis minima ab laudantium hic sed! Corrupti itaque dignissimos ea beatae similique, numquam nostrum suscipit ducimus unde temporibus amet!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews From Clients</h5>
      <h2>What people say</h2>

      <Swiper
        pagination={{
          dynamicBullets: false,
        }}
        modules={[Pagination]}
        className="container testimonials-container "
        // className=" container testimonials-container">
      >
        {data.map(({ avatar, name, review }) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
