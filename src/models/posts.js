import mongoose, { Schema } from "mongoose";

const postsSchema = new Schema(
  {
    photo: String,
    description: String,
    like: Number,
  },
  {
    timestamps: true,
  }
);
const Posts = mongoose.models.Posts || mongoose.model("Posts", postsSchema);
export default Posts;
