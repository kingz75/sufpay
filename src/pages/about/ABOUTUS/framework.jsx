import Frame1 from "../../../assets/icons/Frame1.svg";
import Frame2 from "../../../assets/icons/Frame2.svg";
import Frame3 from "../../../assets/icons/Frame3.svg";

const cards = [
  {
    image: Frame1,
    title: "1. Raw Data Harvesting",
    text: "We bypass secondary reports to ingest raw telemetry directly from network endpoints, ensuring data integrity at the source..",
  },
  {
    image: Frame2,
    title: "2. Forensic Fee Analysis",
    text: "Algorithmically deconstructing interchange, scheme fees, and acquiring markups to identify systemic over-charging patterns..",
  },
  {
    image: Frame3,
    title: "3. Objective Benchmark Modeling",
    text: "Comparing your performance against synthetic optimal models to pinpoint exact areas of operational alpha and efficiency..",
  },
];

export default function Framework() {
  return (
    <section id="framework" className="bg-[#F9F9F9] py-10 lg:pb-20">
      <div className="mx-auto max-w-[2000px] px-4 sm:px-6 md:px-10 lg:px-[160px]">
        <div className="text-center">
          <h2 className="mt-4 text-[22px] sm:text-[28px] lg:text-[40px] font-medium text-[#1f241a]">
            The Quant Framework
          </h2>
        </div>

        <div className="mt-6 lg:mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className={`rounded-[26px] p-6 ${
                index === 1 ? "border border-[#637524]" : ""
              } bg-[#F9F9F9]`}
            >
              <div className="flex items-center justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-20 w-20 rounded-2xl object-cover"
                />
              </div>

              <h3 className="mt-3 lg:mt-5 text-center text-[18px] sm:text-[20px] font-medium text-[#1f241a]">
                {card.title}
              </h3>
              <p className="mt-2 lg:mt-3 text-center text-[14px] sm:text-[15px] leading-7 text-[#5d6358]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
