const cards = [
  {
    step: "01",
    title: "Digital Payment",
    text: "Secure rails for collecting, moving, and reconciling payments with confidence.",
  },
  {
    step: "02",
    title: "Payment Management",
    text: "Practical tools for approvals, oversight, tracking, and transaction visibility.",
  },
  {
    step: "03",
    title: "Finance",
    text: "Reliable financial operations designed for clarity, growth, and resilience.",
  },
];

export default function Framework() {
  return (
    <section className="bg-[#fbfbf5] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7b8626]">
            Framework
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[#1f241a] sm:text-4xl">
            The Qafar framework
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[26px] border border-[#e7ebdd] bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef2dd] text-lg font-semibold text-[#6c7d22]">
                  {card.step}
                </div>
              </div>

              <h3 className="mt-5 text-center text-xl font-semibold text-[#1f241a]">
                {card.title}
              </h3>
              <p className="mt-3 text-center text-[15px] leading-7 text-[#5d6358]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
