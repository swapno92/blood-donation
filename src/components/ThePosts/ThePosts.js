import getAllPosts from "@/libs/getAllPosts";
import ThePost from "../ThePost/ThePost";

const ThePosts = async () => {
  const posts = await getAllPosts();

  return (
    <div>
      {posts?.map((post) => (
        <ThePost key={post._id} post={post}></ThePost>
      ))}
    </div>
  );
};

export default ThePosts;
