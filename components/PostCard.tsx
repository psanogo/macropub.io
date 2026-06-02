export default function PostCard({ post }: any) {
  return (
    <div className="card">
      <h3 className="text-lg font-bold">{post.title}</h3>
      <p className="text-textSecondary">{post.description}</p>

      <p className="italic text-sm mt-2">
        Clarity is the advantage.
      </p>
    </div>
  );
}
