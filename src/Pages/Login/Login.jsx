
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import images from '../../assets/images/login.jpg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Login = () => {
    const { login, providerLogin, githubProviderLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigte = useNavigate();


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigte(from, { replace: true });

            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    };

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigte('/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGithubLogin = () => {
        githubProviderLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigte('/')
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="hero my-20 w-full">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='' src={images} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm py-20 shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <p className='text-red-600'>
                            {error}
                        </p>
                        <p className='text-center'>Have an account? <Link className='text-blue-600 font-bold' to="/signup">Sign Up</Link></p>
                        <br />
                        <br />
                    </form>
                    <div className='w-full ml-24'>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent mb-4">CONTINUE WITH GOOGLE</button>
                        <button onClick={handleGithubLogin} className="btn btn-outline btn-accent">CONTINUE WITH GITHUB</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;