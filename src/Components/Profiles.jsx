import React from 'react'
import {Link} from 'react-router-dom'

export default function Profiles({users}) {

  return (
    <div>
        {users.map((user) => {
            return (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <Link to={`/profiles/${user.id}`}>View More</Link>
                </div>
            );
        })};
    </div>
  )
}
