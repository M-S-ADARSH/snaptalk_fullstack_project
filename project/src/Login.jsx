import React from 'react';
import bgImg from './assets/img1.jpg';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate(); // Initialize navigate

    const onSubmit = data => {
        console.log(data);
        const savedUserDetails = JSON.parse(localStorage.getItem('userDetails'));

        if (
            savedUserDetails &&
            data.username === savedUserDetails.username &&
            data.password === savedUserDetails.password
        ) {
            navigate('/'); // Navigate to the home page after successful login
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className='lbody'>
            <section>
                <div className="register">
                    <div className="col-1">
                        <h2>Login</h2>
                        <span>Login to enjoy the service</span>

                        <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                            <input 
                                type="text" 
                                {...register("username", { 
                                    required: true, 
                                    pattern: /^[a-zA-Z0-9]+$/,
                                    validate: value => !/\s/.test(value)
                                })} 
                                placeholder='username' 
                            />
                            {errors.username?.type === 'required' && <p>Username is required</p>}
                            {errors.username?.type === 'pattern' && <p>Username cannot contain special characters</p>}
                            {errors.username?.type === 'validate' && <p>Username cannot contain spaces</p>}
                            
                            <input 
                                type="password" 
                                {...register("password", { 
                                    required: true, 
                                    minLength: 6 
                                })} 
                                placeholder='password' 
                            />
                            {errors.password?.type === 'required' && <p>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p>Password must be at least 6 characters</p>}
                            
                            <button className='btn'>Login</button>
                        </form>
                    </div>
                    <div className="col-2">
                        <img src={bgImg} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
}
