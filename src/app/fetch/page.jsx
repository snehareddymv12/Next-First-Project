'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const page = () => {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
       axios
       .get("api/posts")
       .then((res)=>setPosts(res.data))
       .catch((err) => console.error("Error fetching posts", err));

    },[])

  return (
    <>
    <div className="max-w-lg mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4">Fetch all  posts</h1>
        <div className='grid grid-cols-3  gap-x-6 gap-y-3'>
        {posts.length > 0  && (
        posts.map((post) => (
          <div key={post.id} className="border p-2 my-2 rounded">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      ) }
        </div>

    </div>
    
    </>
  )
}

export default page