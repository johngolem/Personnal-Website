import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar";
import Services from "./components/services/Services";
import Nav from "./components/nav/Nav";

const App = () => {
  return (
    <>
      <Navbar />
      <Nav />
      <About />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
      {/* <Footer /> */}
    </>
  );
};

export default App;
