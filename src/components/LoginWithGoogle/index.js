import  React from 'react';

export default function SignnWithGoogle({loginGoogleFunction}){
    return(
        <div>
            <button className="googleButton" onClick={() => { loginGoogleFunction()}}>
                <span>Signin With Google</span>
            </button>
        </div>
    )
}