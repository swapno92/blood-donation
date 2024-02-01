import getPosts from "@/libs/getPost";

const DetailsPosts = async () => {
  const post = await getPosts();
  console.log(post)
  return <div>
    
  </div>;
};

export default DetailsPosts;
