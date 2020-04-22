import React from 'react'
import ProfileCard from '../components/cards/profile/ProfileCard';
import { profiles } from '../api/profiles';

import './MainContent.css';


const MainContent = () => {
  const profilesMap = profiles.map((profile) => {
    return (
      <ProfileCard key={profile.id} profile={profile} />
    )
  })

  return (
    <div className="container main-content">
      {profilesMap}
    </div>
  )
}

export default MainContent;

