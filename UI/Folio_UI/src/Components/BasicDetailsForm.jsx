import React from 'react';

const BasicDetailsForm = () => {
  return (
    <form className="basic-details-form">
      <div>
        <label>Name:</label>
        <input type="text" name="name" required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" name="phone" required />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default BasicDetailsForm;
