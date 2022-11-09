import React, { useContext } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Rev from '../Rev/Rev';

const CardDetails = () => {
    const { _id, title, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext)


    const handleUserReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const email = user?.email;
        const photoURL = user?.photoURL;
        // const phone = form.phone.value;
        const message = form.message.value;

        const review = {
            name: name,
            serviceName: title,
            email: email,
            message: message,
            photoURL: photoURL,
            serviceid: _id
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error))

    }


    return (
        <div>
            <div className='w-1/2 m-auto'>
                <div className="card card-compact w-90 bg-base-100 shadow-xl">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <figure><img src={img} alt="" /></figure>
                        </PhotoView>
                    </PhotoProvider>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            {
                user?.email ?
                    <>
                        <div className='mt-10 w-3/4 m-auto'>
                            <form onSubmit={handleUserReview}>
                                {/* <h2 className="text-4xl">You are about to order: {}</h2>
                    <h4 className="text-3xl">Price: {price}</h4> */}
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    <input name='name' type="text" placeholder="First Name" defaultValue={user?.displayName} className="input input-ghost input-bordered w-full" />
                                    {/* <input name='lastName' type="text" placeholder="Last Name" className="input input-ghost input-bordered w-full" /> */}
                                    <input name='photoURL' type="text" placeholder="PhotoURL" defaultValue={user?.photoURL} className="input input-ghost input-bordered w-full" required readOnly />
                                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-ghost input-bordered w-full" readOnly />
                                </div>
                                <textarea name='message' className="textarea textarea-bordered w-full h-24 mt-2" placeholder="Your Message" required></textarea>

                                <input className='btn btn-warning' type="submit" value="Place Your Order" />
                            </form>
                        </div>
                    </>
                    :
                    <>
                        <button className='btn btn-warning'>
                            <Link to='/login'>Please Login</Link>
                        </button>
                    </>
            }
            <Rev></Rev>
        </div>
    );
};

export default CardDetails;