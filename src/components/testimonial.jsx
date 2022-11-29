import React from 'react';

const Testimonial = () => {
    return (
        <div className="grid grid-cols-1">
            <div className="flex justify-center py-[10rem]">
                <h1 className="uppercase text-2xl font-fraunces text-dark-grayish-blue tracking-[0.5rem] font-bold text">client testimonisls</h1>
            </div>
            <div className="container mx-auto flex justify-evenly mb-[10rem]">
                <div>
                    <div className="flex flex-col justify-center items-center text-center gap-[4rem]">
                        <img className="rounded-[50%]" src="/src/assets/image-emily.jpg" alt="avatar" />
                        <p className="font-barlow text-[18px] text-very-dark-grayish-blue leading-7">
                            We put our trust in Sunnyside and they
                            <br />
                            delivered, making sure our needs were met
                            <br />
                            and dedlines were always hit.
                        </p>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-[1.1rem] font-fraunces">Emily R.</h1>
                            <p className="text-[0.9rem] text-dark-grayish-blue font-barlow">Marketing Directors</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center gap-[4rem]">
                    <img className="rounded-[50%]" src="/src/assets/image-thomas.jpg" alt="avatar" />
                    <p className="font-barlow text-[18px] text-very-dark-grayish-blue leading-7">
                        Sunnyside's enthusiasm coupled with their
                        <br />
                        keen interest in our brand's success made it
                        <br />a satisfying and enjoyable experience.
                    </p>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[1.1rem] font-fraunces">Thomas S.</h1>
                        <p className="text-[0.9rem] text-dark-grayish-blue font-barlow">Chief Operating Officer</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center gap-[4rem]">
                    <img className="rounded-[50%]" src="/src/assets/image-jennie.jpg" alt="avatar" />
                    <p className="font-barlow text-[18px] text-very-dark-grayish-blue leading-7">
                        Incredible end result! Our sales increased
                        <br />
                        over 400% when we worked with Sunnyside.
                        <br />
                        Highly recommended!
                    </p>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[1.1rem] font-fraunces">Jennie F.</h1>
                        <p className="text-[0.9rem] text-dark-grayish-blue font-barlow">Business Owner</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
