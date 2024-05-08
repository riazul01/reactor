import React from 'react';

const Footer = () => {
    return (
        <footer className="mx-auto px-[0.4rem] py-[2rem] max-w-[1300px] flex items-center justify-between">
            <p className="text-[#333] text-[0.9rem]" style={{textShadow: '0.1rem 0.1rem 0.2rem #000'}}>Created by <a href="https://github.com/riazul01" target="_blank" rel="noreferrer" className="text-[#adff2f4d]">riazul01</a> | &copy; 2024 all rights reserved</p>
            <div class="flex items-center justify-center gap-[0.6rem]">
                <a href="https://github.com/riazul01" target="_blank" rel="noreferrer" className="text-[#333] text-[0.9rem]" style={{textShadow: '0.1rem 0.1rem 0.2rem #000'}}>GitHub</a>
                <span className="h-[0.2rem] w-[0.2rem] rounded-full bg-[#222]"></span>
                <a href="https://www.linkedin.com/in/md-riazul-islam-86653321b/" target="_blank" rel="noreferrer" className="text-[#333] text-[0.9rem]" style={{textShadow: '0.1rem 0.1rem 0.2rem #000'}}>LinkedIn</a>
                <span className="h-[0.2rem] w-[0.2rem] rounded-full bg-[#222]"></span>
                <a href="https://riazul.vercel.app/" target="_blank" rel="noreferrer" className="text-[#333] text-[0.9rem]" style={{textShadow: '0.1rem 0.1rem 0.2rem #000'}}>Portfolio</a>
            </div>
        </footer>
    );
}

export default Footer;