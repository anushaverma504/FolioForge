import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-stars';

const skillOptions = [
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'React', label: 'React' },
  { value: 'Node.js', label: 'Node.js' },
  { value: 'Python', label: 'Python' },
  { value: 'Java', label: 'Java' },
  // Add more skill options as needed
];

function SkillsCertificationForm() {
  const [skills, setSkills] = useState([{ selectedSkill: '', level: 0 }]);
  const [newSkill, setNewSkill] = useState({ selectedSkill: '', level: 0 });
  const [certifications, setCertifications] = useState([{ title: '', affiliatedCompany: '', description: '' }]);

  const navigate = useNavigate();

  const handleSkillChange = (e) => {
    setNewSkill({ ...newSkill, selectedSkill: e.target.value });
  };

  const handleLevelChange = (newRating) => {
    setNewSkill({ ...newSkill, level: newRating });
  };

  const addSkill = () => {
    if (newSkill.selectedSkill && newSkill.level > 0) {
      setSkills([...skills, newSkill]);
      setNewSkill({ selectedSkill: '', level: 0 }); // Reset fields after adding
    } else {
      alert('Please select a skill and rate the skill level.');
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const handleCertificationChange = (index, field, value) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index][field] = value;
    setCertifications(updatedCertifications);
  };

  const addCertification = () => {
    setCertifications([...certifications, { title: '', affiliatedCompany: '', description: '' }]);
  };

  const removeCertification = (index) => {
    const updatedCertifications = certifications.filter((_, i) => i !== index);
    setCertifications(updatedCertifications);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Skills:', skills);
    console.log('Certifications:', certifications);
    navigate('/portfolio-templates');
  };

  return (
    <div className="form-container">
      <h2>Skills and Certifications</h2>
      <form onSubmit={handleSubmit}>
        <h3>Skills</h3>
        <div className="form-section" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
          <div className="form-group" style={{ flex: '1' }}>
            <label>Select Skill *:</label>
            <select
              value={newSkill.selectedSkill}
              onChange={handleSkillChange}
              className="select-input"
              style={{ width: '100%', minHeight: '38px' }}
            >
              <option value="">--Select a Skill--</option>
              {skillOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group" style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
            <label style={{ marginRight: '10px' }}>Level (rate out of 5):</label>
            <ReactStars
              className="skills"
              count={5}
              value={newSkill.level}
              onChange={handleLevelChange}
              size={24}
              color2={'#ffd700'}
            />
          </div>
          <button type="button" className="add-button" onClick={addSkill}>
            Add Skill
          </button>
        </div>

        {skills.length > 0 && (
          <div className="skills-list">
            <h4>Added Skills:</h4>
            <ul>
              {skills.map((skill, index) => (
                <li key={index} className="skill-item">
                  <span>{skill.selectedSkill} - Level: {skill.level}</span>
                  <button type="button" className="edit-button" onClick={() => removeSkill(index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <h3>Certifications</h3>
        {certifications.map((cert, index) => (
          <div className="form-section" key={index} style={{ marginBottom: '15px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
            <div className="form-group">
              <label>Title (required):</label>
              <input
                type="text"
                value={cert.title}
                onChange={(e) => handleCertificationChange(index, 'title', e.target.value)}
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <label>Affiliated Company (required):</label>
              <input
                type="text"
                value={cert.affiliatedCompany}
                onChange={(e) => handleCertificationChange(index, 'affiliatedCompany', e.target.value)}
                className="input-field"
                required
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <input
                type="text"
                value={cert.description}
                onChange={(e) => handleCertificationChange(index, 'description', e.target.value)}
                className="input-field"
              />
            </div>
            <button type="button" className="delete-button" onClick={() => removeCertification(index)}>
              Delete
            </button>
          </div>
        ))}
        <button type="button" className="add-button" onClick={addCertification}>
          Add Certification
        </button>

        <br />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SkillsCertificationForm;
