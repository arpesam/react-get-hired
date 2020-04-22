import React from 'react'
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';


const ProfileContact = ({ email, phone, place}) => {
  return (
    <div>
      <p><PhoneOutlined className="profile-icon" />{phone}</p>
      <p><MailOutlined className="profile-icon" />{email}</p>
      <p><EnvironmentOutlined className="profile-icon" />{place}</p>
    </div>
  )
}

export default ProfileContact;
