import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const SingleReviews = ({ review, handleStatusUpdate }) => {

    const { serviceName, name, message, email, } = review;
    // const [reviewService, setReviewService] = useState({});
    const { user } = useContext(AuthContext);



    return (
        <>
            {

                <>
                    <tr>
                        <th>
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
                    </tr>
                </>
            }
        </>
    );
};
export default SingleReviews;