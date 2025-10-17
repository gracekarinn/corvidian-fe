import Image from "next/image";

export const WawasanHero = ({
  cover_image,
  title,
  author,
  published_at,
}: {
  cover_image: string;
  title: string;
  author: string;
  published_at: string;
}) => {
  return (
    <section className="relative w-full h-[85vh] flex flex-col justify-center items-center text-center">
      <Image
        src={cover_image}
        alt={title}
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#FFFFFFC2]" />
      <div className="relative z-10 px-6">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 max-w-[924px] mx-auto">
          {title}
        </h1>
        <p className="text-sm text-gray-700">
          {author} | {published_at}
        </p>
      </div>
    </section>
  );
};
