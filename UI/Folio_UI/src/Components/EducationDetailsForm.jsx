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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission goes here
    console.log('Form Submitted', educationDetails);
  };

  return (
    <div className="education-details-container">
      <h2>Education Details</h2>
      <form onSubmit={handleSubmit}>
        {educationDetails.map((detail, index) => (
          <div key={detail.id} className="education-details-form">
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
                // style={{ background: '#E83133', color: 'white', padding: '5px 10px', margin: '10px 0' }}
              >
                <FaTrash /> Delete
              </button>
            )}
          </div>
        ))}
        <div className="d-flex">
          <button
            type="button"
            className="add-education-btn"
            onClick={addEducationDetail}
            // style={{ background: 'green', color: 'white', padding: '10px 20px', margin: '20px 10px 20px 0' }}
          >
            <FaPlus /> Add More Education
          </button>
          <button
            type="submit"
            style={{ background: 'blue', color: 'white', padding: '10px 20px', margin: '20px 0' }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EducationDetailsForm;
