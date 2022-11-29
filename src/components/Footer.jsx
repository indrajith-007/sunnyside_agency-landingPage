import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#90D4C5] flex flex-col justify-center items-center py-[4rem] gap-9">
            <div>
                <img className="w-[9rem]" src="/src/assets/green-logo.svg" alt="" />
            </div>
            <div className="font-barlow flex space-x-[4rem] text-[#438A7A] text-[1.2rem]">
                <a href="/">About</a>
                <a href="/">Services</a>
                <a href="/">Projects</a>
            </div>
            <div className="flex space-x-8 pt-10">
                <a href="/">
                    <img src="/src/assets/icon-facebook.svg" alt="facebook" />
                </a>
                <a href="/">
                    <img src="/src/assets/icon-instagram.svg" alt="facebook" />
                </a>
                <a href="/">
                    <img src="/src/assets/icon-twitter.svg" alt="facebook" />
                </a>
                <a href="/">
                    <img src="/src/assets/icon-pinterest.svg" alt="facebook" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
