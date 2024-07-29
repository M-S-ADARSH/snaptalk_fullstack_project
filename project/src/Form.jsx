import React, { useState } from 'react';
import bgImg from './assets/img1.jpg';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Form.css';

export default function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate(); // Initialize navigate

    const onSubmit = data => {
        console.log(data);
        // Save user details to local storage
        localStorage.setItem('userDetails', JSON.stringify(data));
        navigate('/login'); // Navigate to the home page after successful form submission
    };

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='fbody'>
            <section>
                <div className="register">
                    <div className="col-1">
                        <h2>Sign In</h2>
                        <span>Register and enjoy the service</span>

                        <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                            <input 
                                type="text" 
                                {...register("username", { 
                                    required: "Username is required", 
                                    pattern: {
                                        value: /^[a-zA-Z0-9]+$/,
                                        message: "Username cannot contain special characters or spaces"
                                    }
                                })} 
                                placeholder='username' 
                            />
                            {errors.username && <p>{errors.username.message}</p>}

                            <input 
                                type={showPassword ? "text" : "password"} 
                                {...register("password", { 
                                    required: "Password is required", 
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }
                                })} 
                                placeholder='password' 
                            />
                            {errors.password && <p>{errors.password.message}</p>}

                            <input 
                                type={showPassword ? "text" : "password"} 
                                {...register("confirmpwd", { 
                                    required: "Please confirm your password", 
                                    validate: (value) => value === watch('password') || "Passwords do not match"
                                })} 
                                placeholder='confirm password' 
                            />
                            {errors.confirmpwd && <p>{errors.confirmpwd.message}</p>}

                            <input 
                                type="text" 
                                {...register("mobile", { 
                                    required: "Mobile number is required", 
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Mobile number must be 10 digits"
                                    }
                                })} 
                                placeholder='mobile number' 
                            />
                            {errors.mobile && <p>{errors.mobile.message}</p>}

                            <div className="show-password">
                                <input 
                                    type="checkbox" 
                                    id="showPassword" 
                                    checked={showPassword} 
                                    onChange={() => setShowPassword(!showPassword)} 
                                />
                                <label htmlFor="showPassword">Show Passwords</label>
                            </div>

                            <button className='btn'>Sign In</button>
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
