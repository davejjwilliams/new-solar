import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/general/Navbar';
import Home from './pages/Home';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Awards from './pages/Awards';
import Members from './pages/Members';
import Funding from './pages/Funding';
import JoinUs from './pages/JoinUs';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/research' element={<Research />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/awards' element={<Awards />} />
        <Route path='/members' element={<Members />} />
        <Route path='/funding' element={<Funding />} />
        <Route path='/join-us' element={<JoinUs />} />
      </Routes>
    </Router>
  );
}

export default App;
