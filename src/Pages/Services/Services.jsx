import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Service from './Service';

const Services = () => {
    const services = useLoaderData();
    useTitle('Services');

    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className="text-4xl mb-4 font-semibold">Our Service</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;