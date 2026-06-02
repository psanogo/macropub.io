export default function PostLayout({ post }: any) {
  return (
    <article className="max-w-3xl mx-auto p-6">

      {/* TITLE */}
      <h1 className="text-3xl font-bold glow-text">
        {post.title}
      </h1>

      {/* META */}
      <div className="text-textSecondary text-sm mt-2 space-x-4">
        <span>{post.date}</span>
        <span>{post.category}</span>
      </div>

      {/* BODY */}
      <div className="mt-6 leading-relaxed">
        {post.content}
      </div>

      {/* LABELS */}
      <div className="mt-8 text-sm">
        Labels: {post.tags?.join(", ")}
      </div>

      {/* ACTIONS */}
      <div className="mt-6 flex gap-6 text-textSecondary">
        Comment   Share   Save
      </div>

    </article>
  );
}
``
