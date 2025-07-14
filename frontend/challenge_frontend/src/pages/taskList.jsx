import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TaskItem } from '../components/TaskItem'

const API_URL = import.meta.env.VITE_API_URL

export function TaskList () {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/tasks`)
      .then(res => res.json())
      .then(setTasks)
  }, [])

  const handleDelete = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <h2>Tareas</h2>
        <Link className='btn btn-primary mb-3' to='/new'>Nueva tarea</Link>
      </div>
      <div className='list-group'>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}
