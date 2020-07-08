import React from 'react'

export default function login(props) {
    const errorMessage = {
        "none": "",
        "blank field": "Please fill in all fields.",
        "fetch error": "An error occured. Please try again later.",
        "not verified": "Incorrect username or password."
    }

        return (

                 <form  onSubmit={props.handleSubmit}>
                    <input 
                        name="usernameInput" 
                        type="text" 
                        placeholder="Username" 
                        value={props.usernameInput}
                        onChange={props.handleChange}
                    />
                    <input 
                        name="passwordInput" 
                        type="password" 
                        placeholder="Password" 
                        value={props.passwordInput}
                        onChange={props.handleChange} 
                    />
                    <button type="submit">Login</button>
                    <p className="error">{errorMessage[props.errorMessage]}</p>
            <p onClick={props.handleClick}>Don't have an account? Click here to sign up!</p>
                </form>
                

        )
    
}
