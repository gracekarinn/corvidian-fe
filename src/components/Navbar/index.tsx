import { fetchWawasanPreviews } from "@/lib/api/wawasan-api";
import { NavbarDesktop } from "./navbar-desktop";
import { NavbarMobile } from "./navbar-mobile";
import Image from "next/image";

export async function Navbar() {
  const articles = await fetchWawasanPreviews();
  return (
    <div>
      <div className="hidden lg:block">
        <NavbarDesktop articles={articles} />
      </div>
      <div className="block lg:hidden">
        <NavbarMobile />
        <div className="fixed bottom-[20px] right-0 z-50">
          <Image 
            src="/navbar/whatapp-popup.png"
            alt="WhatsApp"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
