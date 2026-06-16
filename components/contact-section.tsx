"use client";

import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const serviceOptions = [
  { full: "Моб. приложение", short: "Приложение" },
  { full: "Веб сайт", short: "Веб сайт" },
  { full: "CRM сервис", short: "CRM" },
];
const budgetOptions = ["до 2 000$", "до 5 000$", "до 10 000$"];

export function ContactSection() {
  const [selectedService, setSelectedService] = useState("Моб. приложение");
  const [budget, setBudget] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <section id="contact" className="px-[16px] md:px-[80px] py-[40px]">
      <div className="rounded-[16px] bg-[#18191A] px-[12px] py-[24px] md:px-[36px] md:py-[28px] md:min-h-[546px]">
        {/* TOP */}
        <div className="flex flex-col gap-[24px] md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-white text-[32px] md:text-[44px] leading-[1] font-medium">
              Обсудить проект
            </h2>

            <div className="mt-[22px] w-full inline-flex rounded-full bg-[#2A2B2C] p-[3px]">
              {serviceOptions.map((item) => (
                <button
                  key={item.full}
                  onClick={() => setSelectedService(item.full)}
                  className="relative h-[38px] w-full rounded-full px-[16px] md:px-[22px] text-[14px] text-white font-medium cursor-pointer whitespace-nowrap"
                >
                  {selectedService === item.full && (
                    <motion.div
                      layoutId="tab"
                      className="absolute inset-0 rounded-full bg-[#18191A]"
                    />
                  )}
                  <span className="relative z-10 md:hidden">{item.short}</span>
                  <span className="relative z-10 hidden md:inline">
                    {item.full}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* PERSON */}
          <div className="flex flex-col items-start gap-[14px] rounded-[8px] bg-[#2A2B2C] px-[12px] py-[12px] md:flex-row md:items-center">
            <Image
              src="/icons/Kristina.icon.png"
              alt="Kristina"
              width={40}
              height={40}
              className="rounded-[8px]"
            />

            <div>
              <p className="text-white text-[18px]">Кристина</p>
              <p className="text-white/60 text-[14px]">
                Специалист по работе с клиентами
              </p>
            </div>

            <button className="h-[36px] flex items-center justify-center gap-[8px] rounded-full bg-white px-[20px] text-black cursor-pointer">
              <Image
                src="/icons/telegram.png"
                alt="Telegram"
                width={20}
                height={20}
              />
              <span className="text-[16px]">Написать</span>
            </button>
          </div>
        </div>

        {/* FORM */}
        <div className="mt-[28px] grid grid-cols-1 md:grid-cols-3 gap-x-[18px] gap-y-[28px]">
          <input
            placeholder="Ваше имя *"
            className="w-full bg-transparent border-b border-[#333] pb-4 text-white outline-none placeholder:text-[#B5B5B5]"
          />
          <input
            placeholder="+996 *"
            className="w-full bg-transparent border-b border-[#333] pb-4 text-white outline-none placeholder:text-[#B5B5B5]"
          />
          <input
            placeholder="Компания"
            className="w-full bg-transparent border-b border-[#333] pb-4 text-white outline-none placeholder:text-[#B5B5B5]"
          />

          <div className="col-span-1 md:col-span-3">
            <textarea
              placeholder="Короткое описание проекта"
              className="w-full min-h-[80px] resize-none bg-transparent border-b border-[#333] text-white outline-none placeholder:text-[#B5B5B5]"
            />
            <p className="mt-[10px] text-[13px] text-white/50">
              Например: Сервис покупки и бронирования авиабилетов
            </p>
          </div>

          {/* BUDGET */}
          <div>
            <p className="text-white text-[16px] mb-[16px]">Бюджет *</p>
            <div className="flex flex-wrap gap-[10px]">
              {budgetOptions.map((item) => (
                <button
                  key={item}
                  onClick={() => setBudget(item)}
                  className={`h-[36px] rounded-[36px] px-[18px] text-[14px] font-medium cursor-pointer duration-500 ${
                    budget === item
                      ? "bg-white text-black"
                      : "bg-[#2A2B2C] text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* FILE */}
          <div className="col-span-1 md:col-span-2 md:ml-50">
            <p className="text-white text-[16px]">
              Технические документы{" "}
              <span className="text-white/50">(Опционально)</span>
            </p>

            <input ref={fileRef} hidden type="file" />

            <button
              onClick={() => fileRef.current?.click()}
              className="mt-[14px] flex items-center gap-[10px] rounded-[36px] bg-[#2A2B2C] transition-all px-[20px] h-[36px] text-white cursor-pointer hover:bg-[#3A3B3C] duration-300 ease-out"
            >
              <Image
                src="/icons/file.icon.png"
                alt="File"
                width={18}
                height={18}
              />
              Прикрепить файл
            </button>
          </div>
        </div>

        {/* SEND BUTTON */}
        <div className="mt-[26px]">
          <button className="flex h-[48px] w-[223px] items-center justify-between rounded-[44px] bg-white pl-[26px] pr-[4px] cursor-pointer">
            <span className="text-black font-medium text-[16px]">
              Отправить заявку
            </span>
            <span className="flex h-[44px] w-[44px] items-center justify-center rounded-[44px] bg-[#F53D18]">
              <ArrowUpRight size={24} className="text-[#fff]" />
            </span>
          </button>
        </div>

        <p className="mt-[20px] text-[12px] text-white/40">
          Нажимая на кнопку <span className="text-[#fff]">"Отправить"</span>, я
          соглашаюсь с политикой конфиденциальности
        </p>
      </div>
    </section>
  );
}
