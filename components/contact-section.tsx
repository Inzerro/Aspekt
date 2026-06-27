"use client";

import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const SERVICE_OPTIONS = [
  { full: "Моб. приложение", short: "Приложение" },
  { full: "Веб сайт", short: "Веб сайт" },
  { full: "CRM сервис", short: "CRM" },
];

const BUDGET_OPTIONS = ["до 2 000$", "до 5 000$", "до 10 000$"];

function formatPhone(raw: string): string {
  let digits = raw.replace(/\D/g, "");
  if (digits.startsWith("996")) digits = digits.slice(3);
  digits = digits.slice(0, 9);

  let result = "+996 ";
  if (digits.length > 0) result += `(${digits.slice(0, 3)}`;
  if (digits.length >= 4) result += `) ${digits.slice(3, 5)}`;
  if (digits.length >= 6) result += `-${digits.slice(5, 7)}`;
  if (digits.length >= 8) result += `-${digits.slice(7, 9)}`;

  return result;
}

function PdfIcon() {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_544_1559"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="18"
        height="20"
      >
        <path
          d="M16.2338 20H1.42857C0.639594 20 0 19.3604 0 18.5714V1.42857C0 0.639594 0.639593 0 1.42857 0H11.039L17.6623 6.62338V18.5714C17.6623 19.3604 17.0227 20 16.2338 20Z"
          fill="url(#paint0_linear_544_1559)"
        />
      </mask>
      <g mask="url(#mask0_544_1559)">
        <path
          d="M16.2338 20H1.42857C0.639594 20 0 19.3604 0 18.5714V1.42857C0 0.639594 0.639593 0 1.42857 0H11.039L17.6623 6.62338V18.5714C17.6623 19.3604 17.0227 20 16.2338 20Z"
          fill="url(#paint1_linear_544_1559)"
        />
        <path
          opacity="0.12"
          d="M12.9219 16.8181H4.74023V16.0388H12.9219V16.8181ZM12.9219 14.8698H4.74023V14.0905H12.9219V14.8698ZM12.9219 12.9225H4.74023V12.1432H12.9219V12.9225ZM12.9219 10.9743H4.74023V10.195H12.9219V10.9743ZM12.9219 9.02606H4.74023V8.24677H12.9219V9.02606Z"
          fill="white"
        />
        <mask
          id="mask1_544_1559"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="18"
          height="20"
        >
          <path
            d="M16.2338 20H1.42857C0.639594 20 0 19.3604 0 18.5714V1.42857C0 0.639594 0.639593 0 1.42857 0H11.039L17.6623 6.62338V18.5714C17.6623 19.3604 17.0227 20 16.2338 20Z"
            fill="url(#paint2_linear_544_1559)"
          />
        </mask>
        <g mask="url(#mask1_544_1559)">
          <ellipse
            opacity="0.08"
            cx="-1.78584"
            cy="-0.422075"
            rx="14.513"
            ry="13.9286"
            fill="url(#paint3_linear_544_1559)"
          />
          <ellipse
            opacity="0.08"
            cx="-1.7858"
            cy="-0.422056"
            rx="9.12338"
            ry="8.73377"
            fill="url(#paint4_linear_544_1559)"
          />
        </g>
        <g filter="url(#filter0_d_544_1559)">
          <path
            d="M17.6624 6.62338H12.4676C11.6787 6.62338 11.0391 5.98378 11.0391 5.19481V0L17.6624 6.62338Z"
            fill="url(#paint5_linear_544_1559)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_544_1559"
          x="9.54556"
          y="-1.55844"
          width="9.8698"
          height="9.87011"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="0.12987" dy="0.0649351" />
          <feGaussianBlur stdDeviation="0.811688" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_544_1559"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_544_1559"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_544_1559"
          x1="8.83117"
          y1="0"
          x2="8.83117"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF7979" />
          <stop offset="1" stopColor="#E85555" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_544_1559"
          x1="8.83117"
          y1="0"
          x2="8.83117"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF7981" />
          <stop offset="1" stopColor="#E85567" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_544_1559"
          x1="8.83117"
          y1="0"
          x2="8.83117"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF7981" />
          <stop offset="1" stopColor="#E85567" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_544_1559"
          x1="-0.732093"
          y1="0.0565696"
          x2="3.66915"
          y2="11.7375"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_544_1559"
          x1="-1.12338"
          y1="-0.121927"
          x2="1.63111"
          y2="7.20711"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_544_1559"
          x1="14.3508"
          y1="0"
          x2="14.3508"
          y2="6.62338"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D03954" />
          <stop offset="1" stopColor="#C02A3C" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ContactSection() {
  const [selectedService, setSelectedService] = useState(
    SERVICE_OPTIONS[0].full,
  );
  const [budget, setBudget] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setSelectedFile(file);
    e.target.value = "";
  }

  function removeFile() {
    setSelectedFile(null);
  }

  return (
    <section id="contact" className="px-[16px] md:px-[80px] py-[40px]">
      <div className="rounded-[16px] bg-[#18191A] px-[12px] py-[24px] md:px-[36px] md:py-[28px] md:min-h-[546px]">
        {/* TOP ROW */}
        <div className="flex flex-col gap-[24px] md:flex-row md:items-start md:justify-between">
          {/* TITLE + TABS */}
          <div>
            <h2 className="text-white text-[32px] md:text-[44px] leading-[1] font-medium">
              Обсудить проект
            </h2>

            <div className="mt-[22px] w-full inline-flex rounded-full bg-[#2A2B2C] p-[3px]">
              {SERVICE_OPTIONS.map((item) => (
                <button
                  key={item.full}
                  onClick={() => setSelectedService(item.full)}
                  className="relative h-[38px] w-full rounded-full px-[16px] md:px-[22px] text-[14px] text-white font-normal cursor-pointer whitespace-nowrap"
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

          {/* MANAGER CARD */}
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
              <span className="text-[16px] font-medium">Написать</span>
            </button>
          </div>
        </div>

        {/* FORM */}
        <div className="mt-[28px] grid grid-cols-1 md:grid-cols-3 gap-x-[18px] gap-y-[28px]">
          <input
            placeholder="Ваше имя *"
            className="w-full bg-transparent border-b border-[#333] pb-4 text-[18px] text-white outline-none placeholder:text-[#B5B5B5]"
          />

          <input
            value={phone}
            placeholder="+996 *"
            onFocus={() => {
              if (!phone) setPhone("+996(");
            }}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            className={`w-full bg-transparent border-b border-[#333] pb-4 text-[18px] outline-none placeholder:text-[#B5B5B5] ${phone.length > 5 ? "text-white" : "text-[#B5B5B5]"}`}
          />

          <input
            placeholder="Компания"
            className="w-full bg-transparent border-b border-[#333] pb-4 text-[18px] text-white outline-none placeholder:text-[#B5B5B5]"
          />

          <div className="col-span-1 md:col-span-3">
            <textarea
              placeholder="Короткое описание проекта"
              className="w-full resize-none bg-transparent text-white text-[18px] outline-none placeholder:text-[#B5B5B5]"
            />
            <div className="relative -mt-[16px] border-b border-[#333]" />
            <p className="mt-[10px] text-[14px] text-white/50">
              Например: Сервис покупки и бронирования авиабилетов
            </p>
          </div>

          {/* BUDGET */}
          <div>
            <p className="text-white text-[18px] mb-[16px]">Бюджет *</p>
            <div className="flex flex-wrap gap-[10px]">
              {BUDGET_OPTIONS.map((item) => (
                <button
                  key={item}
                  onClick={() => setBudget(item)}
                  className={`h-[36px] rounded-[36px] px-[18px] text-[14px] font-medium cursor-pointer transition-colors duration-300 ${
                    budget === item
                      ? "bg-white text-black"
                      : "bg-[#2A2B2C] text-white hover:bg-[#3A3B3C]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* FILE */}
          <div className="col-span-1 md:col-span-2 md:ml-50">
            <p className="text-white text-[18px]">
              Технические документы{" "}
              <span className="text-white/50">(Опционально)</span>
            </p>

            <input
              ref={fileRef}
              hidden
              type="file"
              onChange={handleFileChange}
            />

            {selectedFile ? (
              <div className="mt-[14px] flex items-center gap-[10px]">
                <div className="flex items-center gap-[8px] rounded-[36px] bg-[#2A2B2C] pl-[16px] pr-[24px] h-[36px] w-fit max-w-[202px] ">
                  <span className="shrink-0">
                    <PdfIcon />
                  </span>
                  <span className="text-white text-[14px] truncate">
                    {selectedFile.name}
                  </span>
                </div>
                <button
                  onClick={removeFile}
                  className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#2A2B2C] text-white hover:bg-[#3A3B3C] transition-colors duration-300 cursor-pointer text-[24px] leading-none"
                >
                  ×
                </button>
              </div>
            ) : (
              <button
                onClick={() => fileRef.current?.click()}
                className="mt-[14px] flex items-center gap-[10px] rounded-[36px] bg-[#2A2B2C] pl-[16px] pr-[24px] h-[36px] text-white text-[16px] cursor-pointer hover:bg-[#3A3B3C] duration-300 ease-out"
              >
                <Image
                  src="/icons/File.icon.png"
                  alt="File"
                  width={18}
                  height={18}
                  className="ml-1"
                />
                Прикрепить файл
              </button>
            )}
          </div>
        </div>

        {/* SUBMIT */}
        <div className="mt-[26px]">
          <button className="flex h-[48px] w-[223px] items-center justify-between rounded-[44px] bg-white pl-[26px] pr-[4px] cursor-pointer transition-colors duration-300 hover:bg-[#F53D18] group">
            <span className="text-black font-medium text-[16px] transition-colors duration-300 group-hover:text-white">
              Отправить заявку
            </span>
            <span className="flex h-[44px] w-[44px] items-center justify-center rounded-[44px] bg-[#F53D18] transition-colors duration-300 group-hover:bg-white">
              <ArrowUpRight
                size={24}
                className="text-white transition-colors duration-300 group-hover:text-[#F53D18]"
              />
            </span>
          </button>
        </div>

        <p className="mt-[20px] text-[12px] text-white/40">
          Нажимая на кнопку <span className="text-white">"Отправить"</span>, я
          соглашаюсь с политикой конфиденциальности
        </p>
      </div>
    </section>
  );
}
