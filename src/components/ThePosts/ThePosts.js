// "use client";
import ThePost from "../ThePost/ThePost";

const getPosts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
  console.log("Error loading Topics: ", error);
  }
};

// const ThePosts =  () => {
  export default async function ThePosts() {
    const  {posts} = await getPosts();
    console.log(posts)

    return (
      <div>
        {posts?.map((post) => (
          <ThePost key={post._id} post={post}></ThePost>
        ))}
      </div>
    );
  };

// export default ThePosts;
