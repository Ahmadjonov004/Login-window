import '../App.css'

function login() {
  return (
    <div className="login container">
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Emblem_of_Uzbekistan.svg/2012px-Emblem_of_Uzbekistan.svg.png" alt="" />
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name='username'
                        id='username' />
                    {/* {error.username && <p className="error">{error.username}</p>} */}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={handleChange}
                        type="password"
                        name='password'
                        id='password' />
                    {/* {error.password && <p className="error">{error.password}</p>} */}
                </div>
                {/* {error.general && <p className="error general">{error.general}</p>} */}
                <button type='submit'>Sign in</button>
            </form>
        </div>

  )
}

export default login