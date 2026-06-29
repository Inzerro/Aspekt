"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#F2F3F5] dark:bg-[#232425]">
      {/* ================= MOBILE ================= */}

      <div className="block md:hidden px-[16px] pt-[10px] pb-[20px]">
        {/* Navigation */}
        <div className="">
          {[
            { label: "Главная", href: "/" },
            { label: "Проекты", href: "/projects" },
            { label: "О нас", href: "/about" },
            { label: "Контакты", href: "/contacts" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center justify-between border-b border-[#E6E8EB] dark:border-[#2D2E2F] py-[12px]"
            >
              <span className="text-[20px] font-medium text-[#18191A] dark:text-[#F2F2F2]">
                {item.label}
              </span>
              <ArrowUpRight
                size={24}
                strokeWidth={1.8}
                className="text-[#707275] dark:text-[#C7C7C7]"
              />
            </Link>
          ))}
        </div>

        {/* Contacts */}
        <div className="mb-[16px]">
          <div className="mt-[16px]">
            <p className="mb-[4px] text-[12px] text-[#555555] dark:text-[#C7C7C7]">
              Email:
            </p>
            <a
              href="mailto:Hello@Aspekt.com"
              className="text-[16px] leading-none text-[#18191A] dark:text-[#F2F2F2]"
            >
              Hello@Aspekt.com
            </a>
          </div>

          <div className="mt-[16px]">
            <p className="mb-[4px] text-[12px] text-[#555555] dark:text-[#C7C7C7]">
              Номер телефона:
            </p>
            <a
              href="tel:+996995502598"
              className="text-[16px] leading-none text-[#18191A] dark:text-[#F2F2F2]"
            >
              +996 (995) 502 - 598
            </a>
          </div>
        </div>

        {/* Socials + Logo */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-[16px]">
            <a href="#" className="flex items-center gap-[8px]">
              <span className="border-b border-[#18191A] dark:border-[#F2F2F2] text-[16px] text-[#18191A] dark:text-[#F2F2F2]">
                Instagram
              </span>
              <ArrowUpRight
                size={24}
                strokeWidth={2}
                className="text-[#18191A] dark:text-[#C7C7C7]"
              />
            </a>
            <a href="#" className="flex items-center gap-[8px]">
              <span className="border-b border-[#18191A] dark:border-[#F2F2F2] text-[16px] text-[#18191A] dark:text-[#F2F2F2]">
                Telegram
              </span>
              <ArrowUpRight
                size={24}
                strokeWidth={2}
                className="text-[#18191A] dark:text-[#C7C7C7]"
              />
            </a>
          </div>

          {/* Logo */}
          <div className="relative h-[72px] w-[72px] shrink-0">
            <div className="absolute inset-0 rounded-full bg-[#111111]" />
            <div className="absolute left-1/2 top-1/2 h-[48px] w-[48px] -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-[#F2F3F5]" />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-[32px] border-t border-[#E5E7EB] dark:border-[#2D2E2F] pt-[24px]">
          <p className="text-[12px] text-[#555555] dark:text-[#C7C7C7]">
            Политика конфиденциальности
          </p>
          <p className="mt-[12px] text-[12px] text-[#555555] dark:text-[#C7C7C7]">
            © 2026 Aspekt design. Все права защищены
          </p>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}

      <div className="hidden md:block">
        <div className="px-[80px] pt-12 pb-6">
          <div className="grid grid-cols-4 gap-[80px]">
            {/* Logo */}
            <div className="flex min-h-[364px] flex-col justify-between">
              <div>
                <h2 className="text-[44px] font-medium leading-[0.95] tracking-[-0.04em] text-[#111111] dark:text-[#f2f2f2]">
                  ASPEKT
                </h2>
                <div className="flex items-start gap-3">
                  <h2 className="text-[44px] font-medium leading-[0.95] tracking-[-0.04em] text-[#F53D18]">
                    Design
                  </h2>
                  <span className="text-[16px] text-[#18191A] dark:text-[#f2f2f2]">
                    (Studio)
                  </span>
                </div>
              </div>

              <div className="relative h-[160px] w-[160px]">
                <div className="absolute inset-0 rounded-full bg-[#111111]" />
                <div className="absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-[4px] bg-[#F3F3F4]" />
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-6">
              <p className="mb-2 text-[14px] text-[#434547] dark:text-[#E5E5E5]">
                Студия
              </p>
              <Link
                href="/projects"
                className="text-[32px] font-medium leading-none text-[#18191A] dark:text-[#F2F2F2] transition-opacity duration-200"
              >
                Проекты
              </Link>
              <Link
                href="/about"
                className="text-[32px] font-medium leading-none text-[#18191A] dark:text-[#F2F2F2] transition-opacity duration-200"
              >
                О нас
              </Link>
              <Link
                href="/contacts"
                className="text-[32px] font-medium leading-none text-[#18191A]  dark:text-[#F2F2F2] transition-opacity duration-200"
              >
                Контакты
              </Link>
            </nav>

            {/* Contacts */}
            <div>
              <div className="mb-8">
                <p className="mb-2 text-[14px] text-[#434547] dark:text-[#E5E5E5]">
                  Email:
                </p>
                <a
                  href="mailto:Hello@Aspekt.com"
                  className="text-[16px] text-[#18191A] dark:text-[#F2F2F2] transition-opacity duration-200"
                >
                  Hello@Aspekt.com
                </a>
              </div>
              <div>
                <p className="mb-2 text-[14px] text-[#434547] dark:text-[#E5E5E5]">
                  Номер телефона:
                </p>
                <a
                  href="tel:+996995502598"
                  className="text-[16px] text-[#18191A] dark:text-[#F2F2F2] transition-opacity duration-200"
                >
                  +996 (995) 502 - 598
                </a>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="mb-6 text-[14px] text-[#434547] dark:text-[#E5E5E5]">
                Следите за нами
              </p>
              <div className="flex flex-col gap-8">
                <a href="#" className="group flex items-start gap-[8px]">
                  <span className="border-b border-[#111111] dark:border-[#f2f2f2] text-[16px] leading-[1] text-[#18191A] dark:text-[#E5E5E5]">
                    Instagram
                  </span>
                  <ArrowUpRight
                    size={24}
                    className="mt-[-4px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a href="#" className="group flex items-start gap-[8px]">
                  <span className="border-b border-[#111111] dark:border-[#f2f2f2] text-[16px] leading-[1] text-[#18191A] dark:text-[#E5E5E5]">
                    Telegram
                  </span>
                  <ArrowUpRight
                    size={24}
                    className="mt-[-4px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="grid grid-cols-4 items-center max-w-[1040px] ml-22">
            <div />
            <p className="text-[12px] text-[#434547] dark:text-[#C7C7C7]">
              Политика конфиденциальности
            </p>
            <div />
            <p className="justify-self-end text-[12px] text-[#434547] dark:text-[#C7C7C7]">
              © 2026 Aspekt design. Все права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
