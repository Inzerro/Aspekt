"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
const projects = [
  {
    id: 1,
    slug: "duffel-balance",
    name: "Duffel Balance",
    type: "Web Dashboard",
    description:
      "Duffel Balance - это онлайн-банковский сервис, созданный для развития экосистемы Duffel",
    icon: "/images/Duffel.Icon.png",
    images: [
      "/images/DuffelBalance1.png",
      "/images/DuffelBalance2.png",
      "/images/DuffelBalance3.png",
    ],
  },

  {
    id: 2,
    slug: "qeey",
    name: "Qeey",
    type: "Super App",
    description: "Сервис моментального бронирования посуточного жилья",
    icon: "/images/Qeey.icon.png",
    images: ["/images/Qeey1.png", "/images/Qeey2.png", "/images/Qeey3.png"],
  },

  {
    id: 3,
    slug: "asman-bank",
    name: "Asman bank",
    type: "Website",
    description:
      "There will be a text in one or two sentences with a description of the project.",
    icon: "/images/Asmanbank.Icon.png",
    images: [
      "/images/Asmanbank1.png",
      "/images/Asmanbank2.png",
      "/images/Asmanbank3.png",
    ],
  },

  {
    id: 4,
    slug: "central-asia-wanderers",
    name: "Central Asia Wanderers",
    type: "Website",
    description:
      "There will be a text in one or two sentences with a description of the project.",
    icon: "/images/Wanderers.Icon.png",
    images: [
      "/images/wanderers1.png",
      "/images/wanderers2.png",
      "/images/wanderers3.png",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-[1440px] px-[16px] py-[40px] lg:px-[80px]">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-[24px] text-[28px] font-medium md:mb-[36px] md:text-[34px]"
        >
          Проекты
        </motion.h2>

        <div className="flex flex-col divide-y divide-[#e5e7eb] dark:divide-[#2D2E2F]">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              id={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="
                grid
                grid-cols-1
                gap-[20px]
                py-[20px]
                md:grid-cols-[420px_1fr]
                md:gap-[32px]
              "
            >
              {/* LEFT */}
              <div className="flex flex-col justify-between">
                <div className="flex items-start gap-[14px]">
                  <div className="relative h-[44px] w-[44px] shrink-0 overflow-hidden rounded-[8px]">
                    <Image
                      src={project.icon}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-[20px] font-medium leading-tight">
                      {project.name}
                    </p>

                    <p className="mt-[4px] text-[14px] font-normal text-[#18191A] dark:text-[#F2F2F2]">
                      {project.type}
                    </p>
                  </div>
                </div>

                <p className="mt-[16px] max-w-[380px] text-[15px] leading-[1.45] font-normal text-[#18191A] dark:text-[#F2F2F2]">
                  {project.description}
                </p>
              </div>

              {/* RIGHT */}
              <div className="grid grid-cols-2 gap-[8px] md:grid-cols-3 md:gap-[16px]">
                {project.images.map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: i * 0.1,
                    }}
                    className={`
                      relative overflow-hidden
                      ${
                        i === 0
                          ? "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-auto md:w-[272px] md:h-[172px]"
                          : "aspect-square md:aspect-auto md:w-[272px] md:h-[172px]"
                      }
                    `}
                  >
                    <Link href={`/projects#${project.slug}`}>
                      <Image
                        src={src}
                        alt={`${project.name} ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
