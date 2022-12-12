import "./login.scss"
import React, { useContext } from 'react'
import { auth } from "../../firebase-config"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
const Login = () => {
  const [error, setError] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin =(data)=>{
    data.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      dispatch({type:"LOGIN", payload: user})
      navigate('/')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(true)
      // ..
    });

  }
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input type="email" onChange={e=>setEmail(e.target.value)} placeholder="Type your email" />
        <input type="passsword" onChange={e=>setPassword(e.target.value)} placeholder="Type your password" />
        <button type="submit">Login</button>
        {error && <span>Wrong email and password!</span>}
      </form>
    </div>
  )
}

export default Login