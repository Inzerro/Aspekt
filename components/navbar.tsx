"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const links = [
  { label: "Главная", href: "/" },
  { label: "Проекты", href: "/projects" },
  { label: "О нас", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

const menuVariants: Variants = {
  hidden: { opacity: 0, y: "100vh" },
  visible: {
    opacity: 1,
    y: "0vh",
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: "100vh",
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15 + i * 0.07,
    },
  }),
};

const bottomVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0.45 },
  },
};

function scrollToContact() {
  const el = document.getElementById("contact");
  if (!el) return;

  let top = 0;
  let node: HTMLElement | null = el;
  while (node) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  window.scrollTo({ top: top - 96, behavior: "smooth" });
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.documentElement.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";
      if (scrollY) window.scrollTo(0, parseInt(scrollY) * -1);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (pathname === "/" && window.location.hash === "#contact") {
      window.history.replaceState({}, "", "/");
      setTimeout(() => scrollToContact(), 100);
    }
  }, [pathname]);

  const handleDiscussClick = () => {
    if (pathname === "/") {
      scrollToContact();
    } else {
      router.push("/#contact");
    }
  };

  const isDark = mounted && theme === "dark";

  const mobileMenu = (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ willChange: "transform, opacity" }}
          className="fixed top-0 left-0 right-0 bottom-0 z-[99999] flex flex-col overflow-hidden bg-white dark:bg-[#18191A] px-[16px] pt-[24px] pb-[24px] md:hidden"
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
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#F2F3F5] dark:bg-white/10">
                <Image
                  src="/icons/Light.icon.png"
                  alt="icon"
                  width={24}
                  height={24}
                  className={isDark ? "invert" : ""}
                />
              </div>
              <span className="text-[24px] font-medium text-[#18191A] dark:text-[#F2F2F2]">
                Меню
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-8 w-6 items-center justify-center"
            >
              <X size={28} strokeWidth={2} className="dark:text-[#C7C7C7]" />
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
                  className="flex items-center justify-between border-b border-[#E6E8EB] dark:border-[#2D2E2F] py-[20px]"
                >
                  <span className="text-[32px] leading-none font-medium text-[#18191A] dark:text-[#F2F2F2]">
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={32}
                    strokeWidth={2}
                    className="text-[#7A7A7A] dark:text-[#C7C7C7]"
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.button
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={links.length + 1}
            onClick={() => {
              setOpen(false);
              if (pathname === "/") {
                setTimeout(() => scrollToContact(), 300);
              } else {
                router.push("/#contact");
              }
            }}
            className="mt-[40px] flex h-[56px] w-full items-center justify-between rounded-[44px] bg-[#F53D18] pl-[32px] pr-[2px] text-white"
          >
            <span className="text-[18px] font-medium">Обсудить проект</span>
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-white text-black">
              <ArrowUpRight size={26} strokeWidth={2} />
            </div>
          </motion.button>

          {/* Bottom Logo */}
          <motion.div
            variants={bottomVariants}
            initial="hidden"
            animate="visible"
            className="mt-auto flex items-center justify-center gap-[16px]"
          >
            <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#18191A] dark:bg-white/10">
              <Image
                src="/images/Logo2.png"
                alt="Aspekt"
                width={32}
                height={32}
                className="object-contain dark:invert"
              />
            </div>
            <span className="text-[16px] font-medium text-[#18191A] dark:text-white">
              Aspekt
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-lg" : ""
      }`}
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
              className="object-contain dark:invert"
            />
            <span className="text-[16px] font-medium text-[#18191A] dark:text-white">
              Aspekt
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <ul className="flex h-[46px] items-center rounded-full bg-[#f2f3f5] dark:bg-[#232425] p-[3px]">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex h-[40px] items-center justify-center rounded-full px-7 text-[16px] font-normal transition-all duration-200 ${
                      pathname === link.href
                        ? "bg-white dark:bg-[#18191A] text-[#111111] dark:text-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                        : "text-[#111111] dark:text-white/80 hover:bg-white dark:hover:bg-[#18191A]"
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
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full bg-[#F2F3F5] dark:bg-[#232425] transition-colors hover:bg-[#ECECEC] dark:hover:bg-white/20"
              aria-label="Toggle theme"
            >
              <Image
                src="/icons/Light.icon.png"
                alt={isDark ? "moon" : "sun"}
                width={isDark ? 24 : 22}
                height={isDark ? 24 : 22}
                className={isDark ? "invert" : ""}
              />
            </button>

            <button
              onClick={handleDiscussClick}
              className="flex h-[46px] items-center rounded-full bg-[#F53D18] pl-7 pr-[3px] text-white transition-all duration-300 hover:opacity-90 cursor-pointer"
            >
              <span className="group/text relative mr-5 overflow-hidden text-[16px] font-medium leading-[22px]">
                <span className="block transition-transform duration-300 ease-out group-hover/text:-translate-y-[22px]">
                  Обсудить проект
                </span>
                <span className="absolute left-0 top-[23px] block transition-transform duration-300 ease-out group-hover/text:-translate-y-[22px]">
                  Обсудить проект
                </span>
              </span>
              <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-black">
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
              <X size={28} className="dark:text-white" />
            ) : (
              <Image
                src="/icons/Burger.Icon.png"
                alt="Menu"
                width={28}
                height={28}
                className="dark:invert"
              />
            )}
          </button>
        </nav>
      </div>

      {/* Мобильное меню рендерится через портал в document.body,
          чтобы не наследовать containing block от header (backdrop-blur-lg) */}
      {mounted && createPortal(mobileMenu, document.body)}
    </header>
  );
}
