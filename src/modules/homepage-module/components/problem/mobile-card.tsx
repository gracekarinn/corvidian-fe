import Image from "next/image";
import Link from "next/link";

export const MobileCard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-gradient-to-br from-corvidian-3 to-white rounded-3xl">
        <Image
          src="/hero/modem.png"
          alt="Modem"
          width={633}
          height={307}
          className="w-full h-auto rounded-t-3xl"
        />
        <div className="px-6 py-6">
          <p className="text-corvidian-1 font-normal text-xs mb-4">
            Konsultasikan supaya bisnis Anda nggak kena risiko downtime.
          </p>
          <div className="mb-4">
            <p className="text-corvidian-1 font-extrabold text-lg mb-2">
              Sistem IT sering error? Jaringan lambat?
            </p>
            <Link href="/service" className="text-corvidian-1 font-bold text-xs underline">
              Pelajari lebih lanjut
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[linear-gradient(91.4deg,#1D1F26_1.19%,#1D1F26_53.64%,#1578CB_157.04%)] rounded-3xl px-6 py-6">
        <p className="text-white font-extrabold text-lg mb-4">
          Mau buat aplikasi berkualitas dan terjangkau? Konsultasikan dengan kami
        </p>
        <Link href="/service" className="text-white font-bold text-xs underline">
          Pelajari lebih lanjut
        </Link>
      </div>

      <div className="bg-[linear-gradient(339.7deg,#FFFFFF_-14%,#C5CED5_94.78%)] rounded-3xl px-6 py-6">
        <h3 className="font-extrabold text-lg mb-3 bg-[linear-gradient(90.58deg,#02C2B3_-13.4%,#1D1F26_25.6%,#1D1F26_63.53%,#1578CB_116.56%)] bg-clip-text text-transparent">
          Website kamu terlihat kurang profesional? dan lambat bikin calon klien kabur?
        </h3>
        <p className="text-corvidian-1 font-normal text-xs mb-4">
          Saatnya buat website yang cepat, responsif, nyaman dipake dengan tampilan yang lebih meyakinkan dan dipersi aja.
        </p>
        <Link href="/service" className="text-corvidian-1 font-bold text-xs underline">
          Pelajari lebih lanjut
        </Link>
      </div>

      <div className="bg-[linear-gradient(18.73deg,#02C2B3_-3.23%,#1D1F26_13.72%,#1D1F26_45.09%,#1578CB_88.93%)] rounded-3xl overflow-hidden">
        <Image
          src="/hero/gradien-biru.png"
          alt="Building"
          width={400}
          height={200}
          className="w-full h-auto"
        />
        <div className="px-6 py-6">
          <h3 className="text-white font-extrabold text-lg mb-3">
            Tidak punya waktu & budget buat bangun sistem dari nol?
          </h3>
          <p className="text-white font-normal text-xs mb-4">
            Co-Pilot siap digunakan dalam hitungan minggu, bukan bulan.
          </p>
          <Link href="/service" className="text-white font-bold text-xs underline">
            Pelajari lebih lanjut
          </Link>
        </div>
      </div>
    </div>
  );
};