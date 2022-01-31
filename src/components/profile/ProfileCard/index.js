import React from 'react';
import ProfileIcon from '../ProfileIcon';
import './ProfileCard.scss';

const ProfileCard = ({
  fullName, username, uid, blurb, portfolioUrl, className = '', profileUrl,
}) => (
  <div className={`profile-card-container ${className}`}>
    <ProfileIcon imgUrl={profileUrl} username={username} uid={uid} className="profile-image" />
    {<p className="portfolio-card-fullName"> {fullName}</p>}
    {<p className="portfolio-card-username"> {username}</p>}
    {blurb && <p className="portfolio-card-blurb">{blurb}</p>}
    {portfolioUrl && <p className="portfolio-card-portfolioUrl">{portfolioUrl}</p>}
  </div>
);

export default ProfileCard;
