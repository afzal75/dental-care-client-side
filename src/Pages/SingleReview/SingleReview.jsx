import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SingleReviews from './SingleReviews';

const SingleReview = ({review}) => {
    const {_id, user } = useContext(AuthContext);
    // const { _id } = review;
    const [singleReviews, setSingleReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceid=${user?.serviceid}`)
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
                            <th>Delete</th>
                            <th>User</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Service</th>
                            <th>Message</th>
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
                            // handleDelete={handleDelete}
                            // handleStatusUpdate={handleStatusUpdate}
                            ></SingleReviews>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SingleReview;