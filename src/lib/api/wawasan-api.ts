import { Article } from "@/modules/wawasan-module/interface";

export interface ArticlePreview {
  id: number;
  slug: string;
  cover_image: string;
  title: string;
  author: string;
  published_at: string;
  excerpt: string;
}

const withDefaultInit = (init?: RequestInit) => ({
  cache: "no-store" as RequestCache,
  ...init,
});

const getApiBaseUrl = () => process.env.NEXT_PUBLIC_API_BASE_URL;

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, "");

const toArticlePreviews = (articles: Article[]): ArticlePreview[] =>
  articles.map((article) => {
    const plain = stripHtml(article.content);
    const excerpt =
      plain.length > 200 ? `${plain.slice(0, 200).trimEnd()}...` : plain;
    return {
      id: article.id,
      slug: article.slug,
      cover_image: article.cover_image,
      title: article.title,
      author: article.author,
      published_at: article.published_at,
      excerpt,
    };
  });

export const fetchWawasanArticles = async (
  init?: RequestInit
): Promise<Article[]> => {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) {
    return [];
  }

  const response = await fetch(`${baseUrl}/api/wawasan/`, withDefaultInit(init));
  if (!response.ok) {
    throw new Error("Failed to load wawasan articles");
  }

  return (await response.json()) as Article[];
};

export const fetchWawasanArticle = async (
  slug: string,
  init?: RequestInit
): Promise<Article | null> => {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) {
    return null;
  }

  const response = await fetch(
    `${baseUrl}/api/wawasan/slug/${slug}/`,
    withDefaultInit(init)
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to load wawasan article");
  }

  return (await response.json()) as Article;
};

export const fetchWawasanPreviews = async (
  init?: RequestInit
): Promise<ArticlePreview[]> => {
  try {
    const articles = await fetchWawasanArticles(init);
    return toArticlePreviews(articles);
  } catch {
    return [];
  }
};

export const buildArticlePreviews = toArticlePreviews;
