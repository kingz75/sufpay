import Abimage from "../../../assets/images/abimage2.png";

export default function Intro() {
  return (
    <section className="bg-[#F9F9F9] px-4 py-10 sm:px-6 md:px-10 lg:px-[160px] lg:py-20">
      <div className="mx-auto max-w-[2000px] grid gap-8 lg:grid-cols-[1.25fr_1.05fr] lg:gap-[71px] lg:items-center">
        <div>
          <p className="text-[22px] sm:text-[26px] lg:text-[32px] font-medium text-[#2C2C2C]">
            About Us
          </p>
          <h2 className="mt-2 lg:mt-4 text-[18px] sm:text-[20px] lg:text-[24px] text-[#2C2C2C]">
            Restoring Balance to an Opaque Market.
          </h2>
          <div className="mt-3 text-[14px] sm:text-[15px] lg:text-[18px] leading-[28px] sm:leading-[30px] lg:leading-8 text-[#4E4E4E] lg:text-justify">
            <p>
              SufPay is at the forefront of financial technology innovation in
              Nigeria, dedicated to revolutionizing the landscape of digital
              transactions. Our services extend to facilitating transactions,
              adhering to regulatory guidelines, and providing digital
              communication devices, networking solutions, and support services,
              including ISP and telecommunication equipment. In addition to our
              core payment solutions, we offer a broad range of ICT services
              such as IT training, digital multimedia, web design, and computer
              sales, serving as agents for foreign companies. We also provide
              comprehensive software and Internet services, including
              outsourcing, capacity building, and syndicated financing
              agreements. Our operations encompass general trading and
              contracts, marketing, sales, and distribution of goods, acting as
              manufacturers' representatives and general suppliers. Furthermore,
              we engage in all activities conducive to achieving our objectives,
              solidifying our position as a trusted partner for individuals,
              businesses, and government entities
            </p>
          </div>
        </div>

        <div className="w-full">
          <img
            src={Abimage}
            alt="Team collaboration"
            className="w-full rounded-xl object-center"
          />
        </div>
      </div>
    </section>
  );
}
