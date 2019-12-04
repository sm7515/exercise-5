import React from 'react'

export function UserInformation({user}) {
    return(
        <div>
            User Information
            {user ? user.email:""}
        </div>
    )
}