import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SingleReviews from './SingleReviews';

const SingleReview = () => {
    const {_id, user } = useContext(AuthContext);
    // const { _id } = review;
    const [singleReviews, setSingleReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceid=${user?.serviceid}`)
            .then(res => res.json())
            .then(data => setSingleReviews(data))
    }, [user?.serviceid]);


    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = singleReviews.filter(review => review._id !== id);
                const approving = singleReviews.find(review => review._id === id);
                approving.status = 'Approved'

                const newOrders = [approving, ...remaining];
                setSingleReviews(newOrders);
            }
        })
    }


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
                            handleStatusUpdate={handleStatusUpdate}
                            ></SingleReviews>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SingleReview;