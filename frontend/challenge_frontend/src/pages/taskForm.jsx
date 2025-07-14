import { useNavigate, useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL

export function TaskForm () {
  const [form, setForm] = useState({
    title: '',
    description: '',
    completed: false
  })

  const navigate = useNavigate()
  const { id } = useParams()
  const isEditing = !!id

  useEffect(() => {
    if (isEditing) {
      fetch(`${API_URL}/tasks`)
        .then(res => res.json())
        .then(data => {
          const task = data.find(t => t.id === id)
          if (task) setForm(task)
        })
    }
  }, [id])

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const method = isEditing ? 'PUT' : 'POST'
    const url = isEditing ? `${API_URL}/tasks/${id}` : `${API_URL}/tasks`

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(() => navigate('/'))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isEditing ? 'Editar' : 'Nueva'} tarea</h2>
      <div className='mb-3'>
        <label className='form-label'>Título</label>
        <input
          name='title'
          className='form-control'
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Descripción</label>
        <textarea
          name='description'
          className='form-control'
          value={form.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className='form-check mb-3'>
        <input
          type='checkbox'
          className='form-check-input'
          name='completed'
          checked={form.completed}
          onChange={handleChange}
        />
        <label className='form-check-label'>Completada</label>
      </div>
      <button type='submit' className='btn btn-success'>
        {isEditing ? 'Actualizar' : 'Crear'}
      </button>
      <Link to='/' className='btn btn-secondary ms-2'>Volver</Link>
    </form>
  )
}
