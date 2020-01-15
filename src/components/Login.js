import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {

    handleChange = (evt) =>{
        // [evt.target.name]: 
    }

    render() {
        return (
            <div>
                <form>
                    Email:<input type="text" placeholder={this.props.email} name= "email"/>
                    Password:<input type="text" placeholder={this.props.password} name= "password"/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        email: state.email,
        password: state.password
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return {

//     }
// }

export default connect(mapStateToProps)(Login);