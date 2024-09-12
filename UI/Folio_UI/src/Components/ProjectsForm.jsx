import axios from 'axios';
import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const ProjectsForm = ({switchTab}) => {
  const [projects, setProjects] = useState([{ id: 1 }]);
  const [projectFiles, setProjectFiles] = useState({});

  const addProject = () => {
    setProjects([...projects, { id: projects.length + 1 }]);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    setProjectFiles({ ...projectFiles, [index]: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let index = 0; index < projects.length; index++) {
      const formData = new FormData();

      // Append data to FormData
      formData.append('name', e.target[`name-${index}`].value);
      formData.append('technology', e.target[`technology-${index}`].value);
      formData.append('description', e.target[`description-${index}`].value);
      formData.append('deployedLink', e.target[`deployedLink-${index}`].value);
      formData.append('dateOfStarting', e.target[`dateOfStarting-${index}`].value);
      formData.append('dateOfEnding', e.target[`dateOfEnding-${index}`].value);

      // Append file if present
      if (projectFiles[index]) {
        formData.append('img', projectFiles[index]);
      }

      try {
        // Send the request with formData directly
        const response = await axios.post("http://localhost:4000/project/projectDetails", formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 200) {
          alert('Projects submitted successfully!');
          // Assuming `switchTab` is a function defined elsewhere in your component
          switchTab('Skill and Certifications');
        } else {
          alert('Failed to submit projects.');
        }
      } catch (error) {
        console.error('Error submitting projects:', error);
        alert('Error submitting projects.');
      }
    }
};


  return (
    <div className="projects-form-container">
      <h2>Projects</h2>
      <form onSubmit={handleSubmit}>
        {projects.map((project, index) => (
          <div key={project.id} className="projects-form">
            <div className="form-group">
              <label>Project Name:</label>
              <input type="text" name={`name-${index}`} required />
            </div>
            <div className="form-group">
              <label>Technology:</label>
              <input type="text" name={`technology-${index}`} required />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea name={`description-${index}`} required />
            </div>
            <div className="form-group">
              <label>Deployed Link:</label>
              <input type="text" name={`deployedLink-${index}`} />
            </div>

            {/* Dates in a single row */}
            <div className="form-row">
              <div className="form-group">
                <label>Date of Starting:</label>
                <input type="date" name={`dateOfStarting-${index}`} required />
              </div>
              <div className="form-group">
                <label>Date of Ending:</label>
                <input type="date" name={`dateOfEnding-${index}`} />
              </div>
            </div>

            {/* File Upload */}
            <div className="form-group">
              <label>Project Image:</label>
              <input
                type="file"
                name={`projectImage-${index}`}
                accept="image/*"
                onChange={(e) => handleFileChange(e, index)}
              />
            </div>

            {projects.length > 1 && (
              <button
                type="button"
                className="delete-project-btn"
                onClick={() => deleteProject(project.id)}
                style={{
                  background: 'red',
                  color: 'white',
                  padding: '5px 10px',
                  margin: '10px 0',
                }}
              >
                <FaTrash /> Delete
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          className="add-project-btn"
          onClick={addProject}
          style={{
            background: 'green',
            color: 'white',
            padding: '10px 20px',
            margin: '20px 0',
          }}
        >
          <FaPlus /> Add More Project
        </button>
        <button
          type="submit"
          className="submit-projects-btn"
          style={{
            background: 'blue',
            color: 'white',
            padding: '10px 20px',
            margin: '20px 0',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProjectsForm;
