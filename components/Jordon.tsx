"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

const Jordon = () => {
  return (
    <section className="w-full py-20 ">
      <h1 className="heading">
        Our <span className="text-purple">Mentors</span>
      </h1>
      <div className="flex flex-wrap mt-[35px] items-center justify-center ">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-8 sm:p-10 bg-shivansh ">
          <Image
            src={`/vp.jpg`}
            alt="Dr. Virendra Pathak"
            height="350"
            width="400"
            className="object-contain rounded-[300px] "
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Dr. Virendra Pathak
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Dr. Virendra Pathak serves as the Director of IET Lucknow, bringing
            visionary leadership and a deep commitment to fostering academic
            excellence, innovation, and entrepreneurship across the institution.
          </p>
          <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-s font-bold dark:bg-zinc-800">
            <span>Director, IET LKO</span>
          </button>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-shivansh">
          <Image
            src={`/pt.png`}
            alt="Dr. Pushkar Tripathi"
            height="400"
            width="400"
            className="object-contain rounded-[300px]"
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Dr. Pushkar Tripathi
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Dr. Pushkar Tripathi is the Chairman of the Institution&apos;s Innovation
            Council (IIC) at IET Lucknow, driving innovation-driven initiatives
            and nurturing a startup culture among students and faculty.
          </p>
          <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-s font-bold dark:bg-zinc-800">
            <span>Chairman, IIC LKO </span>
          </button>
        </BackgroundGradient>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-shivansh">
          <Image
            src={`/av.jpg`}
            alt="Dr. Anurag Verma"
            height="400"
            width="400"
            className="object-contain rounded-[300px] "
          />
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            Dr. Anurag Verma
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Dr. Anurag Verma is the Founder of E-Cell IET Lucknow, dedicated to
            building an entrepreneurial ecosystem that empowers students to
            transform innovative ideas into impactful ventures.
          </p>
          <button className="rounded-full pl-4 pr-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-s font-bold dark:bg-zinc-800">
            <span>Founder, E-cell IET LKO </span>
          </button>
        </BackgroundGradient>
      </div>
    </section>
  );
};

export default Jordon;
