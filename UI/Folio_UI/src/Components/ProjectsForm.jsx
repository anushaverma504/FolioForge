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
    const files = e.target.files[0];
    setProjectFiles({ ...projectFiles, [index]: files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    projects.forEach((_, index) => {
      formData.append(`name-${index}`, e.target[`name-${index}`].value);
      formData.append(`technology-${index}`, e.target[`technology-${index}`].value);
      formData.append(`description-${index}`, e.target[`description-${index}`].value);
      formData.append(`deployedLink-${index}`, e.target[`deployedLink-${index}`].value);
      formData.append(`dateOfStarting-${index}`, e.target[`dateOfStarting-${index}`].value);
      formData.append(`dateOfEnding-${index}`, e.target[`dateOfEnding-${index}`].value);

      if (projectFiles[index]) {
        formData.append(`img-${index}`, projectFiles[index]);
      }
    });

    // Example of sending data using fetch
    try {
      const response = await fetch('http://localhost:4000/project/projectDetails', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Projects submitted successfully!');
        switchTab('Skill and Certifications')
      } else {
        alert('Failed to submit projects.');
      }
    } catch (error) {
      console.error('Error submitting projects:', error);
      alert('Error submitting projects.');
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
