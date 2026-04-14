import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Mainicon from "../assets/icons/mainicon.svg";

const footerLinkClass =
  "block w-fit text-[16px] font-medium leading- text-[#f1f3dd] transition-colors duration-200 hover:text-white";

const serviceLinks = [
  { label: "Digital Payment" },
  { label: "Payment Management" },
  { label: "Finance" },
  { label: "ICT Management" },
  { label: "Security Services" },
  { label: "Specialized Services" },
];

const companyLinks = [
  { label: "About Us", to: "/about/aboutus" },
  { label: "Projects", to: "/projects" },
  { label: "Partners" },
  { label: "Careers" },
  { label: "Contact", to: "/contact" },
];

const policyLinks = [
  { label: "Privacy Policy" },
  { label: "Terms of Service" },
  { label: "Cookie Policy" },
];

function FooterItem({ item }) {
  if (item.to) {
    return (
      <Link to={item.to} className={footerLinkClass}>
        {item.label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={`${footerLinkClass} bg-transparent p-0 text-left`}
      onClick={(event) => event.preventDefault()}
    >
      {item.label}
    </button>
  );
}

function SocialButton({ label, children, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center text-[#f1f3dd] transition-transform duration-200 hover:-translate-y-0.5 hover:text-white"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#637524] text-[#f1f3dd]">
      <div className="mx-auto max-w-[2000px] px-4 py-10 sm:px-6 lg:px-[100px] lg:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.9fr_0.7fr_0.7fr] lg:gap-12">
          <div className="max-w-[380px]">
            <Link to="/" className="inline-flex">
              <img
                src={Mainicon}
                alt="Sufpay"
                className="h-[58px] w-auto sm:h-[62px]"
              />
            </Link>

            <p className="mt-6 max-w-[360px] text-[16px] leading-6 font-medium text-[#f3f4df]">
              Building secure financial technology and digital infrastructure
              that powers the future of payments and innovation in Nigeria.
            </p>

            <div className="mt-8 flex items-center gap-8 text-[22px]">
              <SocialButton label="Instagram" href="https://instagram.com">
                <FaInstagram />
              </SocialButton>
              <SocialButton label="Facebook" href="https://facebook.com">
                <FaFacebookF />
              </SocialButton>
              <SocialButton label="LinkedIn" href="https://linkedin.com">
                <FaLinkedinIn />
              </SocialButton>
              <SocialButton label="X" href="https://twitter.com">
                <FaXTwitter />
              </SocialButton>
            </div>
          </div>

          <div className="lg:pt-14">
            <nav className="flex flex-col font-extrabold gap-[5px]">
              {serviceLinks.map((item) => (
                <FooterItem key={item.label} item={item} />
              ))}
            </nav>
          </div>

          <div className="lg:pt-14">
            <nav className="flex flex-col gap-[5px]">
              {companyLinks.map((item) => (
                <FooterItem key={item.label} item={item} />
              ))}
            </nav>
          </div>

          <div className="lg:pt-14">
            <nav className="flex flex-col gap-[5px]">
              {policyLinks.map((item) => (
                <FooterItem key={item.label} item={item} />
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-14 pt-1">
          <p className="text-[13px] font-medium text-[#f3f4df]">
            © 2025 Sufpay. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
