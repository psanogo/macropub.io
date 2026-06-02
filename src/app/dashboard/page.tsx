"use client";

import { useState } from "react";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function publishPost() {
    await fetch("/api/create-post", {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });

    alert("Post published 🚀");
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Create Post</h1>

      <input
        className="border p-2 mb-3 w-full"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full h-40"
        placeholder="Write your post..."
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={publishPost}
        className="bg-black text-white px-4 py-2 mt-4"
      >
        Publish
      </button>
    </div>
  );
}
