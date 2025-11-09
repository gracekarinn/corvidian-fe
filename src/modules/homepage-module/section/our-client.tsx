import React from "react";
import Image from "next/image";

const OurClient = () => {
  const clientLogos = [
    {
      name: "MUC Consulting",
      logo: "/client/muc-consulting.png",
      width: 165,
      height: 55,
    },
    {
      name: "RTS",
      logo: "/client/rts-logo.png",
      width: 145,
      height: 81,
    },
    {
      name: "MUC Attorney at Law",
      logo: "/client/muc-attorney.png",
      width: 120,
      height: 120,
    },
    {
      name: "Dinawan",
      logo: "/client/dinawan-logo.png",
      width: 82,
      height: 97,
    },
  ];

  return (
    <section id="clients" className="w-full py-12">
      <div className="w-full max-w-[900px] mx-auto px-6">
        <div className="flex justify-center mb-10">
          <h2 className="font-bold text-[20px] md:text-[24px] leading-[100%] text-corvidian-1 text-center">
            Klien Kami
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-12 md:gap-x-16 justify-items-center items-center max-w-[700px] mx-auto">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-all duration-300 hover:scale-105 hover:grayscale-0"
            >
              <Image
                src={client.logo}
                alt={`${client.name} Logo`}
                width={client.width}
                height={client.height}
                className="object-contain w-auto h-14 lg:h-20 md:h-14"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClient;
