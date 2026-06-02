import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function PostPage({ params }: any) {
  const filePath = path.join(
    process.cwd(),
    "content/posts",
    `${params.slug}.md`
  );

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">
        {data.title}
      </h1>

      <p className="text-gray-500 mt-2">{data.date}</p>

      <article className="mt-6 whitespace-pre-wrap">
        {content}
      </article>
    </main>
  );
}
