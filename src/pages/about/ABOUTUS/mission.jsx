const missionImage = "/back/pa1.jpg";
const missionInsetImage = "/back/proimage3.jpg";

export default function Mission() {
  return (
    <section className="bg-[#f4f1e3] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative">
          <img
            src={missionImage}
            alt="Community impact"
            className="h-[350px] w-full rounded-[30px] object-cover object-center shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:h-[430px]"
          />
          <img
            src={missionInsetImage}
            alt="Community support"
            className="absolute -right-2 bottom-5 h-[170px] w-[42%] rounded-[24px] border-[10px] border-[#f4f1e3] object-cover object-center shadow-[0_16px_45px_rgba(0,0,0,0.16)] sm:h-[210px]"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7b8626]">
            Our Mission
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#1f241a] sm:text-4xl">
            Building a better financial experience
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[#5d6358]">
            We exist to make financial operations simpler, safer, and more
            transparent for businesses that need dependable digital
            infrastructure every day.
          </p>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#1f241a]">
                Our Mission
              </h3>
              <p className="mt-3 text-[15px] leading-8 text-[#5d6358]">
                To deliver secure financial technology that helps organisations
                manage payments, control workflows, and build trust with every
                transaction.
              </p>
            </div>

            <div className="border-t border-[#d8dcc8] pt-6">
              <h3 className="text-xl font-semibold text-[#1f241a]">
                Our Vision
              </h3>
              <p className="mt-3 text-[15px] leading-8 text-[#5d6358]">
                To become a trusted partner for modern businesses seeking
                clarity, efficiency, and long-term financial resilience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
