import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewTable from './MyReviewTable';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [user?.email])



    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure You want to delete review')
        if(proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = reviews.filter(review => review._id !== id);
                    setReviews(remaining);
                }
            })
        }
    }


    return (
        <div>
            <h2 className="text-5xl">You have {reviews.length} Orders</h2>
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
                            reviews?.map(review => <MyReviewTable
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                // handleStatusUpdate={handleStatusUpdate}
                            ></MyReviewTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;