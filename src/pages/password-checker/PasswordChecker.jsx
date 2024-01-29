import React, { useState } from 'react';

// icons
import { FaTimesCircle } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import { BsFillEyeFill } from 'react-icons/bs';
import { BsFillEyeSlashFill } from 'react-icons/bs';

import './password-checker.css';

const PasswordChecker = () => {
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [instructions, setInstructions] = useState({
        uppercase: false,
        lowercase: false,
        digit: false,
        specialChar: false
    });

    const checkInstructions = (password) => {
        let uppercase = /[A-Z]/.test(password);
        let lowercase = /[a-z]/.test(password);
        let digit = /\d/.test(password);
        let specialChar = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password);
        
        setInstructions({
            uppercase, lowercase, digit, specialChar
        });
    }

    const checkPasswordStrength = (password) => {
        const len = password.length;

        // password length is less than 4
        const veryWeak = len > 0 && len < 4;

        // lowercase, uppercase, [4, 6]
        const weak = /^(?=.*[a-zA-Z]).{4,6}$/g.test(password);

        // at least 1 lowercase, 1 uppercase, [4, 8]
        const fair = /^(?=.*[a-z])(?=.*[A-Z]).{4,8}$/g.test(password);

        // at least 1 lowercase, 1 uppercase, 1 digit, [6, 10]
        const good = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,10}$/g.test(password);

        // at least 1 lowercase, 1 uppercase, 1 digit, 1 special character [6,12]
        const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,12}$/g.test(password);
        
        // at least 1 lowercase, 1 uppercase, 1 digit, 1 special character [12,]
        const excellent = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&^()_\-=[\]{};':"\\|,.<>/?`~]{12,}$/g.test(password);

        if (excellent) {
            setPasswordStrength(6);
        } else if (strong) {
            setPasswordStrength(5);
        } else if (good) {
            setPasswordStrength(4);
        } else if (fair) {
            setPasswordStrength(3);
        } else if (weak) {
            setPasswordStrength(2);
        } else if (veryWeak) {
            setPasswordStrength(1);
        }

        if (password.length === 0) {
            setPasswordStrength(0);
        }
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleChange = (e) => {
        setPassword(e.target.value);
        checkPasswordStrength(e.target.value);
        checkInstructions(e.target.value);
    }

    return (
        <div className="passwordChecker">
            <div className="checkBox">
                <div className="inputField">
                    <input type={showPassword ? "text" : "password"} value={password} onChange={handleChange} placeholder="Enter your password" />
                    {showPassword && <BsFillEyeFill className="iconEye" onClick={handleShowPassword} />}
                    {!showPassword && <BsFillEyeSlashFill className="iconEyeSlash" onClick={handleShowPassword} />}
                </div>

                {password && <div className="strenghtBars">
                    <span className="strenghtBar" style={(passwordStrength >= 1) ? {background: 'seagreen'} : {background: '#ddd'}}></span>
                    <span className="strenghtBar" style={(passwordStrength >= 2) ? {background: 'seagreen'} : {background: '#ddd'}}></span>
                    <span className="strenghtBar" style={(passwordStrength >= 3) ? {background: 'seagreen'} : {background: '#ddd'}}></span>
                    <span className="strenghtBar" style={(passwordStrength >= 4) ? {background: 'seagreen'} : {background: '#ddd'}}></span>
                    <span className="strenghtBar" style={(passwordStrength >= 5) ? {background: 'seagreen'} : {background: '#ddd'}}></span>
                    <span className="strenghtBar" style={(passwordStrength >= 6) ? {background: 'seagreen'} : {background: '#ddd'}}></span>
                </div>}

                <div className="instructions">
                    <p>At least:</p>
                    <p>
                        {!instructions.lowercase && <FaTimesCircle className="iconTimes" />}
                        {instructions.lowercase && <BsCheckCircleFill className="iconCheck" />}
                        <span style={instructions.lowercase ? {color: 'seagreen'} : null}>1 Lowercase</span>
                    </p>
                    <p>
                        {!instructions.uppercase && <FaTimesCircle className="iconTimes" />}
                        {instructions.uppercase && <BsCheckCircleFill className="iconCheck" />}
                        <span style={instructions.uppercase ? {color: 'seagreen'} : null}>1 Uppercase</span>
                    </p>
                    <p>
                        {!instructions.digit && <FaTimesCircle className="iconTimes" />}
                        {instructions.digit && <BsCheckCircleFill className="iconCheck" />}
                        <span style={instructions.digit ? {color: 'seagreen'} : null}>1 Digit</span>
                    </p>
                    <p>
                        {!instructions.specialChar && <FaTimesCircle className="iconTimes" />}
                        {instructions.specialChar && <BsCheckCircleFill className="iconCheck" />}
                        <span style={instructions.specialChar ? {color: 'seagreen'} : null}>1 Special Character</span>
                    </p>
                    <p>
                        {password.length < 12 && <FaTimesCircle className="iconTimes" />}
                        {password.length >= 12 && <BsCheckCircleFill className="iconCheck" />}
                        <span style={password.length >= 12 ? {color: 'seagreen'} : null}>12 Character Long</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PasswordChecker;