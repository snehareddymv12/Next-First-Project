import { NextResponse } from "next/server";

let posts = []; // Temporary in-memory database

// ✅ GET: Fetch all posts
export async function GET() {
  return NextResponse.json(posts);
}

// ✅ POST: Create a new post
export async function POST(req) {
  try {
    const { title, body } = await req.json();

    if (!title || !body) {
      return NextResponse.json({ error: "Title and body are required" }, { status: 400 });
    }

    const newPost = { id: posts.length + 1, title, body };
    posts.push(newPost); // Store post in-memory

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

// ✅ PUT: Update a post
export async function PUT(req) {
  try {
    const { id, title, body } = await req.json();
    
    const postIndex = posts.findIndex((p) => p.id === id);
    if (postIndex === -1) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    posts[postIndex] = { id, title, body };

    return NextResponse.json(posts[postIndex]);
  } catch (error) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

// ✅ DELETE: Remove a post
export async function DELETE(req) {
    try {
      const { id } = await req.json();
  
      // ✅ Check if the post with given ID exists
      const postExists = posts.some((p) => p.id === id);
      if (!postExists) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }
  
      // ✅ If exists, delete it
      posts = posts.filter((p) => p.id !== id);
  
      return NextResponse.json({ message: "Post deleted successfully" });
    } catch (error) {
      return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
  }
  
