import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReviewTable = ({ review, handleDelete, handleStatusUpdate }) => {

    const { _id, serviceName, name, message, email, status } = review;
    // const [reviewService, setReviewService] = useState({});
    const { user } = useContext(AuthContext);



    return (
        <>
            {

                review.length === 0 ?
                    <>
                        <p className='text-4xl'>No Review Available</p>
                    </>
                    :
                    <>
                        <tr>
                            <th>
                                <label>
                                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>Delete</button>
                                </label>
                            </th>
                            <td>
                                <img style={{ width: '30px', borderRadius: '50px' }} src={user?.photoURL} alt="" />
                            </td>
                            <td>
                                {name}
                            </td>
                            <td>
                                {email}
                            </td>
                            <td>
                                {serviceName}
                            </td>
                            <td>
                                {message}
                            </td>
                            <td>
                            <button onClick={() => handleStatusUpdate(_id)}>
                                {status ? status : 'PENDING'}
                            </button>
                        </td>
                        </tr>
                    </>
            }
        </>
    );
};

export default MyReviewTable;