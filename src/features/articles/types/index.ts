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

export interface WPGraphQLResponse {
  posts: {
    nodes: Array<{
      id: string;
      title: string;
      excerpt: string;
      content?: string;
      date: string;
      slug: string;
      featuredImage?: {
        node: {
          sourceUrl: string;
        };
      };
      categories?: {
        nodes: Array<{
          name: string;
        }>;
      };
      author?: {
        node: {
          name: string;
          avatar?: {
            url: string;
          };
        };
      };
    }>;
  };
}
