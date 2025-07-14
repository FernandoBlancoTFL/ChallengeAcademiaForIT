import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const API_URL = import.meta.env.VITE_API_URL

export function TaskItem ({ task, onDelete }) {
  const handleDelete = () => {
    Swal.fire({
      title: '¿Quieres eliminar la tarea?',
      text: 'No se podrá revertir',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${API_URL}/tasks/${task.id}`, {
          method: 'DELETE'
        })
          .then(res => {
            if (res.ok) {
              onDelete(task.id)
              Swal.fire({
                title: 'Eliminado!',
                text: 'La tarea fue eliminada',
                icon: 'success'
              })
            } else {
              alert('Error al eliminar la tarea')
            }
          })
      }
    })
  }

  return (
    <div className='list-group-item d-flex justify-content-between align-items-center'>
      <div>
        <h5>{task.title}</h5>
        <p className='mb-1'>{task.description}</p>
        <small>Estado: {task.completed ? '✅ Completada' : '⏳ Pendiente'}</small>
      </div>
      <div className='d-flex gap-2'>
        <Link to={`/edit/${task.id}`} className='btn btn-sm btn-secondary'>Editar</Link>
        <button onClick={handleDelete} className='btn btn-sm btn-danger'>Eliminar</button>
      </div>
    </div>
  )
}
