import { DesktopCard } from "../components/problem/desktop-card";
import { MobileCard } from "../components/problem/mobile-card";

export const ProblemSection = () => {
  return (
    <section>
      <div className="container mx-auto px-4 pb-20">
        <h2 className="font-extrabold xl:text-4xl lg:text-3xl text-xl mb-14 max-lg:text-center max-lg:mx-auto max-lg:max-w-[176px]">
          Masalah yang sering ditemui.
        </h2>

        <div className="hidden md:block">
          <DesktopCard />
        </div>

        <div className="block md:hidden">
          <MobileCard />
        </div>
      </div>
    </section>
  );
};