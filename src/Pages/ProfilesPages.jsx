import React from 'react'
import Profiles from '../Components/Profiles'

export default function ProfilesPages({users}) {

  return (
    <div className='usersList'>
        <Profiles users={users} />
    </div>
  )
}
