import Primage2 from "../../../assets/images/primage2.png";

const coreValueItems = [
  {
    title: "Integrity",
    description:
      "We are commitment fostering a culture of accountability, taking ownership of actions and decisions to continuously improve.",
  },
  {
    title: "Collaboration",
    description:
      "SufPay prioritizes open communication and collaboration with teams members and clients, ensuring our solutions align perfectly with specific needs.",
    descriptionClassName: "font-medium",
  },
];

function CoreValueItem({ title, description, descriptionClassName = "" }) {
  return (
    <div>
      <h3 className="text-[24px] font-medium tracking-[-0.03em] text-[#2C2C2C]">
        {title}
      </h3>
      <p
        className={`mt-1 max-w-[620px] text-[15px] leading-[1.65] text-[#2C2C2C] lg:text-[18px] ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  );
}

export default function CoreValues() {
  return (
    <section className="bg-[#f9f9f9] px-4 py-12 sm:px-6 lg:px-[160px] lg:py-28">
      <div className="mx-auto max-w-[2000px]">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_1.55fr] lg:items-start lg:gap-8">
          <div className="max-w-[760px] lg:text-justify">
            <h2 className="text-[24px] text-[#2C2C2C] lg:text-[32px]">
              Core Values
            </h2>
            <p className="mt-4 leading-[1.65] text-[#2C2C2C] lg:text-[18px]">
              SufPay's foundation rests upon three core values: integrity,
              excellence, and collaboration. These values permeate every aspect
              of their operations, guiding interactions with clients, partners,
              and employees.
            </p>

            <div className="mt-8 space-y-8 lg:mt-10 lg:space-y-10">
              {coreValueItems.map((item) => (
                <CoreValueItem key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div className="rounded-[15px] bg-[#637524] p-5 shadow-[0_18px_38px_rgba(0,0,0,0.08)]">
            <div className="grid gap-6 lg:grid-cols-[0.89fr_1.01fr]">
              <div className="relative order-2 rounded-[20px] lg:order-1">
                <img
                  src={Primage2}
                  alt="Industrial facility"
                  className="lg:max-h-[550px] w-full object-contain"
                />

                <button
                  type="button"
                  className="absolute bottom-1 -right-[60px] flex -translate-x-1/2 items-center gap-3 rounded-full bg-[#B4C243] px-[20px] py-[10px] text-[14px] font-medium text-[#2f3129] shadow-[0_8px_18px_rgba(0,0,0,0.16)] lg:-right-[65px]"
                >
                  <span className="whitespace-nowrap">Visit Page</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2f3129] text-white">
                    {"\u27A4"}
                  </span>
                </button>
              </div>

              <div className="order-1 flex flex-col justify-center text-[#FFFFFF] lg:order-2">
                <div>
                  <h3 className="text-[24px] font-semibold leading-[1.06]">
                    Industrial Technology &amp; Infrastructure
                  </h3>
                  <p className="mt-2 max-w-[420px] text-[18px] leading-[1.7]">
                    We support the backbone of development with innovative tools
                    and systems {"\u2014"} from smart energy solutions to
                    large-scale engineering projects. Our focus is
                    sustainability, efficiency, and long-term impact.
                  </p>
                </div>

                <div className="mt-4 lg:mt-8">
                  <h4 className="text-[24px] font-medium">Excellence</h4>
                  <p className="mt-2 max-w-[420px] text-[18px] leading-[1.7]">
                    Delivering exceptional quality in services and products is
                    paramount, with the sole goal of ensuring they exceed client
                    expectations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
