import Abimage from "../../../assets/images/abimage3.png";

export default function Mission() {
  return (
    <section className="bg-[#f4f1e3] px-4 py-10 sm:px-6 md:px-10 lg:px-[160px] lg:py-20">
      <div className="mx-auto max-w-[2000px] grid gap-8 lg:grid-cols-[1.05fr_1.25fr] lg:gap-[71px] lg:items-center">
        <div className="w-full">
          <img
            src={Abimage}
            alt="Community impact"
            className="w-full rounded-xl object-center"
          />
        </div>

        <div className="space-y-6 lg:space-y-8">
          <div>
            <h3 className="text-[22px] sm:text-[28px] lg:text-[36px] font-medium text-[#2C2C2C]">
              Our Mission
            </h3>
            <p className="mt-3 text-[14px] sm:text-[15px] lg:text-[18px] leading-7 sm:leading-8 text-[#4E4E4E]">
              SufPay empowers Nigerians with innovative and secure financial
              technology solutions, while providing a comprehensive suite of
              information and communication technology services and business
              support. We build trust through exceptional customer service and
              unwavering adherence to regulations, becoming the catalyst for
              seamless digital transformation for individuals, businesses, and
              governments in Nigeria.
            </p>
          </div>

          <div>
            <h3 className="text-[22px] sm:text-[28px] lg:text-[36px] font-medium text-[#2C2C2C]">
              Our Vision
            </h3>
            <p className="mt-3 text-[14px] sm:text-[15px] lg:text-[18px] leading-7 sm:leading-8 text-[#4E4E4E]">
              To become the trusted advisor and one-stop partner for digital
              transformation, enabling success for Individuals, Businesses,
              and Governments in Nigeria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
