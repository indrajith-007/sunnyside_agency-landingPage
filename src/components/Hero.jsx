import React from 'react';
import '../index.css';

const Hero = () => (
    <header className="flex flex-col md:bg-hero bg-heroMb min-h-screen bg-center bg-cover mx-auto gap-10">
        <div className="p-[4rem]">
            <div className="flex items-center justify-between">
                <a href="">
                    <img className="w-[10rem]" src="/src/assets/logo.svg" alt="" />
                </a>
                <div className="space-x-[5rem] font-barlow text-white hidden md:flex items-center">
                    <a href="/">About</a>
                    <a href="/">Services</a>
                    <a href="/">Projects</a>
                    <a className="items-center" href="/">
                        <button className="border-2 p-3 px-6 rounded-full bg-white  hover:bg-primary-blue  hover:text-white text-black font-fraunces">Contact</button>
                    </a>
                </div>
            </div>
        </div>
        <div className=" flex-col flex gap-[10rem] md:gap-[6rem]">
            <div>
                <h1 className="hidden md:flex  justify-center md:text-7xl  font-fraunces text-white uppercase tracking-wide">We Are Creatives</h1>
                <h1 className="px-5 md:hidden flex justify-center text-center font-fraunces text-white uppercase tracking-wide text-7xl">
                    We Are
                    <br />
                    Creatives
                </h1>
            </div>
            <div className="flex justify-center">
                <img className="" src="/src/assets/icon-arrow-down.svg" alt="" />
            </div>
        </div>
    </header>
);

export default Hero;

{
    /* <div className="p-12 flex items-center justify-between">
            <a href="/">
                <img className="" src="/src/assets/logo.svg" alt="logo" />
            </a>
            <div className="space-x-14 font-barlow text-white text-lg hidden sm:flex items-center">
                <a href="/">About</a>
                <a href="/">Services</a>
                <a href="/">Projects</a>
                <a className="border-2 p-3 px-6 rounded-full bg-white hover:bg-primary-blue" href="/">
                    <button className="text-black font-fraunces">Contact</button>
                </a>
            </div>
        </div>
        <div className="flex flex-col items-center gap-[6rem]">
            <h1 className="font-fraunces text-white text-6xl uppercase">We Are Creatives</h1>
        </div> */
}
