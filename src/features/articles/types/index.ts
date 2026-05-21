export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  date: string;
  image: string;
  slug: string;
  author?: {
    name: string;
    avatar?: string;
  };
}
