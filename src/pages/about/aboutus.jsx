import Hero from "./ABOUTUS/hero";
import Intro from "./ABOUTUS/intro";
import Framework from "./ABOUTUS/framework";
import Mission from "./ABOUTUS/mission";
import Banner from "./ABOUTUS/banner";
import Reach from "./ABOUTUS/reach";
import Careers from "./ABOUTUS/careers";
import JoinTeam from "./ABOUTUS/joinTeam";

export default function Aboutus() {
  return (
    <main className="bg-white">
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
