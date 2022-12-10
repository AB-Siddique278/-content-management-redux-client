import React from 'react';

import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      let signInError;


      if (loading || gLoading) {
        return <div><Loading></Loading> </div>;
      }

      if (error||gError) {
        signInError=<p>{error?.message||gError?.message}</p>
      }

    if (user||gUser) {
        console.log(gUser)
        navigate(from, {replace: true})
    }

    const onSubmit = (data) => {
        console.log(data)
        
        signInWithEmailAndPassword(data.email, data.password)
    
    };



    return (
        <div className='grid md:grid-cols-2 md:px-28 mt-5 ' >
            <div>
                <figure className="px-10 pt-10">
                    <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1670674440~exp=1670675040~hmac=52740c4c17429ef34ac985a64d9f5b9c1b20cab18d33b072c4bd104522f02606" alt="Shoes" className="rounded-xl" />
                </figure>
            </div>


            <div className=' content-center items-center md:flex '>
                <div className="card lg:w-96 md:w-96 bg-base-100 shadow-xl  ">
                    <div className="card-body">
                        <h2 className="text-center text-xl font-bold">Login</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>

                                </label>
                                <input type="email"
                                    placeholder="Enter your email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "Email is Required"
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}



                                />

                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                </label>
                            </div>

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Password</span>

                                </label>

                                <input
                                    type="password"
                                    placeholder="your Password"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is Required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label class="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}


                                </label>
                            </div>



                                    <div className=' text-red-500 text-sm mb-3'>
                                    {signInError}
                                    </div>

                            <input className='btn w-full max-w-xs' type="submit" value="Login" />
                        </form>
                        <p>Tech Blogs <Link to="/signup"> <span className='text-warning'>Create a new account </span> </Link></p>
                        <div className="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline">Continue with google</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;