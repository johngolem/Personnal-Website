import React from "react";
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

      <div className=" container testimonials-container">
        {data.map(({ avatar, name, review }) => {
          return (
            <article className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
