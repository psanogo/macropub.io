"use client";

import { useState } from "react";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/create-post", {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });

    alert("Post published 🚀");
  };

  return (
    <div>
      <h1>Create Post</h1>

      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
}
