"use client";

import Link from "next/link";
import { WawasanCard } from "./wawasan-card";
import { WawasanNews } from "./wawasan-news";
import { ArticlePreview } from "@/lib/api/wawasan-api";

interface Props {
  articles: ArticlePreview[];
}

export const WawasanDropdown = ({ articles }: Props) => {
  const items = articles.slice(0, 4);
  return (
    <div className="flex flex-col max-h-[700px] overflow-hidden rounded-2xl">
      <div className="p-6 pb-4 flex-shrink-0">
        <Link href="/portofolio" className="pointer">
          <WawasanCard />
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-thin scrollbar-thumb-corvidian-3 scrollbar-track-transparent">
        <h2 className="text-white text-lg font-semibold mb-4">Newest</h2>

        <div className="space-y-6 pr-1">
          {items.length === 0 ? (
            <p className="text-sm text-white/60">Belum ada artikel.</p>
          ) : (
            items.map((item) => (
              <Link
                key={item.id}
                href={`/tentang-kami/wawasan/${item.slug}`}
                className="block"
              >
                <WawasanNews
                  image={item.cover_image}
                  date={
                    item.published_at
                      ? new Date(item.published_at).toDateString()
                      : ""
                  }
                  title={item.title}
                  description={item.excerpt}
                />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
