import React from 'react'
import './ProfileHeader.css'


const ProfileHeader = ({ name, position }) => {
  console.log('name --', position)
  return (
    <div>
      <h1 className="profile-card-title">{name}</h1>
      <h3 className="profile-card-subtitle">{position}</h3>
    </div>
  )
}

export default ProfileHeader;
