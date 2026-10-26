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
      className="relative w-[320px] h-[420px] cursor-pointer group"
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
          className="absolute inset-0 rounded-[22px] overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-[22px] p-[2px]">
            <div
              className="absolute inset-0 rounded-[22px] opacity-60 group-hover:opacity-100 blur-xl transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle farthest-side at 0 100%, #00ccb1, transparent), radial-gradient(circle farthest-side at 100% 0, #7b61ff, transparent), radial-gradient(circle farthest-side at 100% 100%, #ffc414, transparent), radial-gradient(circle farthest-side at 0 0, #1ca0fb, #141316)",
              }}
            />
            <div
              className="absolute inset-0 rounded-[22px]"
              style={{
                background:
                  "radial-gradient(circle farthest-side at 0 100%, #00ccb1, transparent), radial-gradient(circle farthest-side at 100% 0, #7b61ff, transparent), radial-gradient(circle farthest-side at 100% 100%, #ffc414, transparent), radial-gradient(circle farthest-side at 0 0, #1ca0fb, #141316)",
              }}
            />
          </div>

          {/* Card content */}
          <div className="relative z-10 w-full h-full rounded-[22px] bg-[rgba(0,3,25,1)] flex flex-col items-center justify-center p-8 m-[2px]"
               style={{ width: "calc(100% - 4px)", height: "calc(100% - 4px)" }}>
            {/* Photo with glow ring */}
            <div className="relative mb-5">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#7b61ff] via-[#00ccb1] to-[#ffc414] opacity-50 group-hover:opacity-80 blur-md transition-opacity duration-500" />
              <div className="relative w-[160px] h-[160px] rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-500">
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
            <span className="inline-block rounded-full px-5 py-1.5 text-sm font-medium bg-gradient-to-r from-[#7b61ff]/20 to-[#00ccb1]/20 text-[#CBACF9] border border-[#7b61ff]/30 mb-4">
              {designation}
            </span>

            {/* Tap hint */}
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-auto group-hover:text-neutral-300 transition-colors duration-300">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 15l-2 5L9 9l11 4-5 2z" />
              </svg>
              <span>Click to know more</span>
            </div>
          </div>
        </div>

        {/* ===== BACK FACE ===== */}
        <div
          className="absolute inset-0 rounded-[22px] overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-[22px] p-[2px]">
            <div
              className="absolute inset-0 rounded-[22px] opacity-60 group-hover:opacity-100 blur-xl transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle farthest-side at 0 100%, #00ccb1, transparent), radial-gradient(circle farthest-side at 100% 0, #7b61ff, transparent), radial-gradient(circle farthest-side at 100% 100%, #ffc414, transparent), radial-gradient(circle farthest-side at 0 0, #1ca0fb, #141316)",
              }}
            />
            <div
              className="absolute inset-0 rounded-[22px]"
              style={{
                background:
                  "radial-gradient(circle farthest-side at 0 100%, #00ccb1, transparent), radial-gradient(circle farthest-side at 100% 0, #7b61ff, transparent), radial-gradient(circle farthest-side at 100% 100%, #ffc414, transparent), radial-gradient(circle farthest-side at 0 0, #1ca0fb, #141316)",
              }}
            />
          </div>

          {/* Card content */}
          <div className="relative z-10 w-full h-full rounded-[22px] bg-[rgba(0,3,25,1)] flex flex-col items-center justify-center p-8 m-[2px]"
               style={{ width: "calc(100% - 4px)", height: "calc(100% - 4px)" }}>
            {/* Small photo */}
            <div className="relative w-[70px] h-[70px] rounded-full overflow-hidden ring-2 ring-[#7b61ff]/40 mb-4">
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
            <span className="text-xs font-medium text-[#CBACF9] mb-5">
              {designation}
            </span>

            {/* Divider */}
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#7b61ff] to-[#00ccb1] rounded-full mb-5" />

            {/* Description */}
            <p className="text-sm text-neutral-400 text-center leading-relaxed">
              {description}
            </p>

            {/* Tap hint */}
            <div className="flex items-center gap-1.5 text-xs text-neutral-500 mt-auto pt-4 group-hover:text-neutral-300 transition-colors duration-300">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <span>Click to go back</span>
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
