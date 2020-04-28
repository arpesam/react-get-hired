import React from 'react';
import Tag from '../../tag/Tag';
import { LinkedinFilled } from '@ant-design/icons';
import ProfileHeader from './header/ProfileHeader';
import ProfileContact from './contact/ProfileContact';
import './ProfileCard.css';


const ProfileCard = (props) => {
  const {
    name,
    position,
    area,
    phone,
    email,
    place,
  } = props.profile;

  return (
    <div className="profile-card">
      <ProfileHeader name={name} position={position} />

      <Tag variant="green" value={area} />

      <ProfileContact phone={phone} email={email} place={place} />

      <button className="profile-card-btn">
        <LinkedinFilled className="profile-icon" />
        Linkedin
      </button>
    </div>
  )
}

export default ProfileCard;
