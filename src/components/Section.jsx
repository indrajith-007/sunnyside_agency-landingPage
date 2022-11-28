import React from 'react';

const Section = () => (
    <div className="grid grid-cols-2">
        <div className="bg-[#FFFBF8] flex flex-col items-start ">
            <div className="flex flex-col p-8 h-full mx-auto items-start justify-start pt-[15rem] pl-[11rem] gap-9">
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
            </div>
        </div>
        <div>
            <img className="h-auto min-w-full" src="/src/assets/desktop/image-transform.jpg" alt="" />
        </div>
        <div>3</div>
        <div>4</div>
    </div>
);

export default Section;
