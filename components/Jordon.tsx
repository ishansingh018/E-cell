"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const mentors = [
  {
    name: "Dr. Virendra Pathak",
    designation: "Director, IET LKO",
    image: "/vp.jpg",
    description:
      "Dr. Virendra Pathak serves as the Director of IET Lucknow, bringing visionary leadership and a deep commitment to fostering academic excellence, innovation, and entrepreneurship across the institution.",
  },
  {
    name: "Dr. Pushkar Tripathi",
    designation: "Chairman, IIC IET LKO",
    image: "/pt.png",
    description:
      "Dr. Pushkar Tripathi is the Chairman of the Institution's Innovation Council (IIC) at IET Lucknow, driving innovation-driven initiatives and nurturing a startup culture among students and faculty.",
  },
  {
    name: "Dr. Anurag Verma",
    designation: "Founder, E-cell IET LKO",
    image: "/av.jpg",
    description:
      "Dr. Anurag Verma is the Founder of E-Cell IET Lucknow, dedicated to building an entrepreneurial ecosystem that empowers students to transform innovative ideas into impactful ventures.",
  },
];

const FlipCard = ({
  name,
  designation,
  image,
  description,
}: {
  name: string;
  designation: string;
  image: string;
  description: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-[320px] h-[430px] cursor-pointer group"
      style={{ perspective: "1200px" }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* ===== FRONT FACE ===== */}
        <div
          className="absolute inset-0 rounded-[24px] overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Subtle ambient purple glow on hover */}
          <div
            className="absolute -inset-[1px] rounded-[24px] opacity-30 group-hover:opacity-75 blur-md transition-all duration-500"
            style={{
              background:
                "linear-gradient(135deg, rgba(203, 172, 249, 0.45) 0%, rgba(99, 102, 241, 0.2) 50%, rgba(203, 172, 249, 0.35) 100%)",
            }}
          />

          {/* Elegant sleek border */}
          <div
            className="absolute inset-0 rounded-[24px] p-[1.5px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(203, 172, 249, 0.4) 0%, rgba(255, 255, 255, 0.08) 40%, rgba(99, 102, 241, 0.25) 75%, rgba(203, 172, 249, 0.35) 100%)",
            }}
          >
            {/* Card inner content */}
            <div
              className="relative z-10 w-full h-full rounded-[22.5px] flex flex-col items-center justify-center p-7 overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(6, 9, 31, 0.98) 0%, rgba(0, 3, 25, 0.99) 100%)",
              }}
            >
              {/* Soft spotlight accent at top */}
              <div
                className="absolute -top-16 left-1/2 -translate-x-1/2 w-44 h-36 rounded-full pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity duration-500 blur-2xl"
                style={{ background: "#CBACF9" }}
              />

              {/* Photo with refined ring */}
              <div className="relative mb-5">
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#CBACF9]/30 to-[#6366F1]/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                <div className="relative w-[155px] h-[155px] rounded-full overflow-hidden ring-1 ring-white/15 group-hover:ring-[#CBACF9]/50 transition-all duration-500 shadow-2xl">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-neutral-100 mb-2 text-center">
                {name}
              </h3>

              {/* Designation badge */}
              <span className="inline-block rounded-full px-4 py-1.5 text-xs font-medium tracking-wide bg-[#CBACF9]/10 text-[#CBACF9] border border-[#CBACF9]/25 mb-4 shadow-[0_0_15px_rgba(203,172,249,0.06)]">
                {designation}
              </span>

              {/* Tap hint */}
              <div className="flex items-center gap-1.5 text-xs text-[#BEC1DD]/50 mt-auto group-hover:text-[#CBACF9] transition-colors duration-300">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 15l-2 5L9 9l11 4-5 2z" />
                </svg>
                <span className="text-[11px] font-medium tracking-wide">Click to know more</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== BACK FACE ===== */}
        <div
          className="absolute inset-0 rounded-[24px] overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Subtle ambient purple glow on hover */}
          <div
            className="absolute -inset-[1px] rounded-[24px] opacity-30 group-hover:opacity-75 blur-md transition-all duration-500"
            style={{
              background:
                "linear-gradient(135deg, rgba(203, 172, 249, 0.45) 0%, rgba(99, 102, 241, 0.2) 50%, rgba(203, 172, 249, 0.35) 100%)",
            }}
          />

          {/* Elegant sleek border */}
          <div
            className="absolute inset-0 rounded-[24px] p-[1.5px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(203, 172, 249, 0.4) 0%, rgba(255, 255, 255, 0.08) 40%, rgba(99, 102, 241, 0.25) 75%, rgba(203, 172, 249, 0.35) 100%)",
            }}
          >
            {/* Card inner content */}
            <div
              className="relative z-10 w-full h-full rounded-[22.5px] flex flex-col items-center justify-center p-7 overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(6, 9, 31, 0.98) 0%, rgba(0, 3, 25, 0.99) 100%)",
              }}
            >
              {/* Soft spotlight accent at top */}
              <div
                className="absolute -top-16 left-1/2 -translate-x-1/2 w-44 h-36 rounded-full pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity duration-500 blur-2xl"
                style={{ background: "#CBACF9" }}
              />

              {/* Small photo */}
              <div className="relative w-[68px] h-[68px] rounded-full overflow-hidden ring-1 ring-[#CBACF9]/30 mb-3.5 shadow-lg">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-neutral-100 mb-1 text-center">
                {name}
              </h3>

              {/* Designation */}
              <span className="text-xs font-medium text-[#CBACF9] mb-4">
                {designation}
              </span>

              {/* Divider */}
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#CBACF9]/60 to-transparent rounded-full mb-4" />

              {/* Description */}
              <p className="text-xs text-[#BEC1DD] text-center leading-relaxed font-light">
                {description}
              </p>

              {/* Tap hint */}
              <div className="flex items-center gap-1.5 text-xs text-[#BEC1DD]/50 mt-auto pt-3 group-hover:text-[#CBACF9] transition-colors duration-300">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                <span className="text-[11px] font-medium tracking-wide">Click to go back</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Jordon = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Our <span className="text-purple">Mentors</span>
      </h1>
      <div className="flex flex-wrap mt-[35px] items-center justify-center gap-8">
        {mentors.map((mentor) => (
          <FlipCard key={mentor.name} {...mentor} />
        ))}
      </div>
    </section>
  );
};

export default Jordon;
