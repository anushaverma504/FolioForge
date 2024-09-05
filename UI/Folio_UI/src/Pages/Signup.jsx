import React from 'react';
import'../Styles/Auth.css';

const Signup = () => {
    return (
        <div className="auth-container">
            <h2>Signup</h2>
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" required />
                </div>
                <button className="submitbtn" type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
