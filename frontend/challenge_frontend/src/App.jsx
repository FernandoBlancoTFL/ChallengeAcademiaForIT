import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { TaskList } from './pages/TaskList.jsx'
import { TaskForm } from './pages/taskForm.jsx'

export function App () {
  return (
    <Router>
      <div className='app-wrapper d-flex flex-column min-vh-100'>
        <Header />
        <main className='container my-4 flex-grow-1' style={{ maxWidth: '800px' }}>
          <Routes>
            <Route path='/' element={<TaskList />} />
            <Route path='/new' element={<TaskForm />} />
            <Route path='/edit/:id' element={<TaskForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
