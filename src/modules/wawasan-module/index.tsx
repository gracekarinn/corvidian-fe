import { ArticlePreview } from "@/lib/api/wawasan-api";
import { WawasanSection } from "./section/wawasan-section";
import { Article } from "./interface";

interface Props {
  article: Article;
  articles: ArticlePreview[];
}

export const WawasanModule = ({ article, articles }: Props) => {
  return <WawasanSection article={article} articles={articles} />;
};
