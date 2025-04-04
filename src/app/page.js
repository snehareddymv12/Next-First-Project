'use client'
import { useRouter } from "next/navigation";

const page = () => {
  const router=useRouter();
  return (
    <>
    <div className="flex flex-col gap-20 mt-20 items-center">

      <button className="border bg-green-500 p-2 w-[25%] rounded" onClick={()=>{router.push('/create')}}>Create</button>
       <button className="border bg-green-500 p-2 w-[25%] rounded" onClick={()=>{router.push('/update')}}>Update</button>
       <button className="border bg-green-500 p-2 w-[25%] rounded" onClick={()=>{router.push('/delete')}}>Delete</button>
       <button  className="border bg-green-500 p-2 w-[25%] rounded" onClick={()=>{router.push('/fetch')}}>Fetch</button>
       



    </div>
    </>
  )
}

export default page