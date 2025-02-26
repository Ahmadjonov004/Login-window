import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import About from './pages/about';
import Home from './pages/home';
import Register from './pages/Register';
import './App.css'
function App() {
  return (
    <>
      <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Home/>}/>
          <Route path="register" element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App;
