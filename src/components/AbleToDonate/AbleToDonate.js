"use client"
import React, { useContext, useState } from 'react';
import DonatRequest from '../Modal/DonatRequest';
import { AuthContext } from '../provider/AuthProvider';

const AbleToDonate = () => {
  const { user } = useContext(AuthContext);
  const [heightInInches, setHeightInInches] = useState(0);
  const [weightInKgs, setWeightInKgs] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculateBMI = () => {
    const bmiValue = weightInKgs / ((heightInInches / 100) * (heightInInches / 100));
    setBmi(bmiValue);
  };

  return (
    <>
      {user && <><div className="">
        <div className='text-center md:px-0 px-5 py-10'>
          <h2 className='lg:text-5xl md:text-4xl text-3xl font-bold'>Donation Calculator</h2>
          <p className='lg:text-xl md:text-lg text-base font-normal mt-5'>Check your health and donate with us</p>
        </div>
        <div className='w-full space-y-4'>
          <div className='mx-auto md:w-96 px-2'>
            <label className='font-bold '>Height (inch):</label>
            <input
              className='input-md border'
              type="number"
              value={heightInInches}
              onChange={(e) => setHeightInInches(e.target.value)}
            />
          </div>
          <div className='mx-auto md:w-96 px-2'>
            <label className='font-bold '>Weight (kg):</label>
            <input
              className='input-md border'
              type="number"
              value={weightInKgs}
              onChange={(e) => setWeightInKgs(e.target.value)}
            />
          </div>
        </div>
        <button className='block mx-auto py-2 px-3 bg-red-600 text-white font-bold rounded mt-5 ' onClick={calculateBMI}>Calculate</button>
        {bmi > 0 && (
          <div>
            <p className='text-center text-green-600'>Your BMI is: {bmi.toFixed(2)}. You can donate blood <button className='block mx-auto py-2 px-3 text-white bg-green-600 rounded mt-5 ' onClick={() => document.getElementById("my_modal_5").showModal()}>Donate blood</button> </p>
            {bmi < 18.5 && (
              <p className='text-center text-red-600'>
                You cannot donate blood. Your BMI is less than 18.5.
              </p>
            )}
          </div>
        )}
        <DonatRequest></DonatRequest>
      </div></>}
    </>
  );
};

export default AbleToDonate;