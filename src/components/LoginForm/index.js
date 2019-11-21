import React from 'react'

export default function LoginForm() {
    return (
        <div>
            <form>
                <label for='loginEmail'>Email</label>
                <input type='email' name='loginEmail'></input>
                <label for='loginPassword'>Email</label>
                <input type='password' name='loginPassword'></input>
                <button>Log In</button>
            </form>
        </div>
    )
}