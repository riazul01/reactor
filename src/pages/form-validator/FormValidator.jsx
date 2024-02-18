import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './form-validator.css';

const FormValidator = () => {
    const [user, setUser] = useState({name: '', email: '', password: ''});

    const [validEmail, setValidEmail] = useState(true);
    const [validName, setValidName] = useState(true);
    const [validPassword, setValidPassword] = useState(true);

    const validateName = (name) => {
        const regex = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/g;
        return regex.test(name);
    }

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
        return regex.test(email);
    }


    const validatePassword = (password) => {
        return password.length > 3;
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});

        if (!validEmail && e.target.name === 'email' && validateEmail(e.target.value)) {
            setValidEmail(true);
        }

        if (!validName && e.target.name === 'name' && validateName(e.target.value)) {
            setValidName(true);
        }

        if (!validPassword && e.target.name === 'password' && validatePassword(e.target.value)) {
            setValidPassword(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(user.email) && validateName(user.name) && validatePassword(user.password)) {
            setUser({name: '', email: '', password: ''});
        } 
        
        if (!validateName(user.name)) {
            setValidName(false);
        }

        if (validateName(user.name) && !validateEmail(user.email)) {
            setValidEmail(false);
        }

        if (validateEmail(user.email) && validateName(user.name) && !validatePassword(user.password)) {
            setValidPassword(false);
        }
    }

    return (
        <div className="signup">
            <div className="formContent">
                <h1>Signup</h1>
                <form onSubmit={handleSubmit}>
                    <div className="inputArea">
                        <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Your name" />
                    </div>
                    {!validName && <p className="validation-msg">Please enter a valid name.</p>}
                    
                    <div className="inputArea">
                        <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Your email" />
                    </div>
                    {!validEmail && <p className="validation-msg">Please enter a valid email address.</p>}
                    
                    <div className="inputArea">
                        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Create password" />
                    </div>
                    {!validPassword && <p className="validation-msg">Please enter a valid password.</p>}
                    
                    <button type="submit" className="formBtn">Signup</button>
                </form>
            </div>
            <Link to="/" className="backLink">Home</Link>
        </div>
    );
}

export default FormValidator;