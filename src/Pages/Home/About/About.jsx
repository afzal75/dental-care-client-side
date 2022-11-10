import React from 'react';
import dentals from '../../../assets/images/denatls.jpg'
import men from '../../../assets/images/men.jpg'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2'>
                    <h1 className="my-5 text-3xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">Dentistry, also known as dental medicine and oral medicine, is the branch of medicine focused on the teeth, gums, and mouth. It consists of the study, diagnosis, prevention, management, and treatment of diseases, disorders, and conditions of the mouth, most commonly focused on dentition (the development and arrangement of teeth) as well as the oral mucosa.[2] Dentistry may also encompass other aspects of the craniofacial complex including the temporomandibular joint. </p>
                    <p className='py-6'>The history of dentistry is almost as ancient as the history of humanity and civilization with the earliest evidence dating from 7000 BC to 5500 BC.[3] Dentistry is thought to have been the first specialization in medicine which have gone on to develop its own accredited </p>
                </div>
                <div className='relative w-1/2'>
                    <img src={dentals} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={men} alt="" className="absolute w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
};

export default About;