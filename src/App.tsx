import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/general/Navbar'
import Home from './pages/Home'
import Members from './pages/Members'
import './styles/App.css'

function App() {

  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
