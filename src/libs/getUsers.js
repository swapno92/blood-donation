export default async function getUsers() {
  const result = await fetch(
    "https://blood-donation-server-binary-avanger.vercel.app/users"
  );
  return result.json();
}
