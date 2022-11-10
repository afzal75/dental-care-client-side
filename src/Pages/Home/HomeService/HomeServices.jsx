import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeService from './HomeService';

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-side-tawny.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className="text-4xl mt-5 font-semibold">Our Service</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <HomeService
                        key={service._id}
                        service={service}
                    ></HomeService>)
                }
                <div className="card-actions justify-center align-middle">
                    <Link to='/services'>
                        <button className="btn btn-primary">See All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;