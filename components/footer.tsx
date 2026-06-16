"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F2F3F5]">
      {/* ================= MOBILE ================= */}

      <div className="block md:hidden px-[16px] pt-[48px] pb-[40px]">
        {/* Navigation */}

        <div className="border-t border-[#E5E7EB]">
          {[
            { label: "Главная", href: "/" },
            { label: "Проекты", href: "/projects" },
            { label: "О нас", href: "/about" },
            { label: "Контакты", href: "/contacts" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="
                flex
                items-center
                justify-between
                border-b
                border-[#E5E7EB]
                py-[20px]
              "
            >
              <span className="text-[20px] font-medium text-[#18191A]">
                {item.label}
              </span>

              <ArrowUpRight
                size={24}
                strokeWidth={1.8}
                className="text-[#707275]"
              />
            </Link>
          ))}
        </div>

        {/* Contacts */}

        <div className="mt-[36px]">
          <p className="mb-[12px] text-[12px] text-[#555555]">Email:</p>

          <a
            href="mailto:Hello@Aspekt.com"
            className="text-[16px] leading-none text-[#18191A]"
          >
            Hello@Aspekt.com
          </a>
        </div>

        <div className="mt-[32px]">
          <p className="mb-[12px] text-[12px] text-[#555555]">
            Номер телефона:
          </p>

          <a
            href="tel:+996995502598"
            className="text-[16px] leading-none text-[#18191A]"
          >
            +996 (995) 502 - 598
          </a>
        </div>

        {/* Socials + Logo */}

        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-[32px]">
            <a href="#" className="group flex items-center gap-[12px]">
              <span className="border-b border-[#18191A] text-[16px] text-[#18191A]">
                Instagram
              </span>

              <ArrowUpRight
                size={24}
                strokeWidth={2}
                className="text-[#18191A]"
              />
            </a>

            <a href="#" className="group flex items-center gap-[12px]">
              <span className="border-b border-[#18191A] text-[16px] text-[#18191A]">
                Telegram
              </span>

              <ArrowUpRight
                size={24}
                strokeWidth={2}
                className="text-[#18191A]"
              />
            </a>
          </div>

          {/* Logo */}

          <div className="relative h-[122px] w-[122px] shrink-0">
            <div className="absolute inset-0 rounded-full bg-[#111111]" />

            <div className="absolute left-1/2 top-1/2 h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-[#F2F3F5]" />
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-[24px] border-t border-[#E5E7EB] pt-[28px]">
          <p className="text-[12px] text-[#555555]">
            Политика конфиденциальности
          </p>

          <p className="mt-[28px] text-[12px] text-[#555555]">
            © 2026 Aspekt design. Все права защищены
          </p>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}

      <div className="hidden md:block">
        <div className="px-[80px] pt-12 pb-6">
          <div className="grid grid-cols-4 gap-16">
            {/* Logo */}

            <div className="flex min-h-[364px] flex-col justify-between">
              <div>
                <h2 className="text-[44px] font-medium leading-[0.95] tracking-[-0.04em] text-[#111111]">
                  ASPEKT
                </h2>

                <div className="flex items-start gap-3">
                  <h2 className="text-[44px] font-medium leading-[0.95] tracking-[-0.04em] text-[#F53D18]">
                    Design
                  </h2>

                  <span className="text-[16px] text-[#18191A]">(Studio)</span>
                </div>
              </div>

              <div className="relative h-[160px] w-[160px]">
                <div className="absolute inset-0 rounded-full bg-[#111111]" />

                <div className="absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 rounded-[4px] bg-[#F3F3F4]" />
              </div>
            </div>

            {/* Navigation */}

            <nav className="flex flex-col gap-6">
              <Link
                href="/projects"
                className="
  text-[32px]
  font-medium
  leading-none
  text-[#111111]
  "
              >
                Проекты
              </Link>

              <Link
                href="/about"
                className="
  text-[32px]
  font-medium
  leading-none
  text-[#111111]
  "
              >
                О нас
              </Link>

              <Link
                href="/contacts"
                className="
  text-[32px]
  font-medium
  leading-none
  text-[#111111]
  "
              >
                Контакты
              </Link>
            </nav>

            {/* Contacts */}

            <div>
              <div className="mb-8">
                <p className="mb-2 text-[14px] text-[#434547]">Email:</p>

                <a
                  href="mailto:Hello@Aspekt.com"
                  className="text-[16px] text-[#111111]"
                >
                  Hello@Aspekt.com
                </a>
              </div>

              <div>
                <p className="mb-2 text-[14px] text-[#434547]">
                  Номер телефона:
                </p>

                <a
                  href="tel:+996995502598"
                  className="text-[16px] text-[#111111]"
                >
                  +996 (995) 502 - 598
                </a>
              </div>
            </div>

            {/* Socials */}

            <div>
              <p className="mb-6 text-[14px] text-[#434547]">Следите за нами</p>

              <div className="flex flex-col gap-8">
                <a
                  href="#"
                  className="group flex items-center justify-between border-b border-[#111111] pb-1"
                >
                  <span className="text-[16px] text-[#18191A]">Instagram</span>

                  <ArrowUpRight
                    size={24}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="#"
                  className="group flex items-center justify-between border-b border-[#18191A] pb-1"
                >
                  <span className="text-[16px] text-[#18191A]">Telegram</span>

                  <ArrowUpRight
                    size={24}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-3 items-center">
            <p className="text-[12px] text-[#434547]">
              Политика конфиденциальности
            </p>

            <div />

            <p className="justify-self-end text-[12px] text-[#434547]">
              © 2026 Aspekt design. Все права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
