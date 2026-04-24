import { NavLink, Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Mainicon from "../../src/assets/icons/mainicon.svg";

const activeLinkClass = ({ isActive }, isAboutActive) =>
  `transition-colors duration-200 ${
    isAboutActive ? "text-white" : (isActive ? "text-[#637524]" : "text-[#2C2C2C] hover:text-[#6f7f1f]")
  }`;

const dropdownTriggerClass = (active, isAboutActive) =>
  `flex items-center gap-1 transition-colors duration-200 ${
    isAboutActive ? "text-white" : (active ? "text-[#637524]" : "text-[#2f3129] hover:text-[#6f7f1f]")
  }`;

const dropdownLinkClass = ({ isActive }) =>
  `block rounded-xl px-4 py-2 text-sm transition-colors ${
    isActive
      ? "bg-[#eef3df] text-[#637524]"
      : "text-[#2f3129] hover:bg-[#f5f7ef] hover:text-[#6f7f1f]"
  }`;

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const isAboutActive = location.pathname === "/about/aboutus" || location.pathname === "/about";
  const isProductsActive = location.pathname.startsWith("/product");

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isLargeScreen) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 78) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isLargeScreen]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setAboutOpen(false);
    setProductsOpen(false);
    setMobileAboutOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileAboutOpen(false);
    setMobileProductsOpen(false);
  };

  const toggleMobileMenu = () => {
    if (menuOpen) {
      setMobileAboutOpen(false);
      setMobileProductsOpen(false);
    }

    setMenuOpen((open) => !open);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[100] transition-transform backdrop-blur duration-300 ${isLargeScreen ? (visible ? "translate-y-0" : "-translate-y-full") : "translate-y-0"} bg-white lg:bg-transparent`}
    >
      <div className="mx-auto flex h-[78px] max-w-[2000px] items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-[160px]">
        <div className="flex items-center gap-6 lg:gap-8">
          <Link to="/" className="shrink-0">
            <img src={Mainicon} alt="Sufpay" className="w-[90px] sm:w-[110px] lg:w-auto" />
          </Link>

          <nav className="hidden items-center gap-5 text-[14px] font-medium lg:flex xl:gap-6 xl:text-[15px]">
            <NavLink to="/" className={(props) => activeLinkClass(props, isAboutActive)}>
              Home
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => {
                setAboutOpen(true);
                setProductsOpen(false);
              }}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                type="button"
                className={dropdownTriggerClass(isAboutActive || aboutOpen, isAboutActive)}
                onClick={() => setAboutOpen((open) => !open)}
                aria-expanded={aboutOpen}
                aria-haspopup="menu"
              >
                <span>About</span>
                {aboutOpen ? (
                  <FaChevronUp size={10} />
                ) : (
                  <FaChevronDown size={10} />
                )}
              </button>

              {aboutOpen && (
                <div className="absolute left-0 top-full z-20  w-[200px] rounded-2xl border border-[#e7ebdd] bg-white p-2 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                  <NavLink
                    to="/about/aboutus"
                    className={dropdownLinkClass}
                    onClick={() => setAboutOpen(false)}
                  >
                    ❚ About Us
                  </NavLink>
                  <NavLink
                    to="/about/profile"
                    className={dropdownLinkClass}
                    onClick={() => setAboutOpen(false)}
                  >
                    ❚ Company Profile
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/projects" className={(props) => activeLinkClass(props, isAboutActive)}>
              Projects
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => {
                setProductsOpen(true);
                setAboutOpen(false);
              }}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                className={dropdownTriggerClass(
                  isProductsActive || productsOpen,
                  isAboutActive
                )}
                onClick={() => setProductsOpen((open) => !open)}
                aria-expanded={productsOpen}
                aria-haspopup="menu"
              >
                <span>Products</span>
                {productsOpen ? (
                  <FaChevronUp size={10} />
                ) : (
                  <FaChevronDown size={10} />
                )}
              </button>

              {productsOpen && (
                <div className="absolute left-0 top-full z-20  w-[300px] rounded-2xl border border-[#e7ebdd] bg-white p-2 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                  <a
                    href="/about/aboutus#reach"
                    className="block rounded-xl px-4 py-2 text-sm transition-colors text-[#2f3129] hover:bg-[#f5f7ef] hover:text-[#6f7f1f]"
                    onClick={() => setProductsOpen(false)}
                  >
                    ❚ Sufpay App
                  </a>
                  <a
                    href="https://merchant.sufpay.ng"
                    className="block rounded-xl px-4 py-2 text-sm transition-colors text-[#2f3129] hover:bg-[#f5f7ef] hover:text-[#6f7f1f]"
                    onClick={() => setProductsOpen(false)}
                  >
                    ❚ Merchant
                  </a>
                  <a
                    href="/about/aboutus#framework"
                    className="block rounded-xl px-4 py-2 text-sm transition-colors text-[#2f3129] hover:bg-[#f5f7ef] hover:text-[#6f7f1f]"
                    onClick={() => setProductsOpen(false)}
                  >
                    ❚ Toll Management System
                  </a>
                </div>
              )}
            </div>

            <NavLink to="/service" className={(props) => activeLinkClass(props, isAboutActive)}>
              Services
            </NavLink>

            <NavLink to="/contact" className={(props) => activeLinkClass(props, isAboutActive)}>
              Contact
            </NavLink>
          </nav>
        </div>
        <div className="hidden lg:flex items-center gap-4 text-[14px] font-medium  xl:gap-6 xl:text-[15px]">
          <a
            href="/developer-docs"
            className={`transition-colors duration-200 ${isAboutActive ? "text-white" : "text-[#2f3129] hover:text-[#6f7f1f]"}`}
          >
            Developer Docs
          </a>

          <NavLink to="/pricing" className={(props) => activeLinkClass(props, isAboutActive)}>
            Pricing
          </NavLink>

          <a
            href="https://merchant.sufpay.ng"
            className={`rounded-full px-5 py-2.5 text-sm font-semibold text-[#FFFFFF] shadow-sm transition hover:opacity-90 ${isAboutActive ? 'bg-[#B4C243]' : 'bg-[#637524]'}`}
          >
            Sign in
          </a>
        </div>

        <button
          type="button"
          className="rounded-full p-1.5 text-[#4E4E4E] lg:hidden"
          onClick={toggleMobileMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <AiOutlineClose className="text-[28px] sm:text-[33px]" />
          ) : (
            <AiOutlineMenu className="text-[28px] sm:text-[33px]" />
          )}
        </button>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 top-[78px] z-40 bg-black/15 lg:hidden"
            onClick={closeMobileMenu}
          />

          <div className="fixed left-0 right-0 top-[78px] z-50 border-t border-[#edf0e8] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] lg:hidden" style={{ maxHeight: 'calc(100dvh - 78px)', overflowY: 'auto' }}>
            <nav className="flex flex-col gap-2 px-4 py-4 pb-8 text-[15px] font-medium text-[#2f3129]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 transition-colors ${isActive
                    ? "bg-[#eef3df] text-[#6f7f1f]"
                    : "text-[#2f3129] hover:bg-[#f5f7ef] hover:text-[#6f7f1f]"
                  }`
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>

              <div className="rounded-2xl border border-[#edf0e8] bg-[#fafbf7] px-3 py-2">
                <button
                  type="button"
                  className={`flex w-full items-center justify-between transition-colors ${isAboutActive || mobileAboutOpen
                      ? "text-[#6f7f1f]"
                      : "text-[#2f3129] hover:text-[#6f7f1f]"
                    }`}
                  onClick={() => setMobileAboutOpen((open) => !open)}
                  aria-expanded={mobileAboutOpen}
                >
                  <span>About</span>
                  {mobileAboutOpen ? (
                    <FaChevronUp size={10} />
                  ) : (
                    <FaChevronDown size={10} />
                  )}
                </button>

                {mobileAboutOpen && (
                  <div className="mt-3 flex flex-col gap-1 pl-3">
                    <NavLink
                      to="/about/aboutus"
                      className={({ isActive }) =>
                        `rounded-xl px-3 py-2 text-sm transition-colors ${isActive
                          ? "bg-[#eef3df] text-[#6f7f1f]"
                          : "text-[#4b4f44] hover:bg-[#f5f7ef] hover:text-[#6f7f1f]"
                        }`
                      }
                      onClick={closeMobileMenu}
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      to="/about/profile"
                      className={({ isActive }) =>
                        `rounded-xl px-3 py-2 text-sm transition-colors ${isActive
                          ? "bg-[#eef3df] text-[#6f7f1f]"
                          : "text-[#4b4f44] hover:bg-[#f5f7ef] hover:text-[#6f7f1f]"
                        }`
                      }
                      onClick={closeMobileMenu}
                    >
                      Profile
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 transition-colors ${isActive
                    ? "bg-[#eef3df] text-[#6f7f1f]"
                    : "text-[#2f3129] hover:bg-[#f5f7ef] hover:text-[#6f7f1f]"
                  }`
                }
                onClick={closeMobileMenu}
              >
                Projects
              </NavLink>

              <div className="rounded-2xl border border-[#edf0e8] bg-[#fafbf7] px-3 py-2">
                <button
                  type="button"
                  className={`flex w-full items-center justify-between transition-colors ${isProductsActive || mobileProductsOpen
                      ? "text-[#6f7f1f]"
                      : "text-[#2f3129] hover:text-[#6f7f1f]"
                    }`}
                  onClick={() => setMobileProductsOpen((open) => !open)}
                  aria-expanded={mobileProductsOpen}
                >
                  <span>Products</span>
                  {mobileProductsOpen ? (
                    <FaChevronUp size={10} />
                  ) : (
                    <FaChevronDown size={10} />
                  )}
                </button>

                {mobileProductsOpen && (
                  <div className="mt-3 flex flex-col gap-1 pl-3">
                    <a
                      href="/about/aboutus#reach"
                      className="rounded-xl px-3 py-2 text-sm transition-colors text-[#4b4f44] hover:bg-[#f5f7ef] hover:text-[#6f7f1f]"
                      onClick={closeMobileMenu}
                    >
                      Sufpay App
                    </a>
                    <a
                      href="https://merchant.sufpay.ng/?return=%2Fmerchant%2Fhome"
                      className="rounded-xl px-3 py-2 text-sm transition-colors text-[#4b4f44] hover:bg-[#f5f7ef] hover:text-[#6f7f1f]"
                      onClick={closeMobileMenu}
                    >
                      Merchant
                    </a>
                    <a
                      href="/about/aboutus#framework"
                      className="rounded-xl px-3 py-2 text-sm transition-colors text-[#4b4f44] hover:bg-[#f5f7ef] hover:text-[#6f7f1f]"
                      onClick={closeMobileMenu}
                    >
                      Toll Management System
                    </a>
                  </div>
                )}
              </div>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 transition-colors ${isActive
                    ? "bg-[#eef3df] text-[#6f7f1f]"
                    : "text-[#2f3129] hover:bg-[#f5f7ef] hover:text-[#6f7f1f]"
                  }`
                }
                onClick={closeMobileMenu}
              >
                Services
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 transition-colors ${isActive
                    ? "bg-[#eef3df] text-[#6f7f1f]"
                    : "text-[#2f3129] hover:bg-[#f5f7ef] hover:text-[#6f7f1f]"
                  }`
                }
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>

              <a
                href="/developer-docs"
                className="rounded-xl px-3 py-2 text-[#2f3129] transition-colors hover:bg-[#f5f7ef] hover:text-[#6f7f1f]"
                onClick={closeMobileMenu}
              >
                Developer Docs
              </a>

              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 transition-colors ${isActive
                    ? "bg-[#eef3df] text-[#6f7f1f]"
                    : "text-[#2f3129] hover:bg-[#f5f7ef] hover:text-[#6f7f1f]"
                  }`
                }
                onClick={closeMobileMenu}
              >
                Pricing
              </NavLink>

              <a
                href="/signin"
                className={`mt-2 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 ${isAboutActive ? 'bg-[#B4C243]' : 'bg-[#6f7f1f]'}`}
                onClick={closeMobileMenu}
              >
                Sign in
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
