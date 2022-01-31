import React from 'react';
import Tab from '../Tab';

import './TabContainer.scss';

const TabContainer = ({
  activeTab,
  setActiveTab,
  className = '',
  children,
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={`tab-container-container ${className}`}>
      <ol className="tab-list">
        {childrenArray.map((child) => {
          // @ts-ignore
          const { label } = child.props;
          return (
            <Tab
              isActive={activeTab === label}
              label={label}
              key={label}
              onClick={() => setActiveTab(label)}
            />
          );
        })}
      </ol>
      <div className="tab-container-content">
        {childrenArray.find((child) => child
        // @ts-ignore
          .props.label === activeTab)?.props
          ?.children || 'Tab Empty'}
      </div>
    </div>
  );
};

export default TabContainer;
