import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const { name, img, price, description } = useLoaderData();
    return (
        <div className='w-1/2 m-auto'>
            <div className="card card-compact w-90 bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={img}>
                    <figure><img src={img} alt="" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;