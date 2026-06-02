import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <section className="mb-10">
        <h1 className="text-4xl font-bold">
          Data. Security. AI.
        </h1>
        <p className="text-gray-600 mt-2">
          Turning complexity into clarity.
        </p>
      </section>

      <section>
        {posts.map((post: any) => (
          <div key={post.slug} className="mb-6">
            <h2 className="text-xl font-semibold">
              {post.title}
            </h2>
            <p className="text-gray-500">{post.description}</p>

            <Link href={`/blog/${post.slug}`} className="text-blue-500">
              Read More →
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
``
