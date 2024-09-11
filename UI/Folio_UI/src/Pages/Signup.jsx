import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import'../Styles/Auth.css';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("level 1");
        

        if (!username || !email || !password || !confirmPassword) {
            setError('All fields are required');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Add your signup logic here


        setError('');
        console.log('User signed up with:', { username, email, password });

        const URL = `http://localhost:4000/user/signup`;
            const body = {
                "username":username,
                "email":email,
                "password":password
            }
            await axios.post(URL,body).then((result) => {
                if (result.status == 200) {
                    console.log(result.data.data)
                    sessionStorage.setItem("authUser",JSON.stringify(result.data.data))
                    sessionStorage.setItem("token",JSON.stringify(result.data.token))
                    navigate('/user')
                }
                else 
                    alert("Invalid Credentials");
            }).catch((error) => {
                console.log("Error: ",error);
                alert("Invalid Credentials");
            });

        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="auth-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="username" 
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required />
                </div>

                <button className="submitbtn" type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
