import ChartPlaceholder from "./chart-placeholder.svg";

const cards = [
  {
    title: "Global standards",
    text: "Structured processes that keep financial operations consistent and accountable.",
  },
  {
    title: "Local precision",
    text: "Practical execution that fits real business needs and local market realities.",
  },
];

function ReachCard({ index, title, text }) {
  return (
    <article className="rounded-[24px] border border-[#e3e7d6] bg-white p-6 shadow-[0_12px_28px_rgba(0,0,0,0.05)]">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eef2dd] text-sm font-semibold text-[#6c7d22]">
          0{index}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#1f241a]">{title}</h3>
          <p className="mt-2 text-[15px] leading-7 text-[#5d6358]">{text}</p>
        </div>
      </div>
    </article>
  );
}

export default function Reach() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7b8626]">
            Reach
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#1f241a] sm:text-4xl">
            Global Reach, Local Precision
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-[15px] leading-8 text-[#5d6358]">
            We combine broad operational thinking with a grounded execution
            model so teams can move confidently across markets without losing
            visibility.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[30px] border border-[#e7ebdd] bg-[#f9faf4] p-4 shadow-[0_14px_36px_rgba(0,0,0,0.05)] sm:p-6">
          <img
            src={ChartPlaceholder}
            alt="Chart placeholder"
            className="h-auto w-full"
          />
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {cards.map((card, index) => (
            <ReachCard
              key={card.title}
              index={index + 1}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
