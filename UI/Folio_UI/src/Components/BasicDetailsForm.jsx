import axios from 'axios';
import React, { useState } from 'react';

const user = JSON.parse(sessionStorage.getItem("authUser"));
const BasicDetailsForm = ({switchTab}) => {
  const [formData, setFormData] = useState({
    firstname: '',
    middlename: '',
    lastname: '',
    contactno: '',
    place: '',
    linkedin: '',
    github: '',
    portfolio: '',
    resume: '',
    about: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!formData.firstname || !formData.contactno || !formData.place) {
      setError('Enter the required fields');
      return;
    }

    const URL = `http://localhost:4000/basicInfo/basicDetails`;
    const body = {
      "userID": user._id,
      "firstname": formData.firstname,
      "middlename": formData.middlename,
      "lastname": formData.lastname,
      "contactno": formData.contactno,
      "place": formData.place,
      "linkedin": formData.linkedin,
      "github": formData.github,
      "portfolio": formData.portfolio,
      "resume": formData.resume,
      "about": formData.about,
    }

    await axios.post(URL,body).then((result) => {
      if(result.status == 200) {
        console.log(" -------> ",formData);
        switchTab('education');
      }
    }).catch((error) => {
      console.log("Error: ",error);
      alert("Invalid data");
    }

    )
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="basic-details-form">
      <div>
        <label>First Name*</label>
        <input 
          type="text" 
          name="firstname" 
          value={formData.firstname} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Middle Name</label>
        <input 
          type="text" 
          name="middlename" 
          value={formData.middlename} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Last Name</label>
        <input 
          type="text" 
          name="lastname" 
          value={formData.lastname} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Contact No*</label>
        <input 
          type="text" 
          name="contactno" 
          value={formData.contactno} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Place*</label>
        <input 
          type="text" 
          name="place" 
          value={formData.place} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>LinkedIn</label>
        <input 
          type="text" 
          name="linkedin" 
          value={formData.linkedin} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>GitHub</label>
        <input 
          type="text" 
          name="github" 
          value={formData.github} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Portfolio</label>
        <input 
          type="text" 
          name="portfolio" 
          value={formData.portfolio} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Resume</label>
        <input 
          type="text" 
          name="resume" 
          value={formData.resume} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>About</label>
        <textarea 
          name="about" 
          value={formData.about} 
          onChange={handleChange} 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicDetailsForm;
