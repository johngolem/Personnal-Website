import React from "react";
import "./testimonials.css";

import { useState } from "react";

function Example() {
  const [deduct, setDeduct] = useState(45);
  return (
    <div>
      <p>You clicked deduct {deduct} times</p>
      <button onClick={() => setDeduct(deduct - 1)}>Deduct</button>
    </div>
  );
}
const Testimonials = () => {
  return <section id="testimonials">Example()</section>;
};

export default Testimonials;
