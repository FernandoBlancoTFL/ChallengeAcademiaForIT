import { Link } from 'react-router-dom'

export function NavBar () {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container'>
        <div className='d-flex gap-3'>
          <img src='https://cdn-icons-png.freepik.com/128/8790/8790330.png' alt='icon' style={{ width: '45px', height: '45px' }} />
          <Link className='navbar-brand' to='/'>Gestor de Tareas</Link>
        </div>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>Inicio</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/new'>Nueva Tarea</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
