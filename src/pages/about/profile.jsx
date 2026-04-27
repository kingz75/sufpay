import Hero from "./PROFILE/hero";
import Advantages from "./PROFILE/advantages";
import CoreValues from "./PROFILE/coreValues";
import Showcase from "./PROFILE/showcase";

export default function Profile() {
  return (
    <main className="bg-[#F9F9F9]">
      <Hero />
      <Advantages />
       <CoreValues />
      <Showcase />
    </main>
  );
}
