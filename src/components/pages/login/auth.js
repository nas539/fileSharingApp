import React, { Component } from 'react'

import Login from "./login"
import Signup from "./signup"

export default class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authMethod: "login",
            usernameInput: "",
            passwordInput: "",
            passwordConfirmInput: "",
            errorMessage: "none"
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleSignup(event) {
        event.preventDefault();

        if (this.state.usernameInput === "" || this.state.passwordInput === "" || this.state.passwordConfirmInput === "") {
            this.setState({
                errorMessage: "blank field"
            })
        } else if (this.state.passwordInput !== this.state.passwordConfirmInput) {
            this.setState({
                errorMessage: "mismatched passwords"
            })
        } else {
            fetch("http://127.0.0.1:5000/user/create", { 
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                username: this.state.usernameInput,
                password: this.state.passwordInput
            })
         })
         .then(response => response.json())
         .then(data => {
             console.log(data)

             if (data === "Username taken") {
                 this.setState({
                     errorMessage: "username taken"
                 })
             }
             else {
            this.setState({
                errorMessage: "none"
            })
        }
         })
         .catch(error => {
             console.log(error)
             this.setState({
                errorMessage: "fetch error"
             })

         })
        }

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorMessage: "none"
        })
    }

    handleClick() {
        this.setState({
            authMethod: this.state.authMethod === "login" ? "signup" : "login",
            errorMessage: "none"
        })
    }

    handleLogin(event) {
        event.preventDefault();
        if (this.state.usernameInput === "" || this.state.passwordInput === "") {
            this.setState({ errorMessage: "blank field" })
        }
        else {
            fetch("http://127.0.0.1:5000/user/verification", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    username: this.state.usernameInput,
                    password: this.state.passwordInput
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
 
                if (data === "User NOT Verified") {
                    this.setState({ errorMessage: "not verified" })
                }
                else {
                    this.setState({ errorMessage: "none" })
                }
             })
            .catch(error => {
                console.log(error)
                this.setState({ errorMessage: "fetch error" })
             })
        }
    }

    render() {
        return (
            <div className="auth-wrapper">
                {this.state.authMethod === "login" 
                ? <Login 
                handleChange={this.handleChange}
                handleSubmit={this.handleLogin}
                usernameInput={this.state.usernameInput}
                passwordInput={this.state.passwordInput}
                errorMessage={this.state.errorMessage}
                handleClick={this.handleClick}
                /> 
                : <Signup
                   handleChange={this.handleChange}
                   handleSubmit={this.handleSignup}
                   usernameInput={this.state.usernameInput}
                   passwordInput={this.state.passwordInput}
                   passwordConfirmInput={this.state.passwordConfirmInput}
                   errorMessage={this.state.errorMessage}
                   handleClick={this.handleClick}
                 />}
              
            </div>
        )
    }
}
