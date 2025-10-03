"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export const ProjectDesktop = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-[#F4F4F4] py-16">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center mb-12 px-20">
          <div>
            <p className="text-corvidian-2 font-semibold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-corvidian-2 rounded-full"></span>
              Project Kami
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-corvidian-1">
              Optimalkan Bisnis Anda dengan
              <br />
              Solusi IT yang Tepat.
            </h2>
          </div>

          <div className="text-left max-w-md">
            <p className="text-corvidian-1 text-sm lg:text-base">
              Mengembangkan aplikasi khusus dan layanan cloud untuk bisnis Anda
              dengan CoBuild
            </p>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="flex gap-6 w-max pb-4 px-20">
            <div className="w-[280px]">
              <div className="bg-[linear-gradient(360deg,#FFFFFF_0%,#C5CED5_100%)] rounded-3xl shadow-lg overflow-hidden relative h-[400px] flex items-end">
                <div className="absolute left-0 top-0 h-full">
                  <Image
                    src="/project/orang.png"
                    alt="Orang"
                    width={200}
                    height={400}
                    quality={100}
                    className="h-full w-auto object-cover object-left"
                  />
                </div>
                <div className="absolute bottom-6 right-6 text-right z-10">
                  <h3 className="text-corvidian-1 font-extrabold text-xl leading-tight mb-2">
                    Human
                    <br />
                    Capital
                    <br />
                    Internal
                    <br />
                    <span className="text-corvidian-4">System</span>
                  </h3>
                  <p className="text-corvidian-1 text-xs underline">
                    Pelajari lebih lanjut
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[280px]">
              <div className="bg-[linear-gradient(198.08deg,#02C2B3_-19.55%,#1D1F26_17.7%,#1D1F26_46.65%,#1578CB_95.15%)] rounded-3xl shadow-lg overflow-hidden relative h-[400px]">
                <div className="absolute bottom-0 left-0 w-full h-[60%]">
                  <Image
                    src="/project/duduk.png"
                    alt="Duduk"
                    width={280}
                    height={240}
                    quality={100}
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
                <div className="absolute top-6 left-6 text-left">
                  <h3 className="text-white font-extrabold text-xl leading-tight mb-2">
                    Recruitment
                    <br />
                    <span className="text-corvidian-4">System</span>
                  </h3>
                  <p className="text-white text-xs underline">
                    Pelajari lebih lanjut
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[280px]">
              <div className="bg-[linear-gradient(90deg,#FFFFFF_0%,#C5CED5_100%)] rounded-3xl shadow-lg overflow-hidden relative h-[400px]">
                <div className="absolute top-0 left-0 w-full h-[55%]">
                  <Image
                    src="/project/library.png"
                    alt="Library"
                    width={280}
                    height={220}
                    quality={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-6 left-6 text-left">
                  <h3 className="text-corvidian-1 font-extrabold text-2xl leading-tight mb-2">
                    Library
                    <br />
                    <span className="text-corvidian-4">System</span>
                  </h3>
                  <p className="text-corvidian-1 text-xs underline">
                    Pelajari lebih lanjut
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[280px]">
              <div
                className="bg-[linear-gradient(142.7deg,#02C2B3_-28.02%,#1D1F26_17.75%,#1D1F26_62.27%,#1578CB_124.5%)] rounded-3xl overflow-hidden relative h-[400px]"
                style={{
                  boxShadow:
                    "0px 2.77px 2.21px 0px #00000005, 0px 6.65px 5.32px 0px #00000007, 0px 12.52px 10.02px 0px #00000009, 0px 22.34px 17.87px 0px #0000000B, 0px 41.78px 33.42px 0px #0000000D, 0px 100px 80px 0px #00000012",
                }}
              >
                <div className="absolute bottom-0 left-0 w-full h-[50%]">
                  <Image
                    src="/project/management.png"
                    alt="Management"
                    width={280}
                    height={200}
                    quality={100}
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
                <div className="absolute top-6 left-6 text-left">
                  <h3 className="text-white font-extrabold text-xl leading-tight mb-2">
                    Project
                    <br />
                    Management
                    <br />
                    <span className="text-corvidian-4">System</span>
                  </h3>
                  <p className="text-white text-xs underline">
                    Pelajari lebih lanjut
                </p>  
                </div>
              </div>
            </div>

            <div className="w-[280px]">
              <div
                className="bg-[linear-gradient(360deg,#FFFFFF_0%,#C5CED5_100%)] rounded-3xl overflow-hidden relative h-[400px]"
                style={{
                  boxShadow:
                    "0px 2.77px 2.21px 0px #00000005, 0px 6.65px 5.32px 0px #00000007, 0px 12.52px 10.02px 0px #00000009, 0px 22.34px 17.87px 0px #0000000B, 0px 41.78px 33.42px 0px #0000000D, 0px 100px 80px 0px #00000012",
                }}
              >
                <div className="absolute bottom-0 right-0 w-[65%] h-full">
                  <Image
                    src="/project/timesheet.png"
                    alt="Timesheet"
                    width={180}
                    height={400}
                    quality={100}
                    className="h-full w-auto object-cover"
                  />
                </div>
                <div className="absolute top-6 left-6 text-left">
                  <h3 className="text-corvidian-1 font-extrabold text-xl leading-tight mb-2">
                    Timesheet
                    <br />
                    <span className="text-corvidian-4">System</span>
                  </h3>
                  <p className="text-corvidian-1 text-xs underline">
                    Pelajari lebih lanjut
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[280px]">
              <div 
                className="bg-[linear-gradient(360deg,#FFFFFF_0%,#C5CED5_100%)] rounded-3xl overflow-hidden relative h-[400px]"
                style={{
                  boxShadow: '0px 2.77px 2.21px 0px #00000005, 0px 6.65px 5.32px 0px #00000007, 0px 12.52px 10.02px 0px #00000009, 0px 22.34px 17.87px 0px #0000000B, 0px 41.78px 33.42px 0px #0000000D, 0px 100px 80px 0px #00000012'
                }}
              >
                <div className="p-8 flex flex-col h-full justify-center">
                  <p className="text-corvidian-1 text-sm mb-6">
                    Mau tahu lebih banyak, sistem yang siapa pakai?
                  </p>
                  <h3 className="font-extrabold text-2xl bg-[linear-gradient(90.58deg,#02C2B3_-13.4%,#1D1F26_25.6%,#1D1F26_63.53%,#1578CB_116.56%)] bg-clip-text text-transparent">
                    Lihat lebih lengkap.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
