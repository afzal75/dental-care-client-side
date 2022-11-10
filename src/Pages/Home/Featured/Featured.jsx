import React from 'react';
import clinic from '../../../assets/images/clinic.jpg'
import paisent from '../../../assets/images/paisent.jpg'

const Featured = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={clinic} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={paisent} alt="" className="absolute w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className="text-2xl text-orange-700 font-bold">About Us</p>
                    <h1 className="my-5 text-4xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='py-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;