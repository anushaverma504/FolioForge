import React from 'react';

const EducationDetailsForm = () => {
  return (
    <form className="education-details-form">
      <div>
        <label>Institution Name:</label>
        <input type="text" name="institution" required />
      </div>
      <div>
        <label>Degree:</label>
        <input type="text" name="degree" required />
      </div>
      <div>
        <label>Year of Graduation:</label>
        <input type="text" name="graduationYear" required />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EducationDetailsForm;
