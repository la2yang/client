import Basiclayout from './Layout'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Add from './components/Add'

function App() {
  return (
    <div className="App">
      <Basiclayout>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/" element={<Navigate replace to="/home" />}></Route>
        </Routes>
      </Basiclayout>
    </div>
  )
}

export default App
