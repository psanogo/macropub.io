import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function PostPage({ params }) {
  const filePath = path.join('content/posts', params.slug + '.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContent);

  return (
    <article>
      <h1>{data.title}</h1>
      <p>{data.date}</p>

      <div>{content}</div>
    </article>
  );
}
