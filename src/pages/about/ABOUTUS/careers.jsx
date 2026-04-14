const careersImage = "/back/proimage4.jpg";

export default function Careers() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.28em] text-[#7b8626]">
          Careers
        </p>
        <h2 className="mt-4 text-center text-3xl font-semibold text-[#1f241a] sm:text-4xl">
          Sufpay Careers
        </h2>

        <div className="mt-10 grid overflow-hidden rounded-[30px] bg-[#6c7d22] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-between px-6 py-8 text-white sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                Internships & Graduate Program
              </p>
              <h3 className="mt-4 max-w-[360px] text-3xl font-semibold leading-tight sm:text-[34px]">
                Learn, grow, and contribute to meaningful work.
              </h3>
              <p className="mt-5 max-w-[430px] text-[15px] leading-8 text-white/85">
                Join a team that values curiosity, ownership, and practical
                problem solving. We support new talent with the structure they
                need to grow.
              </p>
            </div>

            <button
              type="button"
              className="mt-8 inline-flex w-fit rounded-full bg-[#dbe37d] px-6 py-3 text-sm font-semibold text-[#48541a] transition hover:bg-[#e6ec95]"
            >
              Apply Now
            </button>
          </div>

          <div className="min-h-[280px] sm:min-h-[340px] lg:min-h-full">
            <img
              src={careersImage}
              alt="Career team"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
