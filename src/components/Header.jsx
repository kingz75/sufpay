import { NavLink, Link, useLocation } from "react-router-dom";
import { FaBars, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Mainicon from "../../src/assets/icons/mainicon.svg";

const activeLinkClass = ({ isActive }) =>
  `transition-colors duration-200 ${isActive ? "text-[#6f7f1f]" : "text-[#2f3129] hover:text-[#6f7f1f]"
  }`;

const dropdownTriggerClass = (active) =>
  `flex items-center gap-1 transition-colors duration-200 ${active ? "text-[#6f7f1f]" : "text-[#2f3129] hover:text-[#6f7f1f]"
  }`;

const dropdownLinkClass = ({ isActive }) =>
  `block rounded-xl px-4 py-2 text-sm transition-colors ${isActive
    ? "bg-[#eef3df] text-[#6f7f1f]"
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

  const isAboutActive = location.pathname.startsWith("/about");
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
      className={`fixed left-0 right-0 top-0 z-[100] transition-transform duration-300 ${isLargeScreen ? (visible ? "translate-y-0" : "-translate-y-full") : "translate-y-0"} bg-white lg:bg-transparent`}
    >
      <div className="mx-auto flex h-[78px] max-w-[2000px] items-center justify-between px-4 sm:px-6 lg:px-[160px]">
        <div className="flex items-center gap-6 lg:gap-8">
          <Link to="/" className="shrink-0">
            <img src={Mainicon} alt="Sufpay" className="w-[100px] lg:w-auto" />
          </Link>

          <nav className="hidden items-center gap-5 text-[14px] font-medium lg:flex xl:gap-6 xl:text-[15px]">
            <NavLink to="/" className={activeLinkClass}>
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
                className={dropdownTriggerClass(isAboutActive || aboutOpen)}
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
                    About Us
                  </NavLink>
                  <NavLink
                    to="/about/frofile"
                    className={dropdownLinkClass}
                    onClick={() => setAboutOpen(false)}
                  >
                    Profile
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/projects" className={activeLinkClass}>
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
                <div className="absolute left-0 top-full z-20  w-[200px] rounded-2xl border border-[#e7ebdd] bg-white p-2 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
                  <NavLink
                    to="/product"
                    className={dropdownLinkClass}
                    onClick={() => setProductsOpen(false)}
                  >
                    Product
                  </NavLink>
                  <NavLink
                    to="/pricing"
                    className={dropdownLinkClass}
                    onClick={() => setProductsOpen(false)}
                  >
                    Pricing
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/service" className={activeLinkClass}>
              Services
            </NavLink>

            <NavLink to="/contact" className={activeLinkClass}>
              Contact
            </NavLink>
          </nav>
        </div>
        <div className="hidden lg:flex items-center gap-4 text-[14px] font-medium  xl:gap-6 xl:text-[15px]">
          <a
            href="/developer-docs"
            className="transition-colors duration-200 text-[#2f3129] hover:text-[#6f7f1f]"
          >
            Developer Docs
          </a>

          <NavLink to="/pricing" className={activeLinkClass}>
            Pricing
          </NavLink>

          <a
            href="/signin"
            className="rounded-full bg-[#637524] px-5 py-2.5 text-sm font-semibold text-[#FFFFFF] shadow-sm transition hover:bg-[#61731f]"
          >
            Sign in
          </a>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-[#4E4E4E] lg:hidden"
          onClick={toggleMobileMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <AiOutlineClose className="text-[33px]" />
          ) : (
            <AiOutlineMenu className="text-[33px]" />
          )}
        </button>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 top-[78px] z-40 bg-black/15 lg:hidden"
            onClick={closeMobileMenu}
          />

          <div className="fixed left-0 right-0 top-[78px] z-50 border-t border-[#edf0e8] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] lg:hidden">
            <nav className="flex flex-col gap-2 px-4 py-4 text-[15px] font-medium text-[#2f3129]">
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
                      to="/about/frofile"
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
                    <NavLink
                      to="/product"
                      className={({ isActive }) =>
                        `rounded-xl px-3 py-2 text-sm transition-colors ${isActive
                          ? "bg-[#eef3df] text-[#6f7f1f]"
                          : "text-[#4b4f44] hover:bg-[#f5f7ef] hover:text-[#6f7f1f]"
                        }`
                      }
                      onClick={closeMobileMenu}
                    >
                      Product
                    </NavLink>
                    <NavLink
                      to="/pricing"
                      className={({ isActive }) =>
                        `rounded-xl px-3 py-2 text-sm transition-colors ${isActive
                          ? "bg-[#eef3df] text-[#6f7f1f]"
                          : "text-[#4b4f44] hover:bg-[#f5f7ef] hover:text-[#6f7f1f]"
                        }`
                      }
                      onClick={closeMobileMenu}
                    >
                      Pricing
                    </NavLink>
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
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#6f7f1f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#61731f]"
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
