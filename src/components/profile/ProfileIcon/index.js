import React from 'react';
import './ProfileIcon.scss';

const ProfileIcon = ({
  imgUrl, username, uid, className = '',
}) => (
  <div className={`profile-icon-container ${className}`}>
    <img
      className="profile-icon"
      src={imgUrl}
      alt={`profile of user ${className}`}
    />
  </div>
);

export default ProfileIcon;
