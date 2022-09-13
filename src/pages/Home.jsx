import React from "react";
import Hero from "../components/sections/Hero";
import AboutUs from "../components/sections/AboutUs";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
