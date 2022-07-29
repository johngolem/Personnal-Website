import React from "react";
import "./testimonials.css";
import avt1 from "../../assets/avatar1.jpeg";

import { useState } from "react";

// function Example() {
//   const [deduct, setDeduct] = useState(45);
//   return (
//     <div>
//       <p>You clicked deduct {deduct} times</p>
//       <button onClick={() => setDeduct(deduct - 1)}>Deduct</button>
//     </div>
//   );
// }
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews From Clients</h5>
      <h2>What people say</h2>

      <div className=" container testimonials-container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={avt1} alt="avatar1" />
          </div>
          <h5 className="client__name">Nottech Lab</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            velit dolores perferendis minima ab laudantium hic sed! Corrupti
            itaque dignissimos ea beatae similique, numquam nostrum suscipit
            ducimus unde temporibus amet!
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={avt1} alt="avatar1" />
          </div>
          <h5 className="client__name">Nottech Lab</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            velit dolores perferendis minima ab laudantium hic sed! Corrupti
            itaque dignissimos ea beatae similique, numquam nostrum suscipit
            ducimus unde temporibus amet!
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={avt1} alt="avatar1" />
          </div>
          <h5 className="client__name">Nottech Lab</h5>
          <small className="client__review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
            velit dolores perferendis minima ab laudantium hic sed! Corrupti
            itaque dignissimos ea beatae similique, numquam nostrum suscipit
            ducimus unde temporibus amet!
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
