function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 sm:h-8 sm:w-8">
      <path
        d="M4 6.75A1.75 1.75 0 0 1 5.75 5h12.5A1.75 1.75 0 0 1 20 6.75v10.5A1.75 1.75 0 0 1 18.25 19H5.75A1.75 1.75 0 0 1 4 17.25V6.75Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m6 8 6 4.5L18 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 sm:h-8 sm:w-8">
      <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3.75 12h16.5M12 3.75c2.5 2.3 3.75 4.9 3.75 8.25S14.5 17.95 12 20.25c-2.5-2.3-3.75-4.9-3.75-8.25S9.5 6.05 12 3.75Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactRow({ icon, title, value }) {
  return (
    <div className="flex items-center gap-3 lg:gap-4">
      <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-md bg-white text-[#B4C243] shadow-[0_1px_0_rgba(0,0,0,0.03)]">
        {icon}
      </div>
      <div>
        <p className="text-[12px] sm:text-[15px] font-medium uppercase tracking-[0.04em] text-[#F9F9F9]">
          {title}
        </p>
        <p className="mt-0.5 lg:mt-1 text-[12px] sm:text-[15px] leading-tight text-[#F9F9F9] break-all">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function JoinTeam() {
  return (
    <section className="bg-[#7C8794] p-4 sm:p-6 md:p-8 lg:px-[200px] lg:py-14">
      <div className="mx-auto max-w-[2000px] rounded-lg bg-[#7C8794] px-4 py-10 sm:px-6 lg:px-0 lg:py-0">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-[70px] lg:items-center">
          {/* Left: text + contact info */}
          <div className="text-white">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-semibold leading-[1.1]">
              Join Our Team
            </h2>
            <p className="mt-3 text-[13px] sm:text-[15px] leading-[1.7] text-white/90">
              Can't find the perfect role? Send us your resume for our talent
              pool, and we'll reach out when a match opens up.
            </p>

            <div className="mt-6 lg:mt-8 space-y-5 lg:space-y-6">
              <ContactRow
                icon={<MailIcon />}
                title="Email Requirement"
                value="careers@sufpayenergy.com"
              />
              <ContactRow
                icon={<GlobeIcon />}
                title="Our Website"
                value="www.sufpayenergy.com/careers"
              />
            </div>
          </div>

          {/* Right: form */}
          <div className="w-full rounded-[10px] bg-white px-5 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:px-7 sm:py-7">
            <form className="space-y-5">
              <label className="block">
                <span className="text-[11px] font-medium uppercase tracking-[0.02em] text-[#5c6269]">
                  Full Name
                </span>
                <input
                  type="text"
                  placeholder="E.g James Christman"
                  className="mt-2 h-11 w-full rounded-lg border border-transparent bg-[#f5f6f7] px-4 text-[13px] text-[#404751] outline-none placeholder:text-[#7f878f] focus:border-[#d7dbe0]"
                />
              </label>

              <div>
                <span className="text-[11px] font-medium uppercase tracking-[0.02em] text-[#5c6269]">
                  Area of Interest
                </span>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="relative flex-1">
                    <select className="h-11 w-full appearance-none rounded-lg border border-transparent bg-[#f5f6f7] px-4 pr-10 text-[13px] text-[#404751] outline-none focus:border-[#d7dbe0]">
                      <option>Engineering</option>
                      <option>Product</option>
                      <option>Design</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#4b4f55]">
                      <ChevronDownIcon />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="h-11 w-full sm:w-[122px] rounded-lg bg-[#f69312] px-6 text-[13px] font-semibold text-white transition-colors hover:bg-[#e98804]"
                  >
                    Upload CV
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="mt-2 h-12 w-full rounded-lg bg-[#7b8b29] text-[13px] font-medium text-white transition-colors hover:bg-[#6e7e23]"
              >
                Register for update
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
