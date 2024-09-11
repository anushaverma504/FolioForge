import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa'; // Icons for Add and Delete

const WorkExperienceForm = () => {
  const [workExperience, setWorkExperience] = useState([{ id: 1 }]);

  const addWorkExperience = () => {
    setWorkExperience([
      ...workExperience,
      { id: workExperience.length + 1 },
    ]);
  };

  const deleteWorkExperience = (id) => {
    setWorkExperience(workExperience.filter((experience) => experience.id !== id));
  };

  return (
    <div className="work-experience-container">
      <h2>Work Experience</h2>
      {workExperience.map((experience, index) => (
        <form key={experience.id} className="work-experience-form">
          <div className="form-group">
            <label>Company Name:</label>
            <input type="text" name={`company-${index}`} required />
          </div>
          <div className="form-group">
            <label>Place:</label>
            <input type="text" name={`place-${index}`} required />
          </div>
          <div className="form-group">
            <label>Designation:</label>
            <input type="text" name={`designation-${index}`} required />
          </div>
          <div className="form-group">
            <label>Month of Joining:</label>
            <input type="text" name={`monthOfJoining-${index}`} required />
          </div>
          <div className="form-group">
            <label>Year of Joining:</label>
            <input type="text" name={`yearOfJoining-${index}`} required />
          </div>
          <div className="form-group">
            <label>Month of Leaving:</label>
            <input type="text" name={`monthOfLeaving-${index}`} />
          </div>
          <div className="form-group">
            <label>Year of Leaving:</label>
            <input type="text" name={`yearOfLeaving-${index}`} />
          </div>
          <div className="form-group">
            <label>Job Description:</label>
            <textarea name={`jobDescription-${index}`} />
          </div>

          {/* Delete Button */}
          {workExperience.length > 1 && (
            <button
              type="button"
              className="delete-experience-btn"
              onClick={() => deleteWorkExperience(experience.id)}
              style={{ background: 'red', color: 'white', padding: '5px 10px', margin: '10px 0' }}
            >
              <FaTrash /> Delete
            </button>
          )}
        </form>
      ))}
      <div className="d-flex">
        {/* Add Button */}
        <button
          type="button"
          className="add-experience-btn"
          onClick={addWorkExperience}
          style={{ background: 'green', color: 'white', padding: '10px 20px', margin: '20px 0' }}
        >
          <FaPlus /> Add More Experience
        </button>

        {/* Submit Button */}
        <button type="submit" style={{ marginLeft: '20px' }}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default WorkExperienceForm;
