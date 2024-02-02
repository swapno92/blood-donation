export default async function getPosts() {
  const result = await fetch(`https://blood-donation-server-binary-avanger.vercel.app/posts/${id}`);
  return result.json();
}