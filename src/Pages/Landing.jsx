import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  BadgeCheck,
  Bell,
  CalendarCheck,
  Check,
  Copy,
  Languages,
  LayoutDashboard,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessagesCircle,
  Phone,
  Plus,
  Quote,
  QuoteIcon,
  X,
} from "lucide-react";
import { FAQS, MEDIA } from "../lib/constants";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Landing() {
  const [openIndex, setOpenIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main id="top" className="bg-[#FAF9F5]">
      <header className="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 border-b border-transparent bg-transparent">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="font-bricolage text-xl tracking-tight text-[#161A18]">
              Eghosa Ordia
            </span>
          </a>
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary"
          >
            <a
              href="#services"
              className="group relative text-sm font-medium text-[#525A56] transition-colors duration-300 hover:text-[#161A18]"
            >
              Services
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#1B4D3E] transition-[width] duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#work"
              className="group relative text-sm font-medium text-[#525A56] transition-colors duration-300 hover:text-[#161A18]"
            >
              Work
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#1B4D3E] transition-[width] duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#process"
              className="group relative text-sm font-medium text-[#525A56] transition-colors duration-300 hover:text-[#161A18]"
            >
              Process
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#1B4D3E] transition-[width] duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="group relative text-sm font-medium text-[#525A56] transition-colors duration-300 hover:text-[#161A18]"
            >
              About
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#1B4D3E] transition-[width] duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#faq"
              className="group relative text-sm font-medium text-[#525A56] transition-colors duration-300 hover:text-[#161A18]"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#1B4D3E] transition-[width] duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="https://wa.me/2348133560042?text=Hi%20Eghosa%2C%20I%27d%20like%20to%20book%20a%20free%20call%20about%20a%20system%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full bg-[#1B4D3E] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#143B30]"
            >
              Book a free call
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#1B4D3E]/15 bg-white text-[#161A18] md:hidden"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          <div
            id="mobile-menu"
            aria-hidden={!menuOpen}
            className={`absolute right-4 top-full mt-2 w-64 origin-top-right rounded-2xl border border-[#1B4D3E]/10 bg-white p-2 shadow-xl md:hidden
      transition-[opacity,transform,visibility] duration-200 ease-out
      ${
        menuOpen
          ? "visible scale-100 translate-y-0 opacity-100"
          : "invisible scale-95 -translate-y-2 opacity-0"
      }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-[#525A56] transition-colors hover:bg-[#1B4D3E]/5 hover:text-[#161A18]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/2348133560042?text=Hi%20Eghosa%2C%20I%27d%20like%20to%20book%20a%20free%20call%20about%20a%20system%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-[#1B4D3E] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#143B30]"
            >
              Book a free call
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden pb-24 pt-32 md:pb-32 md:pt-44">
        <div className="pointer-events-none absolute -top-44 right-[-12%] h-144 w-xl rounded-full bg-[#10B981]/10 blur-3xl"></div>
        <div className="pointer-events-none absolute left-[-16%] top-1/2 h-112 w-md rounded-full bg-[#1B4D3E]/6 blur-3xl"></div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div
            className="lg:col-span-7"
            style={{ transform: "translateY(3.69183px)" }}
          >
            <div
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#1B4D3E]/15 bg-white px-4 py-2"
              style={{ transform: "none", opacity: 1 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#059669] opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#059669]"></span>
              </span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#1B4D3E]">
                Booking new projects for Q3 2026
              </span>
            </div>
            <h1 className="font-bricolage font-bold text-[2.75rem] leading-[1.05] text-[#161A18] sm:text-6xl lg:text-[4.6rem]">
              <span className="block overflow-hidden pb-[0.14em] mb-[-0.14em]">
                <span
                  className="block will-change-transform"
                  style={{ transform: "none" }}
                >
                  Stop chasing bookings.
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.14em] mb-[-0.14em]">
                <span
                  className="block will-change-transform"
                  style={{ transform: "none" }}
                >
                  Let clients book
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.14em] mb-[-0.14em]">
                <span
                  className="block will-change-transform"
                  style={{ transform: "none" }}
                >
                  <span className="italic text-[#1B4D3E]">themselves.</span>
                </span>
              </span>
            </h1>
            <p
              className="mt-7 max-w-xl text-base leading-relaxed text-[#525A56] sm:text-lg"
              style={{ transform: "none", opacity: 1 }}
            >
              I'm Eghosa Ordia. I build custom websites and apps for clinics,
              churches, schools and agencies — so bookings, records and payments
              take care of themselves. Less admin. More time for the work that
              matters.
            </p>
            <div
              className="mt-10 flex flex-wrap items-center gap-4"
              style={{ transform: "none", opacity: 1 }}
            >
              <a
                href="https://wa.me/2348133560042?text=Hi%20Eghosa%2C%20I%27d%20like%20to%20book%20a%20free%20call%20about%20a%20system%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#1B4D3E] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_36px_-16px_rgba(27,77,62,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#143B30] hover:shadow-[0_22px_40px_-16px_rgba(27,77,62,0.6)]"
              >
                Book a free call
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full border border-[#1B4D3E]/25 bg-transparent px-7 py-4 text-sm font-semibold text-[#1B4D3E] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1B4D3E] hover:bg-white"
              >
                See my work
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
            <div
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3"
              style={{
                opacity: 1,
              }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[#525A56]">
                <CalendarCheck className="h-4 w-4 text-[#059669]" />
                Booking systems
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[#525A56]">
                <LayoutDashboard className="h-4 w-4 text-[#059669]" />
                Client portals
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[#525A56]">
                <Bell className="h-4 w-4 text-[#059669]" />
                Automation
              </span>
            </div>
          </div>
          <div
            className="relative hidden lg:col-span-5 lg:block"
            style={{
              perspective: "1200px",
              transform: "translateY(6.85626px)",
            }}
          >
            <div className="relative">
              <div
                className="relative rounded-3xl border border-[#1B4D3E]/10 bg-white p-8 shadow-[0_32px_64px_-32px_rgba(22,26,24,0.25)]"
                style={{ transform: "none", opacity: 1 }}
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#1B4D3E]">
                    A week with a custom system
                  </p>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ECFDF5]">
                    <CalendarCheck className="h-5 w-5 text-[#1B4D3E]" />
                  </span>
                </div>
                <p className="mt-8 font-bricolage text-6xl tracking-tight text-[#161A18]">
                  38
                </p>
                <p className="mt-1 text-sm font-medium text-[#525A56]">
                  appointments booked — zero phone calls
                </p>
                <div className="my-6 h-px bg-[#1B4D3E]/10"></div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[#525A56]">
                      Reminders sent by staff
                    </span>
                    <span className="font-mono font-semibold text-[#161A18]">
                      0
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#525A56]">
                      Records updated by hand
                    </span>
                    <span className="font-mono font-semibold text-[#161A18]">
                      0
                    </span>
                  </div>
                </div>
                <span className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF5] px-3.5 py-1.5 text-xs font-semibold text-[#1B4D3E]">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  100% self-service
                </span>
              </div>
              <div
                className="absolute -bottom-12 -left-14 flex items-center gap-3 rounded-2xl border border-[#1B4D3E]/10 bg-white px-5 py-4 shadow-[0_24px_48px_-24px_rgba(22,26,24,0.3)]"
                style={{ transform: "none", opacity: 1 }}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B4D3E]">
                  <Bell className="h-4.5 w-4.5 text-[#FAF9F5]" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#161A18]">
                    Reminder sent to Mrs. Bello
                  </p>
                  <p className="font-mono text-[11px] text-[#525A56]">
                    WhatsApp · automatically · just now
                  </p>
                </div>
              </div>
              <div
                className="absolute -right-8 -top-10 rounded-2xl border border-[#1B4D3E]/10 bg-[#1B4D3E] px-5 py-4 shadow-[0_24px_48px_-24px_rgba(27,77,62,0.6)]"
                style={{ transform: "none", opacity: 1 }}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#A7F3D0]">
                  Payment received
                </p>
                <p className="mt-1 font-bricolage text-2xl text-[#FAF9F5]">
                  ₦25,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div style={{ transform: "none", opacity: 1 }}>
              <p className="mb-5 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#1B4D3E] ">
                <span className="text-[#059669]">01</span>
                <span className="h-px w-8 bg-[#1B4D3E]/30"></span>
                The problem
              </p>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <h2 className="font-bricolage text-3xl tracking-tight text-[#161A18] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                The admin work quietly eating your week
              </h2>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <p className="mt-6 text-base leading-relaxed text-[#525A56] sm:text-lg">
                Most owners I talk to lose ten or more hours a week to tasks a
                simple system handles in seconds. Here's the difference.
              </p>
            </div>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div style={{ transform: "none", opacity: 1 }}>
              <div className="h-full rounded-3xl border border-[#E5E2D9] bg-white p-8 sm:p-10">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#525A56]">
                  The old way
                </p>
                <ul className="mt-8 space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F3F2EC]">
                      <X className="h-3.5 w-3.5 text-[#525A56]" />
                    </span>
                    <span className="text-base leading-relaxed text-[#525A56]">
                      Chasing bookings and prices over WhatsApp, all day
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F3F2EC]">
                      <X className="h-3.5 w-3.5 text-[#525A56]" />
                    </span>
                    <span className="text-base leading-relaxed text-[#525A56]">
                      Client records scattered across notebooks and spreadsheets
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F3F2EC]"></span>
                    <span className="text-base leading-relaxed text-[#525A56]">
                      Double bookings and forgotten appointments
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F3F2EC]">
                      <X className="h-3.5 w-3.5 text-[#525A56]" />
                    </span>
                    <span className="text-base leading-relaxed text-[#525A56]">
                      Sending every confirmation, reminder and receipt by hand
                    </span>
                  </li>
                </ul>
                <p className="mt-9 border-t border-[#E5E2D9] pt-6  text-xl italic text-[#161A18]">
                  "I'm running my business from my WhatsApp inbox."
                </p>
              </div>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <div className="h-full rounded-3xl bg-[#1B4D3E] p-8 shadow-[0_32px_64px_-32px_rgba(27,77,62,0.5)] sm:p-10">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#A7F3D0]">
                  With a system I build
                </p>
                <ul className="mt-8 space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#059669]/30">
                      <Check className="h-3.5 w-3.5 text-[#A7F3D0]" />
                    </span>
                    <span className="text-base leading-relaxed text-[#ECFDF5]">
                      Clients book and pay online — by themselves
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#059669]/30">
                      <Check className="h-3.5 w-3.5 text-[#A7F3D0]" />
                    </span>
                    <span className="text-base leading-relaxed text-[#ECFDF5]">
                      Every record in one place, searchable in seconds
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#059669]/30">
                      <Check className="h-3.5 w-3.5 text-[#A7F3D0]" />
                    </span>
                    <span className="text-base leading-relaxed text-[#ECFDF5]">
                      Automatic WhatsApp &amp; email reminders, day and night
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#059669]/30">
                      <Check className="h-3.5 w-3.5 text-[#A7F3D0]" />
                    </span>
                    <span className="text-base leading-relaxed text-[#ECFDF5]">
                      You see everything from one simple dashboard
                    </span>
                  </li>
                </ul>
                <p className="mt-9 border-t border-white/15 pt-6  text-xl italic text-[#FAF9F5]">
                  "It just runs. I check the dashboard when I want to."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#F3F2EC]/60 py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div style={{ transform: "none", opacity: 1 }}>
              <p className="mb-5 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#1B4D3E] ">
                <span className="text-[#059669]">02</span>
                <span className="h-px w-8 bg-[#1B4D3E]/30"></span>What I build
              </p>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <h2 className="font-bricolage text-3xl tracking-tight text-[#161A18] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                Six ways I take work off your plate
              </h2>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <p className="mt-6 text-base leading-relaxed text-[#525A56] sm:text-lg">
                Every system is custom-built around how your business already
                works — not the other way round.
              </p>
            </div>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <div style={{ transform: "none", opacity: 1 }}>
              <div
                data-testid="service-card-1"
                className="group relative h-full rounded-3xl border border-[#1B4D3E]/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#1B4D3E]/25 hover:shadow-[0_28px_56px_-28px_rgba(27,77,62,0.35)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECFDF5] transition-colors duration-500 group-hover:bg-[#1B4D3E]">
                    <CalendarCheck className="h-5.5 w-5.5 text-[#1B4D3E] transition-colors duration-500 group-hover:text-[#A7F3D0]" />
                  </span>
                  <span className="font-mono text-xs font-medium text-[#1B4D3E]/40">
                    01
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-tight text-[#161A18]">
                  Booking &amp; scheduling
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#525A56] sm:text-base">
                  Clients pick a time, pay and get reminders — without a single
                  message from you.
                </p>
              </div>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <div
                data-testid="service-card-2"
                className="group relative h-full rounded-3xl border border-[#1B4D3E]/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#1B4D3E]/25 hover:shadow-[0_28px_56px_-28px_rgba(27,77,62,0.35)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECFDF5] transition-colors duration-500 group-hover:bg-[#1B4D3E]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-users h-5.5 w-5.5 text-[#1B4D3E] transition-colors duration-500 group-hover:text-[#A7F3D0]"
                      aria-hidden="true"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                  </span>
                  <span className="font-mono text-xs font-medium text-[#1B4D3E]/40">
                    02
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-tight text-[#161A18]">
                  Records &amp; member management
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#525A56] sm:text-base">
                  Every client, member or student in one searchable place. No
                  more notebooks and scattered spreadsheets.
                </p>
              </div>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <div
                data-testid="service-card-3"
                className="group relative h-full rounded-3xl border border-[#1B4D3E]/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#1B4D3E]/25 hover:shadow-[0_28px_56px_-28px_rgba(27,77,62,0.35)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECFDF5] transition-colors duration-500 group-hover:bg-[#1B4D3E]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-layout-dashboard h-5.5 w-5.5 text-[#1B4D3E] transition-colors duration-500 group-hover:text-[#A7F3D0]"
                      aria-hidden="true"
                    >
                      <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                      <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                      <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                      <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                    </svg>
                  </span>
                  <span className="font-mono text-xs font-medium text-[#1B4D3E]/40">
                    03
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-tight text-[#161A18]">
                  Client portals
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#525A56] sm:text-base">
                  Your clients log in to see their bookings, invoices and
                  history — instead of calling you.
                </p>
              </div>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <div
                data-testid="service-card-4"
                className="group relative h-full rounded-3xl border border-[#1B4D3E]/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#1B4D3E]/25 hover:shadow-[0_28px_56px_-28px_rgba(27,77,62,0.35)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECFDF5] transition-colors duration-500 group-hover:bg-[#1B4D3E]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-credit-card h-5.5 w-5.5 text-[#1B4D3E] transition-colors duration-500 group-hover:text-[#A7F3D0]"
                      aria-hidden="true"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                      <line x1="2" x2="22" y1="10" y2="10"></line>
                    </svg>
                  </span>
                  <span className="font-mono text-xs font-medium text-[#1B4D3E]/40">
                    04
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-tight text-[#161A18]">
                  Payments &amp; invoicing
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#525A56] sm:text-base">
                  Get paid online, automatically. Receipts and records update
                  themselves the moment money moves.
                </p>
              </div>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <div
                data-testid="service-card-5"
                className="group relative h-full rounded-3xl border border-[#1B4D3E]/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#1B4D3E]/25 hover:shadow-[0_28px_56px_-28px_rgba(27,77,62,0.35)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECFDF5] transition-colors duration-500 group-hover:bg-[#1B4D3E]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-bell-ring h-5.5 w-5.5 text-[#1B4D3E] transition-colors duration-500 group-hover:text-[#A7F3D0]"
                      aria-hidden="true"
                    >
                      <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                      <path d="M22 8c0-2.3-.8-4.3-2-6"></path>
                      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                      <path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
                    </svg>
                  </span>
                  <span className="font-mono text-xs font-medium text-[#1B4D3E]/40">
                    05
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-tight text-[#161A18]">
                  Reminders &amp; follow-ups
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#525A56] sm:text-base">
                  Confirmations, reminders and receipts go out on WhatsApp and
                  email — on their own, on time.
                </p>
              </div>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <div
                data-testid="service-card-6"
                className="group relative h-full rounded-3xl border border-[#1B4D3E]/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[#1B4D3E]/25 hover:shadow-[0_28px_56px_-28px_rgba(27,77,62,0.35)]"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ECFDF5] transition-colors duration-500 group-hover:bg-[#1B4D3E]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-globe h-5.5 w-5.5 text-[#1B4D3E] transition-colors duration-500 group-hover:text-[#A7F3D0]"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                  </span>
                  <span className="font-mono text-xs font-medium text-[#1B4D3E]/40">
                    06
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-tight text-[#161A18]">
                  Business websites
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#525A56] sm:text-base">
                  A fast, modern website that turns visitors into paying
                  customers — and connects to everything above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div style={{ transform: "none", opacity: 1 }}>
              <p className="mb-5 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#1B4D3E] ">
                <span className="text-[#059669]">03</span>
                <span className="h-px w-8 bg-[#1B4D3E]/30"></span>Selected work
              </p>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <h2 className="font-bricolage text-3xl tracking-tight text-[#161A18] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                Systems doing real work, right now
              </h2>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <p className="mt-6 text-base leading-relaxed text-[#525A56] sm:text-lg">
                Not mockups. These run real businesses every day.
              </p>
            </div>
          </div>
          <div className="mt-20 space-y-24 md:space-y-32">
            <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div style={{ transform: "none", opacity: 1 }}>
                <div className="group relative">
                  <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[#10B981]/[0.07] blur-2xl transition-opacity duration-700 group-hover:bg-[#10B981]/[0.14]"></div>
                  <div className="relative overflow-hidden rounded-3xl border border-[#1B4D3E]/10 bg-white p-2.5 shadow-[0_28px_56px_-32px_rgba(22,26,24,0.3)]">
                    <div className="preview h-95 relative overflow-hidden rounded-2xl">
                      <img
                        alt="Paulsconnect online store with self-checkout"
                        loading="lazy"
                        className="w-full transition-all duration-300"
                        src={MEDIA.paulsconnectBg}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#1B4D3E]/25 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ transform: "none", opacity: 1 }}>
                  <div className="flex items-center gap-4">
                    <span className="font-bricolage text-5xl tracking-tight text-[#1B4D3E]/15 sm:text-6xl">
                      01
                    </span>
                    <div>
                      <h3 className="font-bricolage text-2xl tracking-tight text-[#161A18] sm:text-3xl">
                        Paulsconnect
                      </h3>
                      <p className="mt-1 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#525A56]">
                        E-commerce · Self-checkout
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ transform: "none", opacity: 1 }}>
                  <div className="mt-8 space-y-6">
                    <div>
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#059669]">
                        They needed
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#525A56] sm:text-base">
                        Orders were arriving through DMs and voice notes — slow,
                        messy, and easy to miss on a busy day.
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#059669]">
                        What I built
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#525A56] sm:text-base">
                        An online store where customers browse, pay and check
                        out entirely on their own.
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#059669]">
                        The result
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#525A56] sm:text-base">
                        Orders, receipts and stock update automatically. No more
                        answering every DM to make a sale.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-8 border-t border-[#1B4D3E]/10 pt-6">
                    <p className="font-mono text-xs text-[#525A56]">
                      <span className="font-semibold uppercase tracking-[0.18em] text-[#1B4D3E]">
                        Under the hood
                      </span>{" "}
                      React · Django · PostgreSQL · Paystack
                    </p>
                    <a
                      href="https://paulsconnect.cv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-6 inline-flex items-center gap-2 rounded-full border border-[#1B4D3E]/25 px-6 py-3 text-sm font-semibold text-[#1B4D3E] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white"
                    >
                      Visit paulsconnect.cv
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div
                className="lg:order-2"
                style={{ transform: "none", opacity: 1 }}
              >
                <div className="group relative">
                  <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[#10B981]/[0.07] blur-2xl transition-opacity duration-700 group-hover:bg-[#10B981]/[0.14]"></div>
                  <div className="relative overflow-hidden rounded-3xl border border-[#1B4D3E]/10 bg-white p-2.5 shadow-[0_28px_56px_-32px_rgba(22,26,24,0.3)] cursor-pointer">
                    <div className="preview h-95 relative overflow-hidden rounded-2xl">
                      <img
                        alt="De Glamour Aerobics landing page"
                        loading="lazy"
                        className="w-full transition-all duration-300"
                        src={MEDIA.deglamouraerobicsBg}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#1B4D3E]/25 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:order-1">
                <div style={{ transform: "none", opacity: 1 }}>
                  <div className="flex items-center gap-4">
                    <span className="font-bricolage text-5xl tracking-tight text-[#1B4D3E]/15 sm:text-6xl">
                      02
                    </span>
                    <div>
                      <h3 className="font-bricolage text-2xl tracking-tight text-[#161A18] sm:text-3xl">
                        De Glamour Aerobics
                      </h3>
                      <p className="mt-1 font-mono text-xs font-medium uppercase tracking-[0.18em] text-[#525A56]">
                        Fitness studio
                      </p>
                    </div>
                  </div>
                </div>
                <div style={{ transform: "none", opacity: 1 }}>
                  <div className="mt-8 space-y-6">
                    <div>
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#059669]">
                        They needed
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#525A56] sm:text-base">
                        A simple, credible website to give their community a
                        home online beyond social media, so new people could
                        find them and understand what they're about.
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#059669]">
                        What I built
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#525A56] sm:text-base">
                        A responsive landing page that shows off the group's
                        real personality and community, with clear sections like
                        schedule, gallery, and contact so visitors can quickly
                        see what the group offers and get involved.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-8 border-t border-[#1B4D3E]/10">
                    <a
                      href="https://deglamouraerobics.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-6 inline-flex items-center gap-2 rounded-full border border-[#1B4D3E]/25 px-6 py-3 text-sm font-semibold text-[#1B4D3E] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white"
                    >
                      Visit deglamouraerobics.com
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="border-y border-[#1B4D3E]/10 py-20 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div style={{ transform: "none", opacity: 1 }}>
              <p className="mb-5 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#1B4D3E]">
                <span className="text-[#059669]">04</span>
                <span className="h-px w-8 bg-[#1B4D3E]/30"></span>
                How I work
              </p>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <h2 className="font-bricolage text-3xl tracking-tight text-[#161A18] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                From first call to launch — simple and predictable
              </h2>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <p className="mt-6 text-base leading-relaxed text-[#525A56] sm:text-lg">
                You'll always know what's happening, what it costs and when it's
                done. No technical knowledge needed from you.
              </p>
            </div>
          </div>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div style={{ transform: "none", opacity: 1 }}>
              <div className="group border-t-2 border-[#1B4D3E]/15 pt-8 transition-colors duration-500 hover:border-[#1B4D3E]">
                <span className="font-bricolage text-6xl tracking-tight text-[#1B4D3E]/15 transition-colors duration-500 group-hover:text-[#059669]/40">
                  01
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#161A18]">
                  Discovery call
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#525A56]">
                  A free 30-minute call. You explain how things work today; I
                  tell you honestly what a system could take off your plate.
                </p>
              </div>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <div className="group border-t-2 border-[#1B4D3E]/15 pt-8 transition-colors duration-500 hover:border-[#1B4D3E]">
                <span className="font-bricolage text-6xl tracking-tight text-[#1B4D3E]/15 transition-colors duration-500 group-hover:text-[#059669]/40">
                  02
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#161A18]">
                  Build
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#525A56]">
                  I design and build your system in 2-12 weeks, with a short
                  video update every week so you always know where things stand.
                </p>
              </div>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <div className="group border-t-2 border-[#1B4D3E]/15 pt-8 transition-colors duration-500 hover:border-[#1B4D3E]">
                <span className="font-bricolage text-6xl tracking-tight text-[#1B4D3E]/15 transition-colors duration-500 group-hover:text-[#059669]/40">
                  03
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#161A18]">
                  Launch &amp; training
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#525A56]">
                  We go live together. Your team gets simple training and a
                  cheat-sheet — no technical knowledge needed.
                </p>
              </div>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <div className="group border-t-2 border-[#1B4D3E]/15 pt-8 transition-colors duration-500 hover:border-[#1B4D3E]">
                <span className="font-bricolage text-6xl tracking-tight text-[#1B4D3E]/15 transition-colors duration-500 group-hover:text-[#059669]/40">
                  04
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-[#161A18]">
                  Support
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#525A56]">
                  I'm a message away after launch. Fixes, tweaks and
                  improvements as your business grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div style={{ transform: "none", opacity: 1 }}>
              <p className="mb-5 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#1B4D3E] ">
                <span className="text-[#059669]">05</span>
                <span className="h-px w-8 bg-[#1B4D3E]/30"></span>
                About &amp; trust
              </p>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <h2 className="font-bricolage text-3xl tracking-tight text-[#161A18] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                The person you'll actually work with
              </h2>
            </div>
          </div>
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div
              className="lg:col-span-5"
              style={{ transform: "none", opacity: 1 }}
            >
              <div className="relative mx-auto max-w-md">
                <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border border-[#1B4D3E]/20"></div>
                <div className="relative overflow-hidden rounded-3xl border border-[#1B4D3E]/10 bg-white p-2.5 shadow-[0_28px_56px_-32px_rgba(22,26,24,0.3)]">
                  <img
                    alt="Eghosa Ordia — freelance web and app developer"
                    loading="lazy"
                    className="aspect-4/5 w-full rounded-2xl object-cover"
                    src={MEDIA.headshot}
                  />
                </div>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#1B4D3E] px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#A7F3D0] shadow-lg">
                  Eghosa Ordia · Developer
                </span>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div style={{ transform: "none", opacity: 1 }}>
                <p className=" text-2xl leading-snug tracking-tight text-[#161A18] sm:text-[1.7rem]">
                  I care more about your Tuesday afternoon than about
                  technology.
                </p>
              </div>
              <div style={{ transform: "none", opacity: 1 }}>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-[#525A56]">
                  <p>
                    I'm Eghosa — a web and app developer who works with clinics,
                    churches, schools and agencies that are tired of running the
                    whole business from a WhatsApp inbox.
                  </p>
                  <p>
                    I build the system, train your team, and stay around after
                    launch. You'll never need to learn anything technical —
                    that's my job. Yours is running your business.
                  </p>
                </div>
              </div>
              <div style={{ transform: "none", opacity: 1 }}>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5]">
                      <MapPin className="h-4 w-4 text-[#1B4D3E]" />
                    </span>
                    <span className="text-sm leading-relaxed text-[#161A18] sm:text-base">
                      Based in Abuja, Nigeria — working with clients anywhere
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5]">
                      <MessagesCircle className="h-4 w-4 text-[#1B4D3E]" />
                    </span>
                    <span className="text-sm leading-relaxed text-[#161A18] sm:text-base">
                      You always talk to me directly — no account managers, no
                      ticket queues
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#ECFDF5]">
                      <Languages className="h-4 w-4 text-[#1B4D3E]" />
                    </span>
                    <span className="text-sm leading-relaxed text-[#161A18] sm:text-base">
                      Plain language, always. Jargon stays in the code
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-24 grid gap-5 md:grid-cols-3 lg:gap-6">
            <div style={{ transform: "none", opacity: 1 }}>
              <figure className="flex h-full flex-col rounded-3xl border border-[#1B4D3E]/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(27,77,62,0.3)]">
                <QuoteIcon className="h-6 w-6 text-[#059669]" />
                <blockquote className="mt-5 flex-1 font-bricolage italic text-lg leading-relaxed text-[#161A18]">
                  "
                  <span>
                    I wanted a website but didn't know where to start. I reached
                    out to him, and he handled everything so well 😅
                  </span>
                  "
                </blockquote>
                <figcaption className="mt-6 border-t border-[#1B4D3E]/10 pt-5">
                  <p className="text-sm font-semibold text-[#161A18]">
                    Emmanuel Binitie
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#525A56]">
                    Founder, De Glamour Aerobics
                  </p>
                </figcaption>
              </figure>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <figure className="flex h-full flex-col rounded-3xl border border-[#1B4D3E]/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(27,77,62,0.3)]">
                <Quote className="h-6 w-6 text-[#059669]" />
                <blockquote className="mt-5 flex-1 font-bricolage italic text-lg leading-relaxed text-[#161A18]">
                  "
                  <span data-ve-dynamic="true">
                    Was having troubles handling huge bulk of customers
                    requests. Eghosa built a dashboard that made managing bulk
                    customer requests seamless and easier.
                  </span>
                  "
                </blockquote>
                <figcaption className="mt-6 border-t border-[#1B4D3E]/10 pt-5">
                  <p className="text-sm font-semibold text-[#161A18]">Paul</p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#525A56]">
                    Founder, Paulsconnect
                  </p>
                </figcaption>
              </figure>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <figure className="flex h-full flex-col rounded-3xl border border-[#1B4D3E]/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(27,77,62,0.3)]">
                <QuoteIcon className="h-6 w-6 text-[#059669]" />

                <blockquote className="mt-5 flex-1 font-bricolage italic text-lg leading-relaxed text-[#161A18]">
                  "
                  <span>
                    Eghosa explained everything in plain language and delivered
                    exactly when he said he would. Training our staff took one
                    afternoon.
                  </span>
                  "
                </blockquote>
                <figcaption className="mt-6 border-t border-[#1B4D3E]/10 pt-5">
                  <p className="text-sm font-semibold text-[#161A18]">
                    Clinic Administrator
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#525A56]">
                    Benin City
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
          <div style={{ transform: "none", opacity: 1 }}>
            <div className="mt-20 border-t border-[#1B4D3E]/10 pt-10">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#525A56]">
                Under the hood — for the technical folks
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="rounded-full border border-[#1B4D3E]/15 bg-white px-4 py-2 font-mono text-xs font-medium text-[#1B4D3E] transition-colors duration-300 hover:border-[#1B4D3E] hover:bg-[#ECFDF5]">
                  React
                </span>
                <span className="rounded-full border border-[#1B4D3E]/15 bg-white px-4 py-2 font-mono text-xs font-medium text-[#1B4D3E] transition-colors duration-300 hover:border-[#1B4D3E] hover:bg-[#ECFDF5]">
                  React Native
                </span>
                <span className="rounded-full border border-[#1B4D3E]/15 bg-white px-4 py-2 font-mono text-xs font-medium text-[#1B4D3E] transition-colors duration-300 hover:border-[#1B4D3E] hover:bg-[#ECFDF5]">
                  Next.js
                </span>

                <span className="rounded-full border border-[#1B4D3E]/15 bg-white px-4 py-2 font-mono text-xs font-medium text-[#1B4D3E] transition-colors duration-300 hover:border-[#1B4D3E] hover:bg-[#ECFDF5]">
                  Django
                </span>
                <span className="rounded-full border border-[#1B4D3E]/15 bg-white px-4 py-2 font-mono text-xs font-medium text-[#1B4D3E] transition-colors duration-300 hover:border-[#1B4D3E] hover:bg-[#ECFDF5]">
                  FastAPI
                </span>
                <span className="rounded-full border border-[#1B4D3E]/15 bg-white px-4 py-2 font-mono text-xs font-medium text-[#1B4D3E] transition-colors duration-300 hover:border-[#1B4D3E] hover:bg-[#ECFDF5]">
                  PostgreSQL
                </span>

                <span className="rounded-full border border-[#1B4D3E]/15 bg-white px-4 py-2 font-mono text-xs font-medium text-[#1B4D3E] transition-colors duration-300 hover:border-[#1B4D3E] hover:bg-[#ECFDF5]">
                  Tailwind CSS
                </span>
                <span className="rounded-full border border-[#1B4D3E]/15 bg-white px-4 py-2 font-mono text-xs font-medium text-[#1B4D3E] transition-colors duration-300 hover:border-[#1B4D3E] hover:bg-[#ECFDF5]">
                  Paystack · Stripe
                </span>
                <span className="rounded-full border border-[#1B4D3E]/15 bg-white px-4 py-2 font-mono text-xs font-medium text-[#1B4D3E] transition-colors duration-300 hover:border-[#1B4D3E] hover:bg-[#ECFDF5]">
                  WhatsApp Business API
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#F3F2EC]/60 py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-5 flex items-center justify-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#1B4D3E]">
              <span className="text-[#059669]">06</span>
              <span className="h-px w-8 bg-[#1B4D3E]/30"></span>
              FAQ
            </p>
            <h2 className="font-bricolage text-3xl tracking-tight text-[#161A18] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              Questions I hear on almost every first call
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-3xl">
            {FAQS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.q}
                  className="border-b border-[#1B4D3E]/10 first:border-t"
                >
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={`text-base font-semibold tracking-tight transition-colors duration-300 sm:text-lg group-hover:text-[#1B4D3E] ${
                        isOpen ? "text-[#1B4D3E]" : "text-[#161A18]"
                      }`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-[#1B4D3E] ${
                        isOpen
                          ? "rotate-45 border-[#1B4D3E] bg-[#1B4D3E] text-white"
                          : "border-[#1B4D3E]/20 text-[#1B4D3E]"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>

                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-12 text-base leading-relaxed text-[#161A18]/70">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer id="contact" className="relative overflow-hidden pt-20 md:pt-32">
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-120 w-184 -translate-x-1/2 rounded-full bg-[#10B981]/10 blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div style={{ transform: "none", opacity: 1 }}>
              <p className="mb-5 flex items-center justify-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#1B4D3E]">
                <span className="text-[#059669]">07</span>
                <span className="h-px w-8 bg-[#1B4D3E]/30"></span>
                Say hello
              </p>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <h2 className="font-bricolage text-4xl tracking-tight text-[#161A18] sm:text-5xl lg:text-6xl">
                Tell me what's{" "}
                <span className="italic text-[#1B4D3E]">eating your time.</span>
              </h2>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#525A56] sm:text-lg">
                I'll tell you honestly whether a system can fix it — and what it
                would take. No jargon, no pressure, no 40-page proposal.
              </p>
            </div>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div style={{ transform: "none", opacity: 1 }}>
              <a
                href="https://wa.me/2348133560042?text=Hi%20Eghosa%2C%20I%27d%20like%20to%20book%20a%20free%20call%20about%20a%20system%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1.5 border-[#1B4D3E] bg-[#1B4D3E] text-white shadow-[0_28px_56px_-28px_rgba(27,77,62,0.6)] hover:bg-[#143B30]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                    <MessageCircle className="h-5 w-5 text-[#A7F3D0]" />
                  </span>

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#A7F3D0]" />
                </div>
                <p className="mt-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A7F3D0]">
                  WhatsApp
                </p>
                <p className="mt-2 break-all text-base font-semibold tracking-tight text-white">
                  +234 813 356 0042
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#A7F3D0]/80">
                  Fastest — I usually reply within hours
                </p>
              </a>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <a
                href="mailto:eghordia130@gmail.com"
                className="group relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1.5 border-[#1B4D3E]/10 bg-white hover:border-[#1B4D3E]/30 hover:shadow-[0_24px_48px_-28px_rgba(27,77,62,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ECFDF5]">
                    <Mail className=" h-5 w-5 text-[#1B4D3E]" />
                  </span>

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#1B4D3E]/50" />
                </div>
                <p className="mt-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#059669]">
                  Email
                </p>
                <p className="mt-2 break-all text-base font-semibold tracking-tight text-[#161A18]">
                  eghordia130@gmail.com
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#525A56]">
                  Good for detailed briefs
                </p>
                <button
                  type="button"
                  className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#1B4D3E]/20 px-3.5 py-1.5 text-xs font-semibold text-[#1B4D3E] transition-colors duration-300 hover:bg-[#1B4D3E] hover:text-white"
                >
                  <Copy className="h-3 w-3" />
                  Copy address
                </button>
              </a>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <a
                href="tel:+2348133560042"
                className="group relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1.5 border-[#1B4D3E]/10 bg-white hover:border-[#1B4D3E]/30 hover:shadow-[0_24px_48px_-28px_rgba(27,77,62,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ECFDF5]">
                    <Phone
                      width={24}
                      height={24}
                      className="h-5 w-5 text-[#1B4D3E]"
                    />
                  </span>

                  <ArrowUp
                    width={24}
                    height={24}
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#1B4D3E]/50"
                  />
                </div>
                <p className="mt-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#059669]">
                  Phone
                </p>
                <p className="mt-2 break-all text-base font-semibold tracking-tight text-[#161A18]">
                  +234 813 356 0042
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#525A56]">
                  Weekdays, 9am – 6pm WAT
                </p>
              </a>
            </div>
            <div style={{ transform: "none", opacity: 1 }}>
              <a
                href="https://instagram.com/eghosa.ordia"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-1.5 border-[#1B4D3E]/10 bg-white hover:border-[#1B4D3E]/30 hover:shadow-[0_24px_48px_-28px_rgba(27,77,62,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ECFDF5]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram h-5 w-5 text-[#1B4D3E]"
                      aria-hidden="true"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </span>
                  <ArrowUp
                    width={24}
                    height={24}
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#1B4D3E]/50"
                  />
                </div>
                <p className="mt-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#059669]">
                  Instagram
                </p>
                <p className="mt-2 break-all text-base font-semibold tracking-tight text-[#161A18]">
                  @eghosa.ordia
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-[#525A56]">
                  Behind the scenes &amp; builds
                </p>
              </a>
            </div>
          </div>
          <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-[#1B4D3E]/10 py-10 sm:flex-row">
            <div className="flex items-center gap-3">
              <svg
                width="28"
                height="28"
                viewBox="0 0 64 64"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <rect width="64" height="64" rx="16" fill="#1B4D3E"></rect>
                <circle
                  cx="32"
                  cy="34"
                  r="13"
                  stroke="#FAF9F5"
                  strokeWidth="3.5"
                ></circle>
                <circle cx="44" cy="17" r="5" fill="#34D399"></circle>
              </svg>
              <p className="text-sm text-[#525A56]">
                © 2026 Eghosa Ordia — websites &amp; apps that run your business
              </p>
            </div>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 rounded-full border border-[#1B4D3E]/20 px-5 py-2.5 text-sm font-semibold text-[#1B4D3E] transition-all duration-300 hover:border-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white"
            >
              Back to top
              <ArrowUp
                width={24}
                height={24}
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
