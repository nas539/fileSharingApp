import React from 'react'

export default function signup(props) {
    const errorMessage = {
        "none": "",
        "blank field": "Please fill in all fields.",
        "mismatched passwords": "Passwords do not match. Please try again.",
        "fetch error": "An error occured. Please try again later.",
        "username taken": "Username already exists. Please try another one."
    }
        return (
                <form onSubmit={props.handleSubmit}>
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
                    <input 
                        name="passwordConfirmInput" 
                        type="password" 
                        placeholder="Password Confirm" 
                        value={props.passwordConfirmInput}
                        onChange={props.handleChange} 
                    />
                    <button type="submit">Signup</button>
                    <p className="error">{errorMessage[props.errorMessage]}</p>
                     <p onClick={props.handleClick}>Already have an account? Click here to login!</p>
                </form>
        )
}

