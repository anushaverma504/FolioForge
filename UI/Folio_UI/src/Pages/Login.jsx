import React from 'react';
import '../Styles/Auth.css';

const Login = () => {
    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" required />
                </div>
                <button className="submitbtn" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
