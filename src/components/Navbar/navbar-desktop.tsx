"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { WawasanDropdown } from "./dropdowns/wawasan-dropdown";

type ActiveDropdown = "produk" | "wawasan" | null;

export const NavbarDesktop = () => {
  const [activeDropdown, setActiveDropdown] = useState<ActiveDropdown>(null);

  const handleDropdownToggle = (dropdown: ActiveDropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const dropdownConfigs = {
    produk: { width: 800, content: null },
    wawasan: { width: 760, content: <WawasanDropdown /> },
  };

  const currentConfig = activeDropdown ? dropdownConfigs[activeDropdown] : null;

  return (
    <>
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setActiveDropdown(null)}
          />
        )}
      </AnimatePresence>

      <div className="px-20 py-6 flex justify-between items-center fixed top-0 left-0 right-0 bg-[#FFFFFF1A] backdrop-blur-lg z-50">
        <Image
          src="/navbar/navbar.png"
          alt="Corvidian Logo"
          width={120}
          height={24}
        />
        <div className="bg-[linear-gradient(111deg,_#02C2B3_-11.36%,_#1D1F26_28.42%,_#1D1F26_67.11%,_#1578CB_121.2%)] px-4 py-2 border border-corvidian-5 rounded-full flex items-center gap-2">
          <Image src="/navbar/whatsapp.png" alt="WA" width={21} height={21} />
          <Link
            href="https://wa.me/1234567890"
            className="text-corvidian-4 text-sm font-bold"
          >
            WhatsApp Kami
          </Link>
        </div>
      </div>

      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          className="bg-corvidian-1 text-corvidian-5 flex flex-col items-center overflow-hidden"
          animate={{
            width: activeDropdown ? currentConfig?.width : "auto",
            borderRadius: activeDropdown ? 24 : 9999,
            paddingLeft: 32,
            paddingRight: 32,
            paddingTop: 12,
            paddingBottom: activeDropdown ? 0 : 12,
          }}
          transition={{
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <div className="flex gap-8 text-sm font-normal whitespace-nowrap relative z-10">
            <button
              onClick={() => handleDropdownToggle("produk")}
              className={`focus:outline-none transition-colors hover:text-white ${
                activeDropdown === "produk" ? "text-corvidian-3" : ""
              }`}
            >
              Produk & Layanan
            </button>
            <button
              onClick={() => handleDropdownToggle("wawasan")}
              className={`focus:outline-none transition-colors hover:text-white ${
                activeDropdown === "wawasan" ? "text-corvidian-3" : ""
              }`}
            >
              Wawasan
            </button>
            <Link
              href="#tentang-kami"
              className="hover:text-white transition-colors"
              onClick={() => setActiveDropdown(null)}
            >
              Tentang Kami
            </Link>
          </div>

          <motion.div
            initial={false}
            animate={{
              height: activeDropdown ? 420 : 0,
              marginTop: activeDropdown ? 12 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="overflow-hidden w-full"
          >
            <AnimatePresence mode="wait">
              {activeDropdown && (
                <motion.div
                  key={activeDropdown}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.25,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="h-[420px] rounded-2xl bg-[#1D1F26]/80 mb-3"
                >
                  {currentConfig?.content}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
