import React, { Component } from 'react'

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameInput: "",
            passwordInput: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch("http://127.0.0.1:5000/user/create", { 
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                username: this.state.usernameInput,
                password: this.state.passwordInput
            })
         })
         .then(response => response.json())
         .then(data => console.log(data))
         .catch(error => console.log(error))
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div className="signup-wrapper">
                <form onSubmit={this.handleSubmit}>
                <input 
                    name="usernameInput" 
                    type="text" 
                    placeholder="Username" 
                    value={this.state.usernameInput}
                    onChange={this.handleChange}
                 />
                <input 
                    name="passwordInput" 
                    type="password" 
                    placeholder="Password" 
                    value={this.state.passwordInput}
                    onChange={this.handleChange} 
                />
                <button type="submit">Signup</button>
                </form>
                
            </div>
        )
    }
}
