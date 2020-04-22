import React from 'react'
import { LinkedinFilled, PhoneOutlined } from '@ant-design/icons';
import './ProfileCard.css'


const ProfileCard = () => {
  return (
    <div className="profile-card">
      <p className="profile-card-title">Danilo Sampaio</p>
      <p className="profile-card-subtitle">Desenvolvedor Full Stack</p>
      <p><PhoneOutlined /> 11 984626807</p>
      <p>
        <button className="profile-card-btn">
          <LinkedinFilled />
          Linkedin
        </button>
      </p>
    </div>
  )
}

export default ProfileCard;
