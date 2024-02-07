import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

const getTopicById = async(id) => {
  try {
    const res  = await fetch(`http://localhost:3000/api/topics/${id}`,{cache:"no-store"})

    if (!res.ok) throw new Error('Failed to fetch Topic')

    return res.json()
  } catch (error) {
    
  }
}

export default async function page({params}) {

  const {id} = params
  // console.log(id)
  const {topic} = await getTopicById(id)
  const {title, description} = topic

  return (
    <div>
      <EditTopicForm id={id} title={title} description={description}/>
    </div>
  )
}
