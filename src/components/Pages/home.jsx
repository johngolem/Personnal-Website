import React from "react";
import Main from "../main/Services";
import Contact from "../../components/contact/Contact";
// import Navbar from "../../components/navbar/navbar";
// import Services from "../../components/services/Services";
// import Nav from "./components/nav/Nav";
import Navb from "../../components/navbar/navboot";
import MainNav from "../../components/navbar/pato";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}

      <MainNav />
      {/* <Navb /> */}
      <Main />
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <Contact />
    </>
  );
};

export default Home;
