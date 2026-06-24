import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const query = `
  query GetAllPosts($language: LanguageCodeFilterEnum) {
    posts(first: 100, where: { language: $language }) {
      nodes {
        id
        slug
        uri
        title
        content
        date
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        translations {
          slug
          uri
        }
      }
    }
  }
`;

async function fetchPosts() {
  try {
    console.log("----------------------------------------");
    console.log("Doctor IN - Pre-rendering Blog Posts...");
    console.log("----------------------------------------");

    console.log("Fetching Spanish posts from CMS...");
    const resEs = await fetch('https://cms.doctor-in.com/index.php?graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { language: 'ES' } })
    });
    const jsonEs = await resEs.json();
    const esPosts = jsonEs.data?.posts?.nodes || [];
    console.log(`✓ Fetched ${esPosts.length} Spanish posts.`);

    console.log("Fetching English posts from CMS...");
    const resEn = await fetch('https://cms.doctor-in.com/en/index.php?graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { language: 'EN' } })
    });
    const jsonEn = await resEn.json();
    const enPosts = jsonEn.data?.posts?.nodes || [];
    console.log(`✓ Fetched ${enPosts.length} English posts.`);

    const outputData = {
      es: esPosts,
      en: enPosts,
      fetchedAt: new Date().toISOString()
    };

    const targetDir = path.join(__dirname, '../src/config');
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetFile = path.join(targetDir, 'posts.json');
    fs.writeFileSync(targetFile, JSON.stringify(outputData, null, 2), 'utf-8');
    console.log(`✓ Static posts saved to: ${targetFile}`);
    console.log("----------------------------------------");
  } catch (error) {
    console.error("❌ Error pre-rendering blog posts:", error);
    process.exit(1);
  }
}

fetchPosts();
