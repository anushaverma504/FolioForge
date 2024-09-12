import React, { useState } from 'react';
import BasicDetailsForm from '../Components/BasicDetailsForm';
import EducationDetailsForm from '../Components/EducationDetailsForm';
import WorkExperienceForm from '../Components/WorkExperienceForm';
import '../Styles/UserDashboard.css'; // Importing the CSS
import ProjectsForm from '../Components/ProjectsForm';
import SkillsCertificationForm from '../Components/SkillsCertificationForm';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const switchTab = (tab) => {
    setActiveTab(tab);
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basic':
        return <BasicDetailsForm switchTab={switchTab}/>;
      case 'education':
        return <EducationDetailsForm switchTab={switchTab}/>;
      case 'work':
        return <WorkExperienceForm switchTab={switchTab}/>;
      case 'Projects':
        return <ProjectsForm switchTab={switchTab}/>;
      case 'Skill and Certifications':
        return <SkillsCertificationForm/>;
      default:
        return null;
    }
  };

  return (
    <div className='UserDashboard'>
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
          <button 
            className={activeTab === 'Projects' ? 'active-tab' : ''}
            onClick={() => setActiveTab('Projects')}
          >
            Projects
          </button>
          <button 
            className={activeTab === 'Skill and Certifications' ? 'active-tab' : ''}
            onClick={() => setActiveTab('Skill and Certifications')}
          >
            Skill and Certifications
          </button>
        </div>
        <div className="tab-content">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
