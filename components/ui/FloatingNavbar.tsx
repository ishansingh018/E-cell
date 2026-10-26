"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Calendar, Sparkles, X, Menu, ArrowRight } from "lucide-react";
import { FaLocationArrow } from "react-icons/fa6";

const pastEvents = [
  {
    title: "E-Summit '24",
    tag: "Annual Flagship Conclave",
    date: "Spring Edition",
    description:
      "The premier entrepreneurial summit featuring 15+ keynote speakers, panel discussions on emerging technologies, live startup pitch competitions, and 1,000+ student attendees.",
    highlight: "15+ Speakers • ₹1.5L+ Cash Prizes",
  },
  {
    title: "Ideathon & Hack-E-Cell",
    tag: "36-Hour Hackathon & B-Plan",
    date: "National Challenge",
    description:
      "An intensive innovation sprint where multidisciplinary student teams created prototypes and pitch-ready business models with direct mentorship from industry experts.",
    highlight: "50+ Teams • Incubation Opportunities",
  },
  {
    title: "Founder's Conclave",
    tag: "Alumni & Industry Fireside Chats",
    date: "Speaker Series",
    description:
      "Exclusive interactive sessions with distinguished startup founders and IET Lucknow alumni sharing authentic insights on scaling, fundraising, and product-market fit.",
    highlight: "Real-world Q&A • 1-on-1 Mentorship",
  },
  {
    title: "Startup Expo & Pitch Deck",
    tag: "Angel Pitching & Networking",
    date: "Investor Meet",
    description:
      "A launchpad for student ventures to showcase their products to angel investors, venture capitalists, and incubation partners for seed-stage backing.",
    highlight: "Direct Investor Access • Seed Grants",
  },
];

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isPastEventsOpen, setIsPastEventsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPastEventsOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - (scrollYProgress.getPrevious() ?? 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
          setMobileMenuOpen(false);
        }
      }
    }
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.nav
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className={cn(
            "fixed z-[5000] top-6 inset-x-0 mx-auto w-[92%] sm:w-auto max-w-fit px-3 sm:px-5 py-2.5 rounded-full items-center justify-between sm:justify-center group",
            className
          )}
          style={{
            backdropFilter: "blur(20px) saturate(190%)",
            WebkitBackdropFilter: "blur(20px) saturate(190%)",
            backgroundColor: "rgba(6, 9, 31, 0.82)",
            boxShadow:
              "0 20px 40px -15px rgba(0, 3, 25, 0.7), 0 0 25px -5px rgba(203, 172, 249, 0.15)",
          }}
        >
          {/* Ambient Purple Gradient Glow along the border */}
          <div
            className="absolute -inset-[1px] rounded-full opacity-40 group-hover:opacity-80 blur-[6px] transition-all duration-700 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(203, 172, 249, 0.45) 0%, rgba(99, 102, 241, 0.3) 50%, rgba(203, 172, 249, 0.45) 100%)",
            }}
          />

          {/* Thin Glass Border with Top Shimmer */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              border: "1px solid rgba(203, 172, 249, 0.22)",
            }}
          >
            <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#CBACF9]/70 to-transparent" />
          </div>

          {/* Main Navbar Inner Layout */}
          <div className="relative z-10 flex items-center justify-between sm:gap-4 md:gap-6">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group/logo pl-1 pr-1 sm:pr-2"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden p-0.5 ring-1 ring-[#CBACF9]/30 group-hover/logo:ring-[#CBACF9]/70 transition-all duration-300 shadow-[0_0_12px_rgba(203,172,249,0.25)]">
                <Image
                  src="/ecell-logo.png"
                  alt="E-Cell Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain group-hover/logo:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
              <span className="hidden lg:inline-block font-semibold text-xs tracking-wider text-neutral-100 uppercase">
                E-Cell <span className="text-[#CBACF9] font-normal">IET</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div
              className="hidden md:flex items-center space-x-1"
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {navItems.map((navItem, idx) => {
                const isHovered = hoveredIdx === idx;
                return (
                  <Link
                    key={`nav-link-${idx}`}
                    href={`/${navItem.link}`}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    className="relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-colors duration-200"
                  >
                    {isHovered && (
                      <motion.span
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 rounded-full border border-[#CBACF9]/30 bg-gradient-to-r from-[#CBACF9]/15 to-[#6366F1]/15 shadow-[0_0_15px_rgba(203,172,249,0.15)]"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 32,
                        }}
                      />
                    )}
                    <span
                      className={cn(
                        "relative z-10 transition-colors duration-200",
                        isHovered
                          ? "text-[#CBACF9] drop-shadow-[0_0_8px_rgba(203,172,249,0.5)]"
                          : "text-neutral-300 hover:text-white"
                      )}
                    >
                      {navItem.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Past Events Button */}
              <button
                type="button"
                onClick={() => setIsPastEventsOpen(true)}
                className="relative group/events px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium text-neutral-200 hover:text-white transition-all duration-300 flex items-center gap-1.5 border border-[#CBACF9]/25 hover:border-[#CBACF9]/60 bg-[#CBACF9]/5 hover:bg-[#CBACF9]/15 shadow-[0_0_10px_rgba(203,172,249,0.08)] hover:shadow-[0_0_18px_rgba(203,172,249,0.25)]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#CBACF9] group-hover/events:rotate-12 transition-transform duration-300" />
                <span>Past Events</span>
              </button>

              {/* Join E-Cell Primary Button */}
              <Link
                href="/#contact"
                className="relative inline-flex items-center justify-center p-[1.5px] overflow-hidden rounded-full group/join transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                {/* Glowing Animated Gradient Border */}
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#CBACF9_0%,#6366F1_50%,#CBACF9_100%)] opacity-80 group-hover/join:opacity-100" />

                {/* Inner Button Content */}
                <span className="relative z-10 px-4 py-1.5 rounded-full bg-[#06091F] text-xs lg:text-sm font-semibold text-white flex items-center gap-1.5 shadow-[0_0_20px_rgba(203,172,249,0.35)] group-hover/join:bg-[#0b0f2e] transition-colors duration-300">
                  <Sparkles className="w-3.5 h-3.5 text-[#CBACF9] group-hover/join:rotate-45 transition-transform duration-300" />
                  <span>Join E-Cell</span>
                  <FaLocationArrow className="w-2.5 h-2.5 text-[#CBACF9] -rotate-45 ml-0.5 group-hover/join:translate-x-0.5 group-hover/join:-translate-y-0.5 transition-transform duration-300" />
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPastEventsOpen(true)}
                className="px-2.5 py-1 rounded-full text-[11px] font-medium text-neutral-200 border border-[#CBACF9]/30 bg-[#CBACF9]/10 flex items-center gap-1"
              >
                <Calendar className="w-3 h-3 text-[#CBACF9]" />
                <span>Events</span>
              </button>

              <button
                type="button"
                aria-label="Toggle navigation menu"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#CBACF9]" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="sm:hidden pt-4 pb-2 border-t border-[#CBACF9]/20 mt-3 flex flex-col space-y-2.5"
              >
                {navItems.map((navItem, idx) => (
                  <Link
                    key={`mobile-link-${idx}`}
                    href={`/${navItem.link}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm text-neutral-200 hover:text-[#CBACF9] hover:bg-[#CBACF9]/10 transition-colors flex items-center justify-between"
                  >
                    <span>{navItem.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#CBACF9]/60" />
                  </Link>
                ))}

                <div className="pt-2 flex flex-col gap-2">
                  <Link
                    href="/#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-2 px-4 rounded-full text-center text-xs font-semibold text-white bg-gradient-to-r from-[#CBACF9]/30 via-[#6366F1]/40 to-[#CBACF9]/30 border border-[#CBACF9]/40 shadow-[0_0_15px_rgba(203,172,249,0.25)] flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#CBACF9]" />
                    <span>Join E-Cell</span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </AnimatePresence>

      {/* Past Events Modal */}
      <AnimatePresence>
        {isPastEventsOpen && (
          <div className="fixed inset-0 z-[6000] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPastEventsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="relative z-10 w-full max-w-3xl max-h-[85vh] rounded-[28px] overflow-hidden p-[1.5px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(203, 172, 249, 0.5) 0%, rgba(255, 255, 255, 0.1) 40%, rgba(99, 102, 241, 0.35) 75%, rgba(203, 172, 249, 0.45) 100%)",
                boxShadow: "0 25px 60px -15px rgba(0, 3, 25, 0.9)",
              }}
            >
              <div
                className="w-full h-full rounded-[26.5px] p-6 sm:p-8 overflow-y-auto max-h-[84vh]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(6, 9, 31, 0.98) 0%, rgba(0, 3, 25, 0.99) 100%)",
                }}
              >
                {/* Top Spotlight Glow */}
                <div
                  className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-44 rounded-full pointer-events-none opacity-25 blur-3xl"
                  style={{ background: "#CBACF9" }}
                />

                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#CBACF9]/10 text-[#CBACF9] border border-[#CBACF9]/25 mb-2.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>E-Cell Archives</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Past <span className="text-purple">Events</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-[#BEC1DD] mt-1 font-light">
                      A glimpse into our flagship entrepreneurship summits,
                      hackathons, and leadership talks.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsPastEventsOpen(false)}
                    aria-label="Close modal"
                    className="p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 relative z-10">
                  {pastEvents.map((event, index) => (
                    <div
                      key={`past-event-${index}`}
                      className="group/card relative rounded-2xl p-5 border border-white/10 hover:border-[#CBACF9]/40 bg-white/[0.02] hover:bg-[#CBACF9]/[0.04] transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[11px] font-semibold tracking-wider text-[#CBACF9] uppercase">
                            {event.tag}
                          </span>
                          <span className="text-[11px] text-neutral-400">
                            {event.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover/card:text-[#CBACF9] transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-xs text-[#BEC1DD] leading-relaxed font-light">
                          {event.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-[#CBACF9]/90">
                          {event.highlight}
                        </span>
                        <Sparkles className="w-3.5 h-3.5 text-[#CBACF9] opacity-40 group-hover/card:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Callout */}
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                  <p className="text-xs text-[#BEC1DD] text-center sm:text-left">
                    Want to partner, sponsor, or speak at our upcoming events?
                  </p>
                  <Link
                    href="/#contact"
                    onClick={() => setIsPastEventsOpen(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#CBACF9]/30 to-[#6366F1]/40 border border-[#CBACF9]/40 hover:border-[#CBACF9]/80 shadow-[0_0_15px_rgba(203,172,249,0.2)] transition-all duration-300"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#CBACF9]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
