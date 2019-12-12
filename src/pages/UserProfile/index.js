import React from 'react';
import {UserInformation} from '../../components/UserProfileComponent/index'

export default function UserProfile({user}) {
    console.log(user)
    return (
        <div>
            <UserInformation user={user}/>
        </div>
    )
}