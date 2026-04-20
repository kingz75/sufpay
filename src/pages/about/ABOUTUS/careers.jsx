import Abimage from "../../../assets/images/abimage5.png";

export default function Careers() {
  return (
    <section className="bg-[#F9F9F9] px-4 py-8 sm:px-6 md:px-10 lg:px-[160px] lg:py-20">
      <div className="mx-auto max-w-[2000px]">
        <h2 className="text-center text-[22px] sm:text-[32px] lg:text-[40px] font-medium text-[#2C2C2C]">
          Sufpay Careers
        </h2>

        <div className="mt-6 lg:mt-10 grid overflow-hidden rounded-[10px] bg-[#637524] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col px-6 py-8 text-[#FFFFFF] sm:px-8 sm:py-10 lg:px-10 lg:py-24">
            <div>
              <h3 className="text-[22px] sm:text-[28px] lg:text-[40px] font-semibold leading-tight lg:mt-4">
                Internships &amp; Graduate Program
              </h3>
              <p className="mt-2 lg:mt-5 text-[14px] lg:text-[15px] leading-7 lg:leading-8 text-[#FFFFFF]">
                Launch your career with hand-on experience in global
                infrastructure projects. Our 24-month graduate program offers
                rotation across 3 continents.
              </p>
            </div>

            <button
              type="button"
              className="mt-4 lg:mt-8 inline-flex w-full sm:w-fit items-center justify-center rounded-xl bg-[#B4C243] px-8 py-3 text-sm font-semibold text-[#FFFFFF] transition hover:bg-[#e6ec95]"
            >
              Explore more
            </button>
          </div>

          <div className="w-full">
            <img
              src={Abimage}
              alt="Career team"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
