"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi' 

export default function RemoveBtn({id}) {

  const router = useRouter()

  const removeTopic = async()=>{
    const confirmed = confirm("are you sure")
    if(confirmed){
      const res = await fetch (`http://localhost:3000/api/topics?id=${id}`,{
        method: "DELETE",

      })
      if(res.ok) router.refresh()
    }

  }
  return (
   <button className='text-red-500' onClick={removeTopic}>
        <HiOutlineTrash size={24}/>
   </button>
  )
}
