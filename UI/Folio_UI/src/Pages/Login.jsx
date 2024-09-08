import React, {useState} from 'react';
import axios from 'axios';
import '../Styles/Auth.css';

const Login = () => {
    const [email,setEmail] = useState(''); 
    const [password,setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("level 1");
        if (email === '' || password === '') {
            setError('All fields are required');
        } else {
            setError('');
            console.log('Logged in with:', email, password);

            const URL = `http://localhost:4000/user/login`;
            const body = {
                "email":email,
                "password":password
            }
            await axios.post(URL,body).then((result) => {
                if (result.status == 200) {
                    console.log(result.data)
                    // sessionStorage.setItem("authUser",JSON.stringify(result.data.data))
                    // sessionStorage.setItem("token",JSON.stringify(result.data.token))
                    // navigate(-1)
                }
                else 
                    alert("Invalid Credentials");
            }).catch((error) => {
                console.log("Error: ",error);
                alert("Invalid Credentials");
            });
        }
    }
    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                </div>
                <button className="submitbtn" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
