export default function Header() {
  return (
    <header className="border-b border-gray-800 p-4 flex justify-between">
      <h1 className="glow-text font-bold">
        NCE
      </h1>

      <nav className="text-textSecondary space-x-6">
        Home
        Blog
        Dashboard
      </nav>
    </header>
  );
}
