import React from 'react';
import { Link } from 'react-router-dom';
// import AddService from '../AddService/AddService';

const Service = ({ service }) => {
    const { _id, title, img, price, description } = service;
    return (
        <div>
            <div className="card card-compact w-90 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    {
                        description.length > 100 ?
                            <p>{description.slice(0, 100) + '...'}</p>
                            :
                            <p>{description}</p>
                    }

                    <div className="card-actions justify-center">
                        <Link to={`/service/${_id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <AddService></AddService> */}
        </div>
    );
};

export default Service;