import React, { useState} from 'react';

const Login = ()=> {
    const [loginForm, setLoginForm] = useState({
        username: '',
        email: ''
      });
   
    const { username, email } = loginForm;
    
    const handleChange = e =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    
    const handleSubmit = (evt) =>{
        evt.preventDefault()
        fetch(`http://localhost:3001/users`, {
          method:'POST',
          headers: { 
             'Content-type': 'application/json',
             'accept': 'application/json'
          },
          body: JSON.stringify({
            username: username,
            email: email
          })
        })
        .then(resp => resp.json())
        .then(json_resp => console.log(json_resp))
      }

        return (
            
            <div className="header">
                <form className="search-form" onSubmit={handleSubmit}>
                  <h1>Login</h1> 
                  <div>
                    Username:<input onChange={handleChange} value={username}type="text" name= "username"/>
                    Email:<input onChange={handleChange} value={email} type="text" name= "email"/>
                    <input type="submit"/>
                    </div>
                </form>
            </div>
        );
    
}
export default Login;