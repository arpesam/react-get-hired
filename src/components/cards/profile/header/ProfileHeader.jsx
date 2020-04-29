import React from 'react'
import './ProfileHeader.css'


const ProfileHeader = ({ name, position }) => {
  return (
    <div>
      <h1 className="profile-card-title">{name}</h1>
      <h4 className="profile-card-subtitle">{position}</h4>
    </div>
  )
}

export default ProfileHeader;
