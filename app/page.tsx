import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <section className="hero">
        <h1>Data. Security. AI.</h1>
        <p>Turning complexity into clarity</p>
      </section>

      <section>
        {posts.map((post) => (
          <div key={post.slug}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
``
