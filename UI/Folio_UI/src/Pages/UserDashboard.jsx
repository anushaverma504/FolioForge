import React, { useState } from 'react';
import BasicDetailsForm from '../Components/BasicDetailsForm';
import EducationDetailsForm from '../Components/EducationDetailsForm';
import WorkExperienceForm from '../Components/WorkExperienceForm';
import '../Styles/UserDashboard.css'; // Importing the CSS

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return <BasicDetailsForm />;
      case 'education':
        return <EducationDetailsForm />;
      case 'work':
        return <WorkExperienceForm />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="tabs">
          <button 
            className={activeTab === 'basic' ? 'active-tab' : ''}
            onClick={() => setActiveTab('basic')}
          >
            Basic Details
          </button>
          <button 
            className={activeTab === 'education' ? 'active-tab' : ''}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button 
            className={activeTab === 'work' ? 'active-tab' : ''}
            onClick={() => setActiveTab('work')}
          >
            Work Experience
          </button>
        </div>
        <div className="tab-content">
          {renderTabContent()}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
