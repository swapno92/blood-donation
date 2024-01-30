import connectMongoDB from "@/libs/mongodb";
import Posts from "@/models/posts";
import { NextResponse } from "next/server";


export async function POST(request) {
  const { description, images, likes, userName, userPhoto, userEmail } =
    await request.json();
  await connectMongoDB;
  await Posts.create({
    description,
    images,
    likes,
    userName,
    userPhoto,
    userEmail,
  });
  return NextResponse.json({ message: "Posts created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const posts = await Posts.find();
  return NextResponse.json({ posts });
}