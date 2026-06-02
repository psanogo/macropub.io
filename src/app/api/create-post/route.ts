import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const { title, content } = await req.json();

  const slug = title.toLowerCase().replace(/\s+/g, "-");

  const fileContent = `---
title: "${title}"
date: "${new Date().toISOString()}"
---

${content}
`;

  const filePath = path.join(
    process.cwd(),
    "content/posts",
    `${slug}.md`
  );

  fs.writeFileSync(filePath, fileContent);

  return Response.json({ success: true });
}
