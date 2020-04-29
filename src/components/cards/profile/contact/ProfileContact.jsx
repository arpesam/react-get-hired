import React from 'react';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import './ProfileContact.css';


const ProfileContact = ({ email, phone, place}) => {
  return (
    <div className="profile-contact">
      <p><PhoneOutlined className="profile-icon" />{phone}</p>
      <p><MailOutlined className="profile-icon" />{email}</p>
      <p><EnvironmentOutlined className="profile-icon" />{place}</p>
    </div>
  )
}

export default ProfileContact;
