"use client"
import React, { useState } from 'react'

export default function EditTopicForm({id,title,description}) {
  const[newTi,setNewTi] = useState(title)
  const[newDes,setNewDes] = useState(description)

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form action="" className='flex flex-col gap-3'>
    <input className='border border-slate-500 px-8 py-2' type="text" placeholder={title} onChange={e=> setNewTi(e.target.value)} value={newTi}/>

    <input className='border border-slate-500 px-8 py-2' type="text" placeholder={description} onChange={e=>setNewDes(e.target.value)} value={newDes}/>

    <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit '>Update Topic</button>

   </form>
  )
}
