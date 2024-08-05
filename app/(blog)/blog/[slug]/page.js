// my-page.com/blog/post-1
// my-page.com/blog/post-2
// my-page.com/blog/something-else
export default function BlogPagePosts({ params }) {
  return (
    <main>
      <h1>Blog Posts</h1>
      <p>{params.slug}</p>
    </main>
  );
}
