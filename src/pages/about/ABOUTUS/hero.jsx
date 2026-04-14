import Aboutbg from "../../../assets/back/aboutbg.png";
import heroImage from "../../../assets/images/abimage1.png";

export default function Hero() {
  return (
    <section
      className="   text-white   bg-cover bg-center items-center "
      style={{
        backgroundImage: `url(${Aboutbg})`,
      }}
    >
      <div className="mx-auto  max-w-[2000px]  grid grid-cols-[1.45fr_1.05fr] gap-14 px-4  pt-[96px] sm:px-6  lg: lg:px-[160px] lg:pt-[140px]  ">
        <div className="max-w-[650px]">
          <h1 className="mt-20  text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-[58px]">
            Precision Transparency in Financial Intelligence
          </h1>
          <p className="mt-6  text-base leading-8 text-white/85 sm:text-lg">
            The modern payment ecosystem is built on legacy foundations that
            intentionally obscure cost and flow. We decode complex
            infrastructure through forensic data-driven clarity, empowering
            institutional decision-makers with the raw truth of transaction
            logic.
          </p>
        </div>

        <div className="  ">
          <div className="max-w-[650px] ">
            <img
              src={heroImage}
              alt="Sufpay team"
              className="   "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
