import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa'; 
import axios from 'axios';

const user = JSON.parse(sessionStorage.getItem("authUser"));

const EducationDetailsForm = ({switchTab}) => {
  const [educationDetails, setEducationDetails] = useState([{ id: 1, university: '', course: '', city: '', monthOfJoining: '', yearOfJoining: '', monthOfLeaving: '', yearOfLeaving: '', marks: '', marksType: '%' }]);

  const addEducationDetail = () => {
    setEducationDetails([...educationDetails, { id: educationDetails.length + 1, university: '', course: '', city: '', monthOfJoining: '', yearOfJoining: '', monthOfLeaving: '', yearOfLeaving: '', marks: '', marksType: '%' }]);
  };

  const deleteEducationDetail = (id) => {
    setEducationDetails(educationDetails.filter((detail) => detail.id !== id));
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedDetails = [...educationDetails];
    updatedDetails[index][name] = value;
    setEducationDetails(updatedDetails);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL = `http://localhost:4000/education/educationDetails`;

    for (let i = 0; i < educationDetails.length; i++) {
      const detail = educationDetails[i];
      const body = {
        userID: user._id,
        university: detail.university,
        course: detail.course,
        city: detail.city,
        monthOfJoining: detail.monthOfJoining,
        yearOfJoining: detail.yearOfJoining,
        monthOfLeaving: detail.monthOfLeaving,
        yearOfLeaving: detail.yearOfLeaving,
        marks: detail.marks,
        marksType: detail.marksType,
      };

      await axios.post(URL, body).then((result) => {
        if (result.status === 200) {
          console.log('Data submitted successfully', result.data);
          switchTab('work')
        }
      }).catch((error) => {
        console.error('Error:', error);
        alert('Invalid data');
      });
    }

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
              <input
                type="text"
                name="university"
                value={detail.university}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Degree:</label>
              <input
                type="text"
                name="course"
                value={detail.course}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={detail.city}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Month of Joining:</label>
              <input
                type="text"
                name="monthOfJoining"
                value={detail.monthOfJoining}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Year of Joining:</label>
              <input
                type="text"
                name="yearOfJoining"
                value={detail.yearOfJoining}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Month of Leaving:</label>
              <input
                type="text"
                name="monthOfLeaving"
                value={detail.monthOfLeaving}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <div className="form-group">
              <label>Year of Leaving:</label>
              <input
                type="text"
                name="yearOfLeaving"
                value={detail.yearOfLeaving}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <div className="form-group">
              <label>Marks:</label>
              <input
                type="text"
                name="marks"
                value={detail.marks}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <div className="form-group">
              <label>Marks Type:</label>
              <select
                name="marksType"
                value={detail.marksType}
                onChange={(e) => handleChange(index, e)}
              >
                <option value="CGPA">CGPA</option>
                <option value="%">%</option>
              </select>
            </div>
            {educationDetails.length > 1 && (
              <button
                type="button"
                className="delete-education-btn"
                onClick={() => deleteEducationDetail(detail.id)}
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
