import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
// import { MdOutlineDelete } from "react-icons/fa";

const MyReviewTable = ({ review }) => {

    const { _id, serviceName, name,  message, email } = review;
    // const [reviewService, setReviewService] = useState({});
    const { user } = useContext(AuthContext);

    return (
        <tr>
            <th>
                <label>
                    <button className='btn btn-ghost'>Delete</button>
                </label>
            </th>
            <td>
                <img style={{width: '30px', borderRadius: '50px'}} src={user?.photoURL} alt="" />
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
    );
};

export default MyReviewTable;