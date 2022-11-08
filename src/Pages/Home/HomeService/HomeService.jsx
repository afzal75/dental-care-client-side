import React from 'react';

const HomeService = ({ service }) => {
    const {name, img, price, description} = service;
    return (
        <div>
            <div className="card card-compact w-90 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <p>{description}</p>
                {/* <div className="card-actions justify-end">
                    <Link to={`/cheackout/${_id}`}>
                        <button className="btn btn-primary">Checkout</button>
                    </Link>
                </div> */}
            </div>
        </div>
        </div>
    );
};

export default HomeService;