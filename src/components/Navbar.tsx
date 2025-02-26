import { Link, useNavigate } from "react-router-dom"
import './Navbar.css'

function Navbar() {

    const navigate = useNavigate()

    return (
        <div className="container navbar ">
            <h1>
                <Link to='/'>Logo</Link>
            </h1>
            <nav>
                <Link to='/'>Asosiy</Link>
                <Link to='/about'>Biz haqimizda</Link>
            </nav>
            <div className="auth">
                <button onClick={() => navigate('/login')}>Login</button>
                <button onClick={() => navigate('/register')}>Register</button>
            </div>
        </div>
    )
}

export default Navbar
