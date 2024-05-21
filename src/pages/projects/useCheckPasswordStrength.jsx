import React, { useState, useEffect } from 'react';

const useCheckPasswordStrength = (password) => {
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [instructions, setInstructions] = useState({
        uppercase: false,
        lowercase: false,
        digit: false,
        specialChar: false
    });

    useEffect(() => {
        const checkInstructions = () => {
            const uppercase = /[A-Z]/.test(password);
            const lowercase = /[a-z]/.test(password);
            const digit = /\d/.test(password);
            const specialChar = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password);
            
            setInstructions({
                uppercase,
                lowercase,
                digit,
                specialChar
            });
        };

        const checkPasswordStrength = () => {
            const len = password.length;

            // at least 1 lowercase, 1 uppercase, 1 digit, 1 special character [6]
            const strong6 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]).{6}$/;
            // at least 1 lowercase, 1 uppercase, 1 digit, 1 special character [12]
            const strong12 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]).{12}$/;
            // at least 1 lowercase, 1 uppercase, 1 digit, 1 special character [24]
            const strong24 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]).{24}$/;

            if (strong24.test(password)) {
                setPasswordStrength(6);
            } else if (strong12.test(password)) {
                setPasswordStrength(5);
            } else if (strong6.test(password)) {
                setPasswordStrength(4);
            } else if (len >= 6) {
                setPasswordStrength(3);
            } else if (len > 3 && len < 6) {
                setPasswordStrength(2);
            } else if (len > 0 && len < 4) {
                setPasswordStrength(1);
            } else {
                setPasswordStrength(0);
            }
        };

        checkInstructions();
        checkPasswordStrength();
    }, [password]);

    return { passwordStrength, instructions };
};

export default useCheckPasswordStrength;