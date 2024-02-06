export default async function getPosts() {
  const result = await fetch(`http://localhost:5000/posts/${id}`);
  return result.json();
}