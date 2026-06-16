"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Главная", href: "/" },
  { label: "Проекты", href: "/projects" },
  { label: "О нас", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

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
              className="flex h-[46px] w-[46px] cursor-pointer items-center justify-center rounded-full bg-[#F2F3F5] transition-colors hover:bg-[#ECECEC]"
              aria-label="Toggle theme"
            >
              <Image
                src="/icons/Light.icon.png"
                alt={dark ? "moon" : "sun"}
                width={dark ? 24 : 22}
                height={dark ? 24 : 22}
              />
            </button>

            <a
              href="#"
              className="flex h-[46px] items-center rounded-full bg-[#F53D18] pl-7 pr-[3px] text-white transition-all duration-300 hover:opacity-90"
            >
              <span className="mr-5 text-[16px] font-medium">
                Обсудить проект
              </span>
              <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-black">
                <ArrowUpRight size={20} strokeWidth={2} />
              </span>
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden flex h-12 w-12 items-center justify-center rounded-full"
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-0 left-0 right-0 bottom-0 z-[99999] bg-[#fff] md:hidden overflow-hidden px-[16px] pt-[24px] pb-[24px] flex flex-col"
            >
              {/* Top */}
              <div className="flex items-center justify-between">
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
                <button onClick={() => setOpen(false)}>
                  <X size={28} strokeWidth={2} />
                </button>
              </div>

              {/* Links */}
              <div className="mt-[32px]">
                {links.map((link) => (
                  <Link
                    key={link.href}
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
                ))}
              </div>

              {/* Button */}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-[40px] flex h-[56px] w-full items-center justify-between rounded-[44px] bg-[#F53D18] pl-[32px] pr-[6px] text-[#fff]"
              >
                <span className="text-[18px] font-medium">Обсудить проект</span>
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[44px] bg-white text-black">
                  <ArrowUpRight size={24} strokeWidth={2} />
                </div>
              </a>

              {/* Bottom Logo */}
              <div className="mt-auto flex items-center justify-center gap-[16px]">
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
