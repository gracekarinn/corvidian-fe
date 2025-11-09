"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

const KataMerekaMobile = () => {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  const testimonials = [
    {
      text: "Sebelum bekerja sama dengan Corvidian, banyak proses di MUC yang berjalan kurang efisien. Beberapa pekerjaan memerlukan waktu lebih lama karena sistem yang ada belum terintegrasi dengan baik. Setelah Corvidian hadir, semuanya berubah. Mereka memahami kebutuhan kami secara mendalam, merancang solusi yang tepat, dan memastikan setiap detail berjalan sesuai rencana. Hasilnya, koordinasi tim menjadi lebih lancar, pekerjaan lebih cepat terselesaikan, dan kinerja perusahaan meningkat signifikan. Corvidian bukan hanya penyedia teknologi, tetapi mitra strategis yang membantu kami bergerak maju.",
      author: "~Sugianto",
      position: "Managing Partner MUC Consulting",
    },
    {
      text: "Penggunaan LMS oleh pengajar dari Binawan bersama peserta dari Hong Kong memberikan pengalaman pembelajaran yang efisien dan interaktif. Platform ini memudahkan pengajar dalam menyampaikan materi secara online, serta memungkinkan peserta untuk mengakses informasi kapan saja dan di mana saja. Dengan fitur komunikasi dan evaluasi yang terintegrasi, LMS ini mendukung interaksi yang lebih baik antara pengajar dan peserta, serta memfasilitasi pemantauan perkembangan pembelajaran yang fleksibel dan terstruktur.",
      author: "~Januar Priatama",
      position: "Head of Project Binawan Inti Utama",
    },
    {
      text: "Bagi MUC Law, tim support Corvidian adalah salah satu aset terbesar dalam kerja sama ini. Mereka selalu responsif, sigap memberikan diagnosa yang tepat, dan menyampaikan rencana tindakan yang jelas serta terukur. Setiap langkah penyelesaian selalu berbasis solusi, bukan sekadar perbaikan sementara. Kami juga sangat menghargai kesabaran mereka yang luar biasa dalam mendengarkan setiap kendala yang kami hadapi, sekaligus memberikan solusi yang tepat guna. Dukungan seperti ini membuat kami merasa aman dan yakin bahwa setiap tantangan akan selalu mendapatkan jalan keluarnya",
      author: "~Kiki Amaruly",
      position: "Senior Associate MUC Attorney at Law",
    },
    {
      text: "Kami sangat puas dengan pembuatan software yang dilakukan. Prosesnya cepat dan mudah, dengan dukungan tim yang selalu siap membantu. Software yang dihasilkan juga sangat mudah digunakan dan tampilannya sangat user-friendly. Tim support juga sangat responsif dan membantu menyelesaikan masalah dengan cepat. Kami sangat merekomendasikan layanan ini.",
      author: "~Adi Rasidi",
      position: "Partner KAP RTS",
    },
    {
      text: "Awalnya kami sempat khawatir adaptasi dengan sistem baru akan memakan waktu lama. Tapi ternyata, solusi dari Corvidian langsung terasa mudah digunakan. Kami bisa mengaksesnya lewat Web atau mobile, dan dalam waktu singkat, pekerjaan terasa lebih teratur dan cepat terselesaikan.",
      author: "~Muhammad Trisna Indra",
      position: "Direktur Utama Taxficient",
    },
  ];

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(delta) > 50) (delta < 0 ? next : prev)();
  };

  return (
    <div className="relative w-full">
      <div className="relative text-[#F4F4F4]">
        <Image
          src="/schedule/vector-mobile.png"
          alt=""
          fill
          style={{
            objectFit: "fill",
          }}
          priority
          className="absolute inset-0 size-10 object-cover"
        />
        <div className="relative z-10 max-w-[256px] mx-auto px-8 py-8">
          <h3 className="font-extrabold text-[14px] leading-[120%] mb-4">
            Apa kata mereka tentang service Corvidian
          </h3>

          <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <p className="text-[12px] leading-[150%] mb-6">
              {testimonials[index].text}
            </p>
            <p className="font-bold italic text-[14px]">
              {testimonials[index].author}
            </p>
            <p className="italic text-[14px]">{testimonials[index].position}</p>
          </div>
        </div>
        <button
          aria-label="Prev"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#1D1F26] z-20"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#1D1F26] z-20"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default KataMerekaMobile;
