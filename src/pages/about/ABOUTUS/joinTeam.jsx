export default function JoinTeam() {
  const highlights = [
    "A place to grow with a team that values clarity and consistency.",
    "Hands-on work across products, people, and real business outcomes.",
    "A culture built around accountability, learning, and momentum.",
  ];

  return (
    <section className="bg-[#707882] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/65">
            Join Us
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Join Our Team
          </h2>
          <p className="mt-5 max-w-[520px] text-[15px] leading-8 text-white/85">
            We are always interested in people who can help shape secure,
            useful, and trustworthy financial experiences.
          </p>

          <div className="mt-8 space-y-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-2 h-3 w-3 shrink-0 rounded-sm bg-[#dbe37d]" />
                <p className="text-[15px] leading-7 text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] bg-white p-5 shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium text-[#4b5144]">
              Full Name
              <input
                type="text"
                placeholder="Your name"
                className="rounded-xl border border-[#dfe4d6] bg-[#fafbf8] px-4 py-3 text-sm outline-none transition focus:border-[#6c7d22]"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-[#4b5144]">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                className="rounded-xl border border-[#dfe4d6] bg-[#fafbf8] px-4 py-3 text-sm outline-none transition focus:border-[#6c7d22]"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-[#4b5144]">
              Position
              <input
                type="text"
                placeholder="Role of interest"
                className="rounded-xl border border-[#dfe4d6] bg-[#fafbf8] px-4 py-3 text-sm outline-none transition focus:border-[#6c7d22]"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-[#4b5144]">
              Phone
              <input
                type="tel"
                placeholder="+234 ..."
                className="rounded-xl border border-[#dfe4d6] bg-[#fafbf8] px-4 py-3 text-sm outline-none transition focus:border-[#6c7d22]"
              />
            </label>
          </div>

          <label className="mt-4 flex flex-col gap-2 text-sm font-medium text-[#4b5144]">
            Tell us about yourself
            <textarea
              rows={4}
              placeholder="Share a short note about your experience and interests"
              className="rounded-xl border border-[#dfe4d6] bg-[#fafbf8] px-4 py-3 text-sm outline-none transition focus:border-[#6c7d22]"
            />
          </label>

          <button
            type="button"
            className="mt-5 inline-flex rounded-full bg-[#f4a12f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ea9620]"
          >
            Send Application
          </button>
        </div>
      </div>
    </section>
  );
}
