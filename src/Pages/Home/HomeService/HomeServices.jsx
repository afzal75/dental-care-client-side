import React, { useState } from 'react';
import { useEffect } from 'react';
import HomeService from './HomeService';

const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <HomeService
                        key={service._id}
                        service={service}
                    ></HomeService>)
                }
            </div>
        </div>
    );
};

export default HomeServices;