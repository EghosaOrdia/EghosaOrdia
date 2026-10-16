import deglamouraerobicsBg from "../assets/deglamouraerobics.com.jpg";
import paulsconnectBg from "../assets/paulsconnect.cv.jpg";
import headshot from "../assets/headshot.png";

export const MEDIA = {
  deglamouraerobicsBg,
  paulsconnectBg,
  headshot,
};

export const aboutTags = [
  { id: "react", label: "React", style: "-rotate-2 bg-primary text-white" },
  { id: "vite", label: "Vite", style: "rotate-2 bg-pink text-white" },
  {
    id: "python",
    label: "Python",
    style: "-rotate-2 bg-orange text-[#3a2100]",
  },
  {
    id: "django",
    label: "Django",
    style: "-rotate-2 bg-yellow text-[#3a2100]",
  },
  {
    id: "fastapi",
    label: "FastAPI",
    style: "-rotate-2 bg-yellow text-[#3a2100]",
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    style: "rotate-2 bg-primary text-white",
  },
  {
    id: "sqlite",
    label: "SQLite",
    style: "-rotate-2 bg-primary text-white",
  },
  {
    id: "apis",
    label: "APIs",
    style: "rotate-2 bg-pink text-white",
  },
  {
    id: "git",
    label: "Git",
    style: "-rotate-2 bg-orange text-[#3a2100]",
  },
  {
    id: "tailwindcss",
    label: "Tailwind CSS",
    style: "rotate-2 bg-ink text-white",
  },
];

export const cards = [
  {
    no: "No. 01",
    title: "Same question, every time.",
    body: "Answering the same DM over and over eats your day.",
    icon: "M4 5h16v11H9l-5 4z",
    // full class strings so Tailwind can detect them
    className:
      "md:row-span-2 flex flex-col bg-gradient-to-br from-[#fdeede] to-[#f9d9c0] hover:-rotate-1",
    big: "?",
  },
  {
    no: "No. 02",
    title: "Lost between “Interested” and “Sold”",
    body: "Customers go quiet before they convert, and you don't know why.",
    icon: "M4 20V10M10 20V4M16 20v-7M22 20H2",
    className: "bg-gradient-to-br from-[#fce6ee] to-[#f3cfdc] hover:rotate-1",
  },
  {
    no: "No. 03",
    title: "No trail, no logs",
    body: "Custom web apps for registration, payments, bookings and data management.",
    icon: "M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5",
    className: "bg-gradient-to-br from-[#fdf5d6] to-[#f4e6a8] hover:-rotate-1",
  },
  {
    no: "No. 04",
    title: "Ready for the next level",
    body: "Updates, improvements and new features as your business grows.",
    icon: "M12 20V5M6 11l6-6 6 6",
    className:
      "md:col-span-2 md:col-start-2 bg-gradient-to-br from-[#e9f1dc] to-[#d3e3bb] hover:rotate-1",
  },
];

export const FAQS = [
  {
    q: "How much does a system cost?",
    a: "A simple landing page starts at ₦90k. More complex systems, like booking or record management systems start at ₦350k, depending on features, integrations and automation. Tell me what you need and I'll send you an exact quote.",
  },
  {
    q: "How long does it take?",
    a: "A simple landing page takes about a week. More complex systems, like booking or record management systems, usually take 4 to 8 weeks, depending on features, integrations and automation. Tell me what you need and I'll give you a timeline along with your quote.",
  },
  {
    q: "I'm not technical — will I actually be able to use it?",
    a: "Yes. I build every system to be simple enough for non-technical people to run day to day. I handle all the technical side, and I walk you through everything you need to know, so you're never left guessing.",
  },
  {
    q: "What happens after launch?",
    a: "I stay available. Once your system is live, I fix any bugs that show up, help you and your team get comfortable with it, and can handle updates or new features as your business grows. Tell me what level of support you need and I'll include it in your quote.",
  },
  {
    q: "Can you improve or rebuild my existing website?",
    a: "Yes. I can fix and improve what you have, or rebuild it from scratch if that makes more sense. Send me the link and tell me what's frustrating you about it, and I'll tell you honestly which route is better.",
  },
  {
    q: "Is my business data safe?",
    a: "Yes. I build with security in mind: user accounts with proper access levels, encrypted connections, and regular backups so your records can be restored if something goes wrong. Tell me how sensitive your data is and I'll make sure the system is built to match.",
  },
];
