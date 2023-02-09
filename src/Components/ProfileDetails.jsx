import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProfileDetails({users}) {
    const {id} = useParams();

    const user = users.find((user) => user.id === Number(id));
    
    return (
    <div className='userDetails'>
        <div>
            <img src={user.avatar} alt="avatar profile" />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    </div>
  )
}
