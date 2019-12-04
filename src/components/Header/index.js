import React from "react";

export default function Header({ loggedin, logoutFunction}) {
    return(
        <header className='header'>
            <nav>
                {loggedin&&<a href='/'>Home</a>}
                {!loggedin&&<a href='/login'>Login</a>}
                {!loggedin&&<a href='/sign-up'>Sign Up</a>}
                {loggedin && <a onClick={() => { logoutFunction() }} href='/login'>Log Out</a>}
            </nav>
        </header>
    )
}