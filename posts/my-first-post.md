<!DOCTYPE html>
<html>
<head>
  <title>MacroPub Blog</title>
</head>

<body>

<h1>📚 Insights</h1>

<div id="posts"></div>

<script>
const posts = [
  {
    title: "AI in Business",
    file: "posts/post1.md"
  }
];

posts.forEach(post => {
  fetch(post.file)
    .then(res => res.text())
    .then(text => {
      document.getElementById("posts").innerHTML += `
        <div style="margin:20px;">
          <h2>${post.title}</h2>
          <pre>${text.substring(0,150)}...</pre>
        </div>
      `;
    });
});
</script>

</body>
</html>
