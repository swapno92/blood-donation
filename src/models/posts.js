import mongoose, { Schema } from "mongoose";

const postsSchema = new Schema(
  {
    description: String,
    images: String,
    likes: Number,
    userName: String,
    userPhoto: String,
    userEmail: String,
  },
  {
    timestamps: true,
  }
);
const Posts = mongoose.models.Posts || mongoose.model("Posts", postsSchema);
export default Posts;
