import React, { useEffect, useState } from 'react';
import { MdOutlineContentCopy } from "react-icons/md";

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
        <div className="w-full h-[100vh] flex items-center justify-center bg-[#000]" style={{ fontFamily: '"Oxygen", sans-serif'}}>
            <div className="mx-auto h-auto w-full max-w-[560px] border-[3px] border-green-900 rounded-xl overflow-hidden">
                <h1 className="px-[1rem] pt-[0.6rem] pb-[1.5rem] text-[1.2rem] text-[#fff] uppercase bg-green-900">Random Password Generator</h1>
                <div className="-mt-3 p-[1rem] bg-[#000] rounded-t-lg rounded-b-xl">
                    <div className="flex items-center justify-between gap-[0.6rem]">
                        <div className="flex items-center w-[130px] h-[42px] outline-none rounded-lg overflow-hidden">
                            <label htmlFor="password-size" className="px-[0.8rem] flex items-center justify-center h-full w-[45%] text-[1.1rem] text-[#fff] font-[500] bg-[#111]">Size</label>
                            <select id="password-size" value={digit} onChange={(e) => setDigit(parseInt(e.target.value))} name="digit" className="px-[0.6rem] h-full w-[55%] text-[#fff] text-[1.1rem] bg-[#000] border-[2px] border-[#111] rounded-r-lg outline-none">
                                <option value="6">6</option>
                                <option value="12">12</option>
                                <option value="24">24</option>
                            </select>
                        </div>
                        <div className="h-[42px] w-[calc(100%-130px)] flex items-center justify-between bg-[#111] rounded-md overflow-hidden">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" className="px-[0.8rem] h-full w-full text-[1rem] text-[#fff] bg-transparent" placeholder="Your password" disabled={true}/>
                            <button onClick={handleCopyToClipboard} className="h-full w-[3rem] flex items-center justify-center bg-transparent border-l-[1px] border-[#222]" title="copy"><MdOutlineContentCopy className="text-[#fff] text-[1.4rem]"/></button>
                        </div>
                    </div>
                    
                    <div className="mt-[1rem] flex items-center justify-start gap-[0.6rem]">
                        <button onClick={handleGeneratePassword} className="px-[0.6rem] py-[0.34rem] text-[1.1rem] text-[#fff] bg-green-900 rounded-md">Generate</button>
                        <button onClick={handleGeneratePassword} className="px-[0.6rem] py-[0.34rem] text-[1.1rem] text-[#fff] bg-red-900 rounded-md">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordGenerator;