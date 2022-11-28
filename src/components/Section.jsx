import React from 'react';
import '../index.css';

const Section = () => (
    <div className="grid grid-cols-2">
        {/* First section */}
        <div className="bg-[#FFFBF8] flex flex-col items-start">
            <div className="flex flex-col p-8 h-full mx-auto items-start justify-start pt-[11rem] pl-[11rem] gap-9">
                <h1 className="text-very-dark-desatured-blue  text-4xl font-extrabold font-fraunces container mx-auto">
                    Transform your
                    <br />
                    brand
                </h1>
                <h1 className="font-barlow text-[19px] text-dark-grayish-blue">
                    We are a full-service creative agency sprecializing in
                    <br />
                    helping brands grow fast. Engage your clients through
                    <br />
                    compelling visuals that do most of the marketing for you.
                </h1>
                <div className="flex flex-col">
                    <a className="z-50 bg-transparent" href="/">
                        <h1 className="learn">learn more</h1>
                    </a>
                </div>
            </div>
        </div>
        {/* Second Section */}
        <div>
            <img className="h-auto min-w-full" src="/src/assets/desktop/image-transform.jpg" alt="" />
        </div>
        {/* Third Section */}
        <div>
            <img className="h-auto min-w-full" src="/src/assets/desktop/image-stand-out.jpg" alt="" />
        </div>
        {/* Fourth Section */}
        <div className="bg-[#FFFBF8] flex flex-col items-start">
            <div className="flex flex-col p-8 h-full mx-auto items-start justify-start pt-[11rem] pl-[11rem] gap-9">
                <h1 className="text-very-dark-desatured-blue  text-4xl font-extrabold font-fraunces container mx-auto">
                    Stand out to the right
                    <br />
                    audience
                </h1>
                <h1 className="font-barlow text-[19px] text-dark-grayish-blue">
                    Using a collaborative formula of desighners, researchers,
                    <br />
                    photographers, videographers, and copywriters, we'll
                    <br />
                    build and extent your brand in digital places.
                </h1>
                <div className="flex flex-col">
                    <a className="z-50 bg-transparent" href="/">
                        <h1 className="learn2">learn more</h1>
                    </a>
                </div>
            </div>
        </div>
        <div className="relative text-center">
            <img className="h-auto min-w-full" src="/src/assets/desktop/image-graphic-design.jpg" alt="" />
            <div className="tran absolute top-[70%] left-[50%] flex flex-col gap-8">
                <h1 className="font-fraunces text-4xl text-dark-desatured-cyan">Graphic Design</h1>
                <p className="font-barlow text-[19px] text-dark-moderate-cyan">
                    Great design makes you memorable.We deliver
                    <br />
                    artwork that underscores youy brand message
                    <br />
                    and captures potential clients' attention.
                </p>
            </div>
        </div>
        <div className="relative text-center">
            <img className="h-auto min-w-full" src="/src/assets/desktop/image-photography.jpg" alt="" />
            <div className="tran absolute top-[70%] left-[50%] flex flex-col gap-8">
                <h1 className="font-fraunces text-4xl text-dark-blue">Photography</h1>
                <p className="font-barlow text-[19px] text-dark-desatured-cyan">
                    Increase your credibility by getting the most
                    <br />
                    stunning, high-quality photos that improve your
                    <br />
                    business image
                </p>
            </div>
        </div>
    </div>
);

export default Section;
