import React from 'react';


import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
   const navigate = useNavigate();
   let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);



      let signInError;


      if (loading || gLoading || updating) {
        return <div><Loading></Loading> </div>;
      }

      if (error||gError||updateError) {
        signInError=<p>{error?.message||gError?.message || updateError?.message}</p>
      }

    if (user||gUser) {
        console.log(gUser)
        navigate(from, {replace: true})
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password)
        
        await updateProfile({ displayName: data.name });
    }

    return (
        <div className='grid md:grid-cols-2 md:px-28 mt-5 ' >
        <div>
            <figure className="px-10 pt-10">
                <img src="https://img.freepik.com/free-vector/account-concept-illustration_114360-399.jpg?w=740&t=st=1670674473~exp=1670675073~hmac=b8280fd6e2456bdfa9be5ff1b6b716592cb1c0ba5c0a321d03ea750241fc2df2" alt="Shoes" className="rounded-xl" />
            </figure>
        </div>


        <div className=' content-center items-center md:flex '>
            <div className="card lg:w-96 md:w-96 bg-base-100 shadow-xl  ">
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">SignUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Name</span>

                                </label>

                                <input
                                    type="text"
                                    placeholder="you Name"
                                    class="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "name is Required"
                                        },

                                    })}
                                />
                                <label class="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}


                                </label>
                            </div>


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

                        <input className='btn w-full max-w-xs' type="submit" value="Sign Up" />
                    </form>
                    <p>Already have a account <Link to="/login"> <span className='text-warning'>Login  </span> </Link></p>
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

export default SignUp;