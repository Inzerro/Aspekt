"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const links = [
  { label: "Главная", href: "/" },
  { label: "Проекты", href: "/projects" },
  { label: "О нас", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

const menuVariants = {
  hidden: { opacity: 0, y: -16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.08 + i * 0.06,
    },
  }),
};

const bottomVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.36 },
  },
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [open]);

  const router = useRouter();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md" : ""}`}
    >
      <div className="px-[16px] md:px-[80px] py-6">
        <nav className="relative flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-4 shrink-0">
            <Image
              src="/images/Logo2.png"
              alt="Aspekt"
              width={32}
              height={32}
              priority
              className="object-contain"
            />
            <span className="text-[16px] font-medium text-[#18191A]">
              Aspekt
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <ul className="flex h-[46px] items-center rounded-full bg-[#F2F3F5] p-[3px]">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex h-[40px] items-center justify-center rounded-full px-7 text-[16px] font-normal transition-all duration-200 ${
                      pathname === link.href
                        ? "bg-white text-[#111111] shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                        : "text-[#111111] hover:bg-white/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setDark(!dark)}
              className="
      flex h-[46px] w-[46px]
      cursor-pointer items-center justify-center
      rounded-full bg-[#F2F3F5]
      transition-colors hover:bg-[#ECECEC]
    "
              aria-label="Toggle theme"
            >
              <Image
                src="/icons/Light.icon.png"
                alt={dark ? "moon" : "sun"}
                width={dark ? 24 : 22}
                height={dark ? 24 : 22}
              />
            </button>

            <button
              onClick={() => {
                if (window.location.pathname === "/") {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                } else {
                  router.push("/");

                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 500);
                }
              }}
              className="
    flex h-[46px]
    items-center
    rounded-full
    bg-[#F53D18]
    pl-7
    pr-[3px]
    text-white
    transition-all
    duration-300
    hover:opacity-90
  "
            >
              <span
                className="
      group/text relative mr-5
      overflow-hidden
      text-[16px]
      font-medium
      leading-[22px]
    "
              >
                <span
                  className="
        block
        transition-transform
        duration-300
        ease-out
        group-hover/text:-translate-y-[22px]
      "
                >
                  Обсудить проект
                </span>

                <span
                  className="
        absolute left-0 top-[23px]
        block
        transition-transform
        duration-300
        ease-out
        group-hover/text:-translate-y-[22px]
      "
                >
                  Обсудить проект
                </span>
              </span>

              <span
                className="
      flex h-[40px] w-[40px]
      items-center justify-center
      rounded-full bg-white text-black
    "
              >
                <ArrowUpRight size={20} strokeWidth={2} />
              </span>
            </button>
          </div>
          {/* Mobile Button */}
          <button
            className="md:hidden ml-30 flex h-8 w-6 items-center justify-center rounded-full"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Menu"
          >
            {open ? (
              <X size={28} />
            ) : (
              <Image
                src="/icons/Burger.Icon.png"
                alt="Menu"
                width={28}
                height={28}
              />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 right-0 bottom-0 z-[99999] bg-[#fff] md:hidden overflow-hidden px-[16px] pt-[24px] pb-[24px] flex flex-col"
            >
              {/* Top */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={0}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-[8px]">
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#F2F3F5]">
                    <Image
                      src="/icons/Light.icon.png"
                      alt="icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-[24px] font-medium text-[#18191A]">
                    Меню
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-6 items-center justify-center"
                >
                  <X size={28} strokeWidth={2} />
                </button>
              </motion.div>

              {/* Links */}
              <div className="mt-[32px]">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i + 1}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between border-b border-[#E6E8EB] py-[20px]"
                    >
                      <span className="text-[32px] leading-none font-medium text-[#18191A]">
                        {link.label}
                      </span>
                      <ArrowUpRight
                        size={32}
                        strokeWidth={2}
                        className="text-[#7A7A7A]"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Button */}
              <motion.a
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                custom={links.length + 1}
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-[40px] flex h-[56px] w-full items-center justify-between rounded-[44px] bg-[#F53D18] pl-[32px] pr-[6px] text-[#fff]"
              >
                <span className="text-[18px] font-medium">Обсудить проект</span>
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[44px] bg-white text-black">
                  <ArrowUpRight size={24} strokeWidth={2} />
                </div>
              </motion.a>

              {/* Bottom Logo */}
              <motion.div
                variants={bottomVariants}
                initial="hidden"
                animate="visible"
                className="mt-auto flex items-center justify-center gap-[16px]"
              >
                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#18191A]">
                  <Image
                    src="/images/Logo2.png"
                    alt="Aspekt"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="text-[16px] font-medium text-[#18191A]">
                  Aspekt
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
