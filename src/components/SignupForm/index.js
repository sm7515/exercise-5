import React from 'react'

export default function SignupForm({ submitFunction }) {
    return (
        <div>
            <form onSubmit={(e) => { submitFunction(e) }}>
                <label htmlFor='signupEmail'>Email</label>
                <input type='email' name='signupEmail'></input>
                <label htmlFor='signupPassword'>Password</label>
                <input type='password' name='signupPassword'></input>
                <button>Sign up</button>
            </form>
        </div>
    )
}