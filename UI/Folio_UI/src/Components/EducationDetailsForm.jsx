import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa'; // Importing the icons

const EducationDetailsForm = () => {
  const [educationDetails, setEducationDetails] = useState([{ id: 1 }]);

  const addEducationDetail = () => {
    setEducationDetails([
      ...educationDetails,
      { id: educationDetails.length + 1 },
    ]);
  };

  const deleteEducationDetail = (id) => {
    setEducationDetails(educationDetails.filter((detail) => detail.id !== id));
  };

  return (
    <div className="education-details-container">
      <h2>Education Details</h2>
      {educationDetails.map((detail, index) => (
        <form key={detail.id} className="education-details-form">
          <div className="form-group">
            <label>Institution Name:</label>
            <input type="text" name={`institution-${index}`} required />
          </div>
          <div className="form-group">
            <label>Degree:</label>
            <input type="text" name={`degree-${index}`} required />
          </div>
          <div className="form-group">
            <label>City:</label>
            <input type="text" name={`city-${index}`} required />
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
            <label>Marks:</label>
            <input type="text" name={`marks-${index}`} />
          </div>
          <div className="form-group">
            <label>Marks Type:</label>
            <select name={`marksType-${index}`} defaultValue="%">
              <option value="CGPA">CGPA</option>
              <option value="%">%</option>
            </select>
          </div>
          {/* Delete Button */}
          {educationDetails.length > 1 && (
            <button
              type="button"
              className="delete-education-btn"
              onClick={() => deleteEducationDetail(detail.id)}
              style={{ background: 'red', color: 'white', padding: '5px 10px', margin: '10px 0' }}
            >
              <FaTrash /> Delete
            </button>
          )}
        </form>
      ))}
      <button
        type="button"
        className="add-education-btn"
        onClick={addEducationDetail}
        style={{ background: 'green', color: 'white', padding: '10px 20px', margin: '20px 0' }}
      >
        <FaPlus /> Add More Education
      </button>
    </div>
  );
};

export default EducationDetailsForm;
