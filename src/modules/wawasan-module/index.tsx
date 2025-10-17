import { WawasanSection } from "./section/wawasan-section";
import { Article } from "./interface";

export const WawasanModule = ({ article }: { article: Article }) => {
  return <WawasanSection article={article} />;
};
