import Aboutbg from "../../../assets/back/aboutbg.png";
import heroImage from "../../../assets/images/abimage1.png";

export default function Hero() {
  return (
    <section
      className="   text-[#FFFFFF] h-[90vh]   bg-cover bg-center items-center flex flex-col overflow-x-hidden  lg:overflow-hidden "
      style={{
        backgroundImage: `url(${Aboutbg})`,
      }}
    >
      <div className="lg:mx-auto  lg:max-w-[2000px]  grid lg:grid-cols-[1.45fr_1.05fr] gap-6 lg:gap-14 px-4  pt-[96px] sm:px-6  lg: lg:px-[160px] lg:pt-[140px]  ">
        <div className="max-w-[650px]">
          <h1 className="lg:mt-20 mt-3  text-[24px] font-semibold leading-[1.05] text-[#FFFFFF] sm:text-5xl lg:text-[48px]">
            Precision Transparency in Financial Intelligence
          </h1>
          <p className="lg:mt-6 mt-2  text-[15px] leading-8 text-[#FFFFFF] lg:text-[18px]">
            The modern payment ecosystem is built on legacy foundations that
            intentionally obscure cost and flow. We decode complex
            infrastructure through forensic data-driven clarity, empowering
            institutional decision-makers with the raw truth of transaction
            logic.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end  ">
          <div className="w-full max-w-[300px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] ">
            <img src={heroImage} alt="Sufpay team" className="   " />
          </div>
        </div>
        
      </div>
    </section>
  );
}
