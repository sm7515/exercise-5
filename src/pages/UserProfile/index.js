import React from 'react';
import {UserInformation} from '../../components/UserProfileComponent/index'

export default function UserProfile({user}) {
    console.log(user)
    return (
        <div>
            <div>user Profile</div>
            <UserInformation user={user}/>
        </div>
    )
}