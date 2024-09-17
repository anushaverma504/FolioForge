import axios from "axios";
import React, { useState } from "react";

const user = JSON.parse(sessionStorage.getItem("authUser"));

const BasicDetailsForm = ({ switchTab }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    contactno: "",
    place: "",
    linkedin: "",
    github: "",
    portfolio: "",
    resume: "",
    about: "",
    profileImage: null, 
  });

  const [error, setError] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstname || !formData.contactno || !formData.place) {
      setError("Please fill in all required fields");
      return;
    }

    const URL = `http://localhost:4000/basicInfo/basicDetails`;

    const body = new FormData();
    body.append("userID", user._id);
    body.append("firstname", formData.firstname);
    body.append("middlename", formData.middlename);
    body.append("lastname", formData.lastname);
    body.append("contactno", formData.contactno);
    body.append("place", formData.place);
    body.append("linkedin", formData.linkedin);
    body.append("github", formData.github);
    body.append("portfolio", formData.portfolio);
    body.append("resume", formData.resume);
    body.append("about", formData.about);
    if (formData.profileImage) {
      body.append("img", formData.profileImage); 
    }

    try {
      const result = await axios.post(URL, body, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });
      if (result.status === 200) {
        console.log(" -------> ", formData);
        switchTab("education");
      }
    } catch (error) {
      console.error("Error: ", error);
      alert("Invalid data");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="basic-details-form">
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display errors */}
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
      <div className="form-group">
        <label>Profile Image:</label>
        <input
          type="file"
          name="profileImage"
          accept="image/*"
          onChange={handleFileChange} 
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicDetailsForm;
