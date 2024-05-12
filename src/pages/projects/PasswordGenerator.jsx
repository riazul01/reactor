import React, { useEffect, useState } from 'react';

const PasswordGenerator = () => {
    const [digit, setDigit] = useState(12);
    const [password, setPassword] = useState('');

    useEffect(() => {
        handleGeneratePassword();
    }, []);

    const handleGeneratePassword = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
        let newPassword = '';
        for (let i = 0; i < digit; i++) {
        newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setPassword(newPassword);
    }

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(password)
            .then(() => alert('Password copied to clipboard!'))
            .catch((error) => console.error('Failed to copy:', error));
    };

    return (
        <div className="w-full h-[100vh] bg-slate-600" style={{ fontFamily: '"Oxygen", sans-serif'}}>
            <div className="mx-auto w-full max-w-[560px]">
                <div className="pt-[2rem]">
                    <label htmlFor="password-size" className="text-[1.1rem] font-[600] underline">Password size:</label>
                    <select value={digit} onChange={(e) => setDigit(parseInt(e.target.value))} name="digit" id="password-size" className="ms-[0.8rem] px-[0.4rem] py-[0.2rem] text-[1rem] w-[80px] bg-gray-400 outline-none rounded-md">
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                    </select>
                </div>
                <div className="mt-[1rem] flex items-center justify-start gap-[0.8rem]">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" className="px-[0.4rem] py-[0.2rem] text-[1rem] w-[240px] bg-gray-400 rounded-md" placeholder="Your password" disabled={true}/>
                    <button onClick={handleGeneratePassword} className="px-[0.4rem] py-[0.2rem] bg-slate-700 rounded-md">Generate Password</button>
                    <button onClick={handleCopyToClipboard} className="px-[0.4rem] py-[0.2rem] bg-slate-500 rounded-md">Copy Password</button>
                </div>
            </div>
        </div>
    );
}

export default PasswordGenerator;