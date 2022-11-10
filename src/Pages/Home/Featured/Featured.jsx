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
                    <h1 className="my-2 text-center text-3xl font-bold">FEATURED</h1>
                    <p className="py-6">The modern movement of evidence-based dentistry calls for the use of high-quality scientific research and evidence to guide decision-making such as in manual tooth conservation, use of fluoride water treatment and fluoride toothpaste, dealing with oral diseases such as tooth decay and periodontitis, as well as systematic diseases such as osteoporosis, diabetes, celiac disease, cancer, HIV/AIDS which could also affect the oral cavity. Other practices relevant to evidence-based dentistry include radiology of the mouth to inspect teeth deformity or oral malaises, haematology (study of blood) to avoid bleeding complications during dental surgery, cardiology (due to various severe complications arising from dental surgery with patients with heart disease), etc.</p>
                    {/* <p className='py-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p> */}
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;