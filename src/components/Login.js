import React, { Component} from 'react';
import {withRouter} from "react-router";

class Login extends Component {
    state = {
      username: '',
      email: ''
    }

   onChange = (event) => {
      // console.log(event.target.name, event.target.value)
      this.setState({
        [event.target.name]: event.target.value 
      })
    }

    
    handleSubmit = (evt) =>{
        evt.preventDefault()
        fetch(`http://localhost:3001/users`, {
          method:'POST',
          headers: { 
             'Content-type': 'application/json',
             'accept': 'application/json'
          },
          body: JSON.stringify({
            username: this.state.username,
            email: this.state.email
          })
        })
        .then(resp => resp.json())
        .then(() => {
          this.setState({
            username: '',
            email: ''
          })
        })
        this.props.history.push({ pathname: '/'})
      }
      render() {
        return (
            
            <div className="header">
                <form className="search-form" onSubmit={this.handleSubmit}>
                  <h1>Login</h1> 
                  <div>
                    Username:<input onChange={this.onChange} value={this.state.username}type="text" name= "username"/>
                    Email:<input onChange={this.onChange} value={this.state.email} type="text" name= "email"/>
                    <input className= "search-btn"type="submit"/> 
                    </div>
                </form>
            </div>
        );
     }
}
export default withRouter(Login);