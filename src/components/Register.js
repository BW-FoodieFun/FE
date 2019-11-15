import React, {useState} from "react";
import api from '../utils/api'

const Register = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the Venues route
  console.log("register",props)
  const [warning, setWarning] = useState()
  const [data, setData] = useState({
    username: "",
    password: "",
  }) 

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    api()
    .post('/auth/register', data)
    .then(res => {
      console.log("registerResponse",res)
      localStorage.setItem("token", res.data.token)
      props.history.push('/meals')
    })
    .catch(err => {
      console.log("err", err)
      setWarning(err)
      console.log(warning)
    })
  }

  return (
    <>
     <form onSubmit={handleSubmit}>
      {warning && <p>{warning}</p>}
       <input type="text" 
       name="username"
       placeholder="Username"
       value={data.username}
       onChange={handleChange}/>

       <input type="password"
       name="password"
       placeholder="Password"
       value={data.password}
       onChange={handleChange} />

       <button type="submit">Register</button>
     </form>
    </>
  );
};

export default Register;