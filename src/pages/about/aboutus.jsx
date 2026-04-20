import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./ABOUTUS/hero";
import Intro from "./ABOUTUS/intro";
import Framework from "./ABOUTUS/framework";
import Mission from "./ABOUTUS/mission";
import Banner from "./ABOUTUS/banner";
import Reach from "./ABOUTUS/reach";
import Careers from "./ABOUTUS/careers";
import JoinTeam from "./ABOUTUS/joinTeam";

export default function Aboutus() {
  const location = useLocation();

  // Scroll to section whenever the hash changes (including when already on this page)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <main className="bg-[#F9F9F9] lg:pb-20 pb-10">
      <Hero />
      <Intro />
      <Framework />
      <Mission />
      <Banner />
      <Reach />
      <Careers />
      <JoinTeam />
    </main>
  );
}
