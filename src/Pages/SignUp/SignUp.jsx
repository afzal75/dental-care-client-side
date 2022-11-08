import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Form } from 'react-router-dom';
import images from '../../assets/images/signup.jpg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();
                console.log(user);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    return (
        <div className="hero my-20 w-full">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='' src={images} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm py-20 shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-blue-600 font-bold' to="/login">Login</Link></p>
                    <p className='bg-red-600'>
                        {error}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;