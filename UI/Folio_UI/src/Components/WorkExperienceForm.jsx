import React from 'react';

const WorkExperienceForm = () => {
  return (
    <form className="work-experience-form">
      <div>
        <label>Company Name:</label>
        <input type="text" name="company" required />
      </div>
      <div>
        <label>Job Title:</label>
        <input type="text" name="jobTitle" required />
      </div>
      <div>
        <label>Years of Experience:</label>
        <input type="text" name="experienceYears" required />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default WorkExperienceForm;
