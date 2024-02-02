export default async function getAllPosts() {
    const result = await fetch("https://blood-donation-server-binary-avanger.vercel.app/posts");
    return result.json()
}