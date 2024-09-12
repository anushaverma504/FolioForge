import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import axios from 'axios';

const user = JSON.parse(sessionStorage.getItem("authUser"));

const WorkExperienceForm = () => {
  const [workExperience, setWorkExperience] = useState([
    { id: 1, company: '', place: '', designation: '', monthOfJoining: '', yearOfJoining: '', monthOfLeaving: '', yearOfLeaving: '', jobDescription: '' }
  ]);

  const addWorkExperience = () => {
    setWorkExperience([
      ...workExperience,
      { id: workExperience.length + 1, company: '', place: '', designation: '', monthOfJoining: '', yearOfJoining: '', monthOfLeaving: '', yearOfLeaving: '', jobDescription: '' },
    ]);
  };

  const deleteWorkExperience = (id) => {
    setWorkExperience(workExperience.filter((experience) => experience.id !== id));
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedExperience = [...workExperience];
    updatedExperience[index][name] = value;
    setWorkExperience(updatedExperience);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const URL = `http://localhost:4000/experience/experienceDetails`;

    for (let i = 0; i < workExperience.length; i++) {
      const detail = workExperience[i];
      const body = {
        userID: user._id,
        company: detail.company,
        place: detail.place,
        designation: detail.designation,
        monthOfJoining: detail.monthOfJoining,
        yearOfJoining: detail.yearOfJoining,
        monthOfLeaving: detail.monthOfLeaving,
        yearOfLeaving: detail.yearOfLeaving,
        jobDescription: detail.jobDescription,
      };

      await axios.post(URL, body).then((result) => {
        if (result.status === 200) {
          console.log('Data submitted successfully', result.data);
        }
      }).catch((error) => {
        console.error('Error:', error);
        alert('Invalid data');
      });
    }

    console.log('Form Submitted', workExperience);
  };

  return (
    <div className="work-experience-container">
      <h2>Work Experience</h2>
      <form onSubmit={handleSubmit}>
        {workExperience.map((experience, index) => (
          <div key={experience.id} className="work-experience-form">
            <div className="form-group">
              <label>Company Name:</label>
              <input
                type="text"
                name="company"
                value={experience.company}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Place:</label>
              <input
                type="text"
                name="place"
                value={experience.place}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Designation:</label>
              <input
                type="text"
                name="designation"
                value={experience.designation}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Month of Joining:</label>
              <input
                type="text"
                name="monthOfJoining"
                value={experience.monthOfJoining}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Year of Joining:</label>
              <input
                type="text"
                name="yearOfJoining"
                value={experience.yearOfJoining}
                onChange={(e) => handleChange(index, e)}
                required
              />
            </div>
            <div className="form-group">
              <label>Month of Leaving:</label>
              <input
                type="text"
                name="monthOfLeaving"
                value={experience.monthOfLeaving}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <div className="form-group">
              <label>Year of Leaving:</label>
              <input
                type="text"
                name="yearOfLeaving"
                value={experience.yearOfLeaving}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <div className="form-group">
              <label>Job Description:</label>
              <textarea
                name="jobDescription"
                value={experience.jobDescription}
                onChange={(e) => handleChange(index, e)}
              />
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
          </div>
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
          <button
            type="submit"
            style={{ marginLeft: '20px', background: 'blue', color: 'white', padding: '10px 20px' }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkExperienceForm;
