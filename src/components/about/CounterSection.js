"use client"
import React from 'react';
import CountUp from "react-countup";
import {FaHandsHelping , FaRegSmileBeam ,FaUsers , FaAward } from "react-icons/fa";

const CounterSection = () => {
    return (
        <>
            <div className='text-center' style={{backgroundImage: `url('https://i.ibb.co/VtVQScb/counter-bg.webp')`}}>
                <div className='container max-w-7xl mx-auto py-24'>
                    <div className='grid grid-cols-4 gap-10'>
                        <div className="card bg-base-100 shadow-md rounded">
                            <figure className="px-10 pt-10">
                                <FaHandsHelping className="text-6xl"></FaHandsHelping>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-4xl mb-2 text-primary font-bold">
                                    <CountUp
                                            start={0}
                                            end={2550}
                                            duration={5}
                                            separator=","
                                            decimals={0}
                                            decimal=","
                                            suffix="+"
                                            enableScrollSpy
                                            scrollSpyDelay={500}
                                        >
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span ref={countUpRef} />

                                                </div>
                                            )}
                                        </CountUp>
                                </h2>
                                <p className="uppercase text-xl font-medium">SUCCESS SMILE</p>                            
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-md rounded">
                            <figure className="px-10 pt-10">
                                <FaRegSmileBeam className="text-6xl"></FaRegSmileBeam>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-4xl mb-2 text-primary font-bold">
                                    <CountUp
                                            start={0}
                                            end={3250}
                                            duration={5}
                                            separator=","
                                            decimals={0}
                                            decimal=","
                                            suffix="+"
                                            enableScrollSpy
                                            scrollSpyDelay={500}
                                        >
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span ref={countUpRef} />

                                                </div>
                                            )}
                                        </CountUp>
                                </h2>
                                <p className="uppercase text-xl font-medium">HAPPY DONORS</p>                            
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-md rounded">
                            <figure className="px-10 pt-10">
                                <FaUsers className="text-6xl"></FaUsers>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-4xl mb-2 text-primary font-bold">
                                    <CountUp
                                            start={0}
                                            end={3600}
                                            duration={5}
                                            separator=","
                                            decimals={0}
                                            decimal=","
                                            suffix="+"
                                            enableScrollSpy
                                            scrollSpyDelay={500}
                                        >
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span ref={countUpRef} />

                                                </div>
                                            )}
                                        </CountUp>
                                </h2>
                                <p className="uppercase text-xl font-medium">HAPPY RECIPIENT</p>                            
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-md rounded">
                            <figure className="px-10 pt-10">
                                <FaAward className="text-6xl"></FaAward>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-4xl mb-2 text-primary font-bold">
                                    <CountUp
                                            start={0}
                                            end={1400}
                                            duration={5}
                                            separator=","
                                            decimals={0}
                                            decimal=","
                                            suffix="+"
                                            enableScrollSpy
                                            scrollSpyDelay={500}
                                        >
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span ref={countUpRef} />

                                                </div>
                                            )}
                                        </CountUp>
                                </h2>
                                <p className="uppercase text-xl font-medium">TOTAL AWARDS</p>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CounterSection;