import React, {useContext, useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
      <input
        type='text'
        placeholder='Enter your name'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {" "}
      <input
        type='password'
        placeholder='Enter your password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>LogIn</button>
    </div>
  )
}

export default Login
