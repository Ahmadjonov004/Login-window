import '../App.css'

function register() {
    const handleChange = () => {

    }
    const handleSubmit = () => {
        
    }
  return (
    <div className="register login container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/2012px-Emblem_of_Uzbekistan.svg.png" alt="" />
                <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input onChange={handleChange} type="text" name='first_name' id='first_name' />
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input onChange={handleChange} type="text" name='last_name' id='last_name' />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input onChange={handleChange} type="text" name='username' id='username' />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} type="text" name='email' id='email' />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} type="text" name='password' id='password' />
                </div>
                <button type='submit'>Sign up</button>
            </form>
        </div>

  )
}

export default register