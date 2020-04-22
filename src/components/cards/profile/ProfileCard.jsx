import React from 'react';
import { Tag } from 'antd';
import { LinkedinFilled } from '@ant-design/icons';
import ProfileContact from './contact/ProfileContact';
import ProfileHeader from './header/ProfileHeader';
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

  console.log('name 2 -- ', name)

  return (
    <div className="profile-card">
      <ProfileHeader name={name} position={position} />

      <Tag color="green">{area}</Tag>

      <ProfileContact phone={phone} email={email} place={place} />

      <button className="profile-card-btn">
        <LinkedinFilled className="profile-icon" />
        Linkedin
      </button>
    </div>
  )
}

export default ProfileCard;
