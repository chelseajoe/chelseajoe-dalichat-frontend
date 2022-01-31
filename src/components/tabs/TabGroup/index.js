import React from 'react';
import TabContainer from '../TabContainer';
import ProfileCard from '../../profile/ProfileCard';
import './TabGroup.scss';

const TabGroup = ({
  activeTab, setActiveTab, user, children, className = '',
}) => {
  const {
    fullName, profileUrl, username, blurb, portfolioUrl, _id,
  } = user;

  return (
    <div className={`tabgroup-container ${className}`}>
      <ProfileCard
        // @ts-ignore
        fullName={fullName}
        profileUrl={profileUrl}
        username={username}
        blurb={blurb}
        portfolioUrl={portfolioUrl}
        uid={_id}
        className="tabgroup-profile-card"
      />

      <TabContainer
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        className="tabgroup-tab-container"
      >
        {children}
      </TabContainer>
    </div>
  );
};

export default TabGroup;
