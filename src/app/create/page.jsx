'use client'
import axios from "axios";
import { useState } from "react";


const api="/api/posts";

const Page = () => {
    const [formData,setFormData]=useState({
        title:"",
        body:""
    });

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

     const submitHandler=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.post(api,formData);
            alert("post created successfully");
            setFormData({title:"",body:""})

        }catch(error){
            console.log("Error in creating post",error)
        }
     }


  return (
   <>
   <div className="flex flex-col gap-[2rem]">
    <h1 className='text-green-600 text-2xl'>Create a new post</h1>
    <form  className="flex flex-col gap-[2rem]" onSubmit={submitHandler}>
    <label>Title</label>
        <input type="text"
        required
        name="title"
         placeholder="Enter title"
         className="border w-[25%] px-2"
         onChange={handleChange}
         value={formData.title}
        />
        <label >Body</label>
        <textarea 
        name="body"
         required
         className="w-1/3 p-2 border rounded mb-3"
         placeholder="body"
         value={formData.body}
         onChange={handleChange}
         />
         <button  className='bg-green-600 text-white p-2 border w-40'type="submit">Submit</button>

    </form>
   </div>
  
   
   </>
  )
}

export default Page