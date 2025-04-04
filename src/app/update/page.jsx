"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function UpdatePost() {
  const [postId, setPostId] = useState("");
  const [formData, setFormData] = useState({ title: "", body: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!postId || !formData.title || !formData.body) {
      alert("Please enter a valid Post ID, Title, and Body");
      return;
    }

    try {
      await axios.put("/api/posts", { id: Number(postId), ...formData });
      alert("Post Updated Successfully!");
      setPostId("");
      setFormData({ title: "", body: "" });
      router.push("/fetch");
    } catch (error) {
      alert("Error updating post!");
      console.error("Error updating post", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Update Post</h2>

      <input
        type="number"
        placeholder="Post ID"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
        className="w-full p-2 border rounded mb-3"
        required
      />
      <input
        type="text"
        name="title"
        placeholder="New Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
      />
      <textarea
        name="body"
        placeholder="New Body"
        value={formData.body}
        onChange={handleChange}
        className="w-full p-2 border rounded mb-3"
      />
      <button className="w-full bg-yellow-500 text-white p-2 rounded" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
}
