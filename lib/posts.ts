import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory);

  return files.map((file) => {
    const slug = file.replace('.md', '');
    const content = fs.readFileSync(
      path.join(postsDirectory, file),
      'utf8'
    );

    const { data } = matter(content);

    return {
      slug,
      ...data,
    };
  });
}
``
