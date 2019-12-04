import React from 'react';
import LoginForm from '../../components/LoginForm/index'
import SigninWithGoogle from '../../components/LoginWithGoogle'

export default function Login({ loginFunction, loginWithGoogle}){
    return(
        <div>
            <LoginForm submitFunction={loginFunction}/>
            <SigninWithGoogle loginGoogleFunction={loginWithGoogle}/>
        </div>
    )
}