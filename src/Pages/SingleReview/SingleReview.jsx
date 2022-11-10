import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SingleReviews from './SingleReviews';

const SingleReview = () => {
    const { user } = useContext(AuthContext);
    // const { _id } = review;
    const [singleReviews, setSingleReviews] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-11-server-side-tawny.vercel.app/reviews?serviceid=${user?.serviceid}`)
            .then(res => res.json())
            .then(data => setSingleReviews(data))
    }, [user?.serviceid]);



    return (
        <div>
            <h2 className="text-5xl">You have {singleReviews.length} reviews</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Review</th>
                            <th>Update</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            singleReviews?.map(review => <SingleReviews
                                key={review._id}
                                review={review}
                            ></SingleReviews>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SingleReview;