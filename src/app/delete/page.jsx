"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function DeletePost() {
  const [postId, setPostId] = useState("");
  const router = useRouter();

  const handleDelete = async () => {
    if (!postId) {
      alert("Please enter a valid Post ID");
      return;
    }

    try {
      const response = await axios.delete("/api/posts", { data: { id: Number(postId) } });
      console.log("Delete Response:", response.data);
      alert("Post Deleted Successfully!");
      setPostId("");
    
    } catch (error) {
     
      alert("Failed to delete post!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Delete Post</h2>

      <input
        type="number"
        placeholder="Post ID"
        value={postId}
        onChange={(e) => setPostId(e.target.value ? Number(e.target.value) : "")}
        className="w-full p-2 border rounded mb-3"
        required
      />
      <button className="w-full bg-red-500 text-white p-2 rounded" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
