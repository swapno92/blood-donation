import connectMongoDB from "@/libs/mongodb";
import Posts from "@/models/posts";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newLikes: likes} = await request.json();
  await connectMongoDB();
  await Posts.findByIdAndUpdate(id, { likes });
  return NextResponse.json({ message: "Likes updated" }, { status: 200 });
}
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const post = await Posts.findOne({ _id: id });
  return NextResponse.json({ post }, { status: 200 });
}