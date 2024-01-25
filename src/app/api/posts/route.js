import connectMongoDB from "@/libs/mongodb";
import Posts from "@/models/posts";
import { NextResponse } from "next/server";
// import connectMongoDB from "../../../../libs/mongodb";
// import Posts from "../../../../models/posts";

export async function POST(request) {
  const { photo, like, description } = await request.json();
  await connectMongoDB;
  await Posts.create({ photo, like, description });
  return NextResponse.json({ message: "Posts created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const posts = await Posts.find();
  return NextResponse.json({ posts });
}