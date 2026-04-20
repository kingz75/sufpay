import Aboutbg from "../../../assets/back/profilebg.png";
import heroImage from "../../../assets/images/primage1.png";
import Lock from "../../../assets/icons/lock.svg";
import Car from "../../../assets/icons/car.svg";
import Worker from "../../../assets/icons/worker.svg";
import App from "../../../assets/icons/app.svg";

export default function Hero() {
  return (
    <section className="flex flex-col overflow-x-hidden lg:h-screen lg:overflow-hidden">
      <div
        className="flex-1 bg-cover bg-center lg:h-[90vh] bg-no-repeat pt-24 sm:pt-28 lg:pt-12"
        style={{
          backgroundImage: `url(${Aboutbg})`,
        }}
      >
        <div className="mx-auto flex h-full max-w-[2000px] flex-col justify-center gap-6 px-4 py-10 sm:px-6 md:py-14 lg:grid lg:grid-cols-[1.45fr_0.80fr] lg:items-center lg:gap-14 lg:px-[160px] lg:py-12">
          <div className="max-w-[550px] lg:pt-12">
            <h1 className="max-w-[560px] text-[clamp(2.45rem,8.8vw,58px)] font-semibold leading-[1.05] text-[#637524] sm:text-[clamp(3rem,6vw,58px)]">
              Pioneering <span className="text-[#3C3C3C]">Digital</span> Future
              in Africa.
            </h1>
            <p className="mt-4 max-w-[520px] text-[clamp(1rem,3.8vw,1.125rem)] leading-[1.65] text-[#2C2C2C] sm:mt-6 sm:leading-8">
              We are at the forefront of financial technology innovation,
              dedicated to revolutionizing the landscape of digital transactions
              and industrial operations
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[290px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px]">
              <img src={heroImage} alt="Sufpay team" className="h-auto w-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee ticker bar */}
      <div className="flex min-h-[72px] shrink-0 items-center overflow-hidden bg-[#637524] py-3 sm:min-h-[80px] lg:min-h-[80px] lg:h-[10vh] lg:py-0">
        <div className="flex w-max animate-marquee items-center whitespace-nowrap">
          {[1, 2].map((_, i) => (
            <div key={i} className="flex items-center">
              <div className="mx-4 flex shrink-0 items-center whitespace-nowrap text-[14px] font-bold text-[#FFFFFF] sm:mx-6 sm:text-[16px] lg:mx-8 lg:text-[20px]">
                <img src={Lock} alt="" className="mr-1 h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
                <p>Security &amp; Surveillance</p>
              </div>

              <div className="mx-4 flex shrink-0 items-center whitespace-nowrap text-[14px] font-bold text-[#FFFFFF] sm:mx-6 sm:text-[16px] lg:mx-8 lg:text-[20px]">
                <img src={Car} alt="" className="mr-1 h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
                <p>Electric Vehicle Supply</p>
              </div>

              <div className="mx-4 flex shrink-0 items-center whitespace-nowrap text-[14px] font-bold text-[#FFFFFF] sm:mx-6 sm:text-[16px] lg:mx-8 lg:text-[20px]">
                <img src={Worker} alt="" className="mr-1 h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
                <p>General Contractor</p>
              </div>

              <div className="mx-4 flex shrink-0 items-center whitespace-nowrap text-[14px] font-bold text-[#FFFFFF] sm:mx-6 sm:text-[16px] lg:mx-8 lg:text-[20px]">
                <img src={App} alt="" className="mr-1 h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
                <p>Merchant App</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
