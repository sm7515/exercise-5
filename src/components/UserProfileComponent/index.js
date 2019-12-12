import React from 'react'

export function UserInformation({user}) {
    var name, email, photoUrl;

    if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
    }
    return(
        <div className="user-profile">
        {user ? 
            <div>
                <h2>Welcome {name?name:""}</h2>
                {photoUrl?<img src={photoUrl} alt="photoUrl" />:""}
                {name?<span>name: {name}</span>:""}
                <span>email: {email}</span>
            </div>
            :""}
        </div>
    )
}