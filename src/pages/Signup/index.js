import React from "react";
import SignupForm from "../../components/SignupForm";
import SignnWithGoogle from "../../components/LoginWithGoogle";

export default function Signup({ signUpFunction, signupWithGoolge}) {

    return(
        <div>
            <SignupForm submitFunction={signUpFunction} />
            <SignnWithGoogle loginGoogleFunction={signupWithGoolge} />
        </div>
    )
}