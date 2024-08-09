// // import React from 'react';
// // import bgImg from './assets/img1.jpg';
// // import { useForm } from 'react-hook-form';
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate
// // import './Login.css';

// // export default function Login() {
// //     const { register, handleSubmit, formState: { errors } } = useForm();
// //     const navigate = useNavigate(); // Initialize navigate

// //     const onSubmit = data => {
// //         console.log(data);
// //         const savedUserDetails = JSON.parse(localStorage.getItem('userDetails'));

// //         if (
// //             savedUserDetails &&
// //             data.username === savedUserDetails.username &&
// //             data.password === savedUserDetails.password
// //         ) {
// //             navigate('/'); // Navigate to the home page after successful login
// //         } else {
// //             alert('Invalid username or password');
// //         }
// //     };

// //     return (
// //         <div className='lbody'>
// //             <section>
// //                 <div className="register">
// //                     <div className="col-1">
// //                         <h2>Login</h2>
// //                         <span>Login to enjoy the service</span>

// //                         <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
// //                             <input 
// //                                 type="text" 
// //                                 {...register("username", { 
// //                                     required: true, 
// //                                     pattern: /^[a-zA-Z0-9]+$/,
// //                                     validate: value => !/\s/.test(value)
// //                                 })} 
// //                                 placeholder='username' 
// //                             />
// //                             {errors.username?.type === 'required' && <p>Username is required</p>}
// //                             {errors.username?.type === 'pattern' && <p>Username cannot contain special characters</p>}
// //                             {errors.username?.type === 'validate' && <p>Username cannot contain spaces</p>}
                            
// //                             <input 
// //                                 type="password" 
// //                                 {...register("password", { 
// //                                     required: true, 
// //                                     minLength: 6 
// //                                 })} 
// //                                 placeholder='password' 
// //                             />
// //                             {errors.password?.type === 'required' && <p>Password is required</p>}
// //                             {errors.password?.type === 'minLength' && <p>Password must be at least 6 characters</p>}
                            
// //                             <button className='btn'>Login</button>
// //                         </form>
// //                     </div>
// //                     <div className="col-2">
// //                         <img src={bgImg} alt="" />
// //                     </div>
// //                 </div>
// //             </section>
// //         </div>
// //     );
// // }

// import React from 'react';
// import bgImg from './assets/img1.jpg';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { login } from './redux/slices/authSlices';
// import './Login.css';
// import axios from "axios";

// export default function Login() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const onSubmit = async data => {
//     console.log(data);
//     const savedUserDetails = JSON.parse(localStorage.getItem('userDetails'));

//     if (data.email === 'admin@example.com' && data.password === 'admin123') {
//       dispatch(login({ email: data.email, username: 'admin' }));
//       navigate('/admin');
//     } else if (
//       savedUserDetails &&
//       data.email === savedUserDetails.email &&
//       data.password === savedUserDetails.password
//     ) {
//       dispatch(login({ email: data.email, username: savedUserDetails.username }));
//       navigate('/');
//     } else {
//       alert('Invalid email or password');
//     }
//     try {
//       const response = await axios.post(
//         "http://localhost:7777/api/auth/login",
//         formData
//       );
//       // try {
//       //   const response = await axios.post(
//       //     "http://localhost:8080/api/auth/authenticate",
//       //     formData
//       //   );
//       console.log(response.data);
//       const { accessToken, role } = response.data;
//       localStorage.setItem("token", accessToken);
//       localStorage.setItem("role", role);
//       // sessionStorage.setItem("token", token);
//       // sessionStorage.setItem("role", role);

//       console.log("Token:", localStorage.getItem("token"));
//       alert("Login Success.!");
//       if (role === "ADMIN") {
//         navigate("/admin");
//       } else {
//         navigate("/users");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Invalid Credentials.!");
//     }

//   };

//   const handleRegisterRedirect = () => {
//     navigate('/form');
//   };

//   return (
//     <div className='lbody'>
//       <section>
//         <div className="register">
//           <div className="col-1">
//             <h2>Login</h2>
//             <span>Login to enjoy the service</span>

//             <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
//               <input 
//                 type="email" 
//                 {...register("email", { 
//                   required: "Email is required", 
//                   pattern: {
//                       value: /^\S+@\S+\.\S+$/,
//                       message: "Enter a valid email address"
//                   }
//                 })} 
//                 placeholder='email' 
//               />
//               {errors.email && <p>{errors.email.message}</p>}
              
//               <input 
//                 type="password" 
//                 {...register("password", { 
//                   required: "Password is required", 
//                   minLength: {
//                     value: 6,
//                     message: "Password must be at least 6 characters"
//                   }
//                 })} 
//                 placeholder='password' 
//               />
//               {errors.password && <p>{errors.password.message}</p>}
              
//               <button className='btn'>Login</button>
//             </form>
//             <p>Don't have an account? <button className='btn' onClick={handleRegisterRedirect}>Register</button></p>
//           </div>
//           <div className="col-2">
//             <img src={bgImg} alt="" />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// // import React from 'react';
// // import bgImg from './assets/img1.jpg';
// // import { useForm } from 'react-hook-form';
// // import { useNavigate } from 'react-router-dom';
// // import { useDispatch } from 'react-redux';
// // import { setUser } from './redux/actions/userActions';
// // import './Login.css';

// // function Login() {
// //   const { register, handleSubmit, formState: { errors } } = useForm();
// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();

// //   const onSubmit = data => {
// //     console.log(data);
// //     const savedUserDetails = JSON.parse(localStorage.getItem('userDetails'));

// //     if (
// //       savedUserDetails &&
// //       data.username === savedUserDetails.username &&
// //       data.password === savedUserDetails.password
// //     ) {
// //       dispatch(setUser(data.username)); // Dispatch the username to the Redux store
// //       navigate('/'); // Navigate to the home page after successful login
// //     } else {
// //       alert('Invalid username or password');
// //     }
// //   };

// //   return (
// //     <div className='lbody'>
// //       <section>
// //         <div className="register">
// //           <div className="col-1">
// //             <h2>Login</h2>
// //             <span>Login to enjoy the service</span>

// //             <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
// //               <input 
// //                 type="text" 
// //                 {...register("username", { 
// //                   required: true, 
// //                   pattern: /^[a-zA-Z0-9]+$/,
// //                   validate: value => !/\s/.test(value)
// //                 })} 
// //                 placeholder='username' 
// //               />
// //               {errors.username?.type === 'required' && <p>Username is required</p>}
// //               {errors.username?.type === 'pattern' && <p>Username cannot contain special characters</p>}
// //               {errors.username?.type === 'validate' && <p>Username cannot contain spaces</p>}
              
// //               <input 
// //                 type="password" 
// //                 {...register("password", { 
// //                   required: true, 
// //                   minLength: 6 
// //                 })} 
// //                 placeholder='password' 
// //               />
// //               {errors.password?.type === 'required' && <p>Password is required</p>}
// //               {errors.password?.type === 'minLength' && <p>Password must be at least 6 characters</p>}
              
// //               <button className='btn'>Login</button>
// //             </form>
// //           </div>
// //           <div className="col-2">
// //             <img src={bgImg} alt="" />
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }
// // export default Login




import React from 'react';
import bgImg from './assets/img1.jpg';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './redux/slices/authSlices';
import './Login.css';
import axios from "axios";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async data => {
    console.log(data);
    const savedUserDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (data.email === 'admin@example.com' && data.password === 'admin123') {
      dispatch(login({ email: data.email, username: 'admin' }));
      navigate('/admin');
    } else if (
      savedUserDetails &&
      data.email === savedUserDetails.email &&
      data.password === savedUserDetails.password
    ) {
      dispatch(login({ email: data.email, username: 'user001' }));
      navigate('/');
    } else {
      alert('Invalid email or password');
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        data  // Use 'data' instead of 'formData'
      );
      console.log(response.data);
      const { accessToken, role } = response.data;
      localStorage.setItem("token", accessToken);
      localStorage.setItem("role", role);

      console.log("Token:", localStorage.getItem("token"));
      alert("Login Success!");
      if (role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert("Invalid Credentials!");
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/form');
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
                type="email" 
                {...register("email", { 
                  required: "Email is required", 
                  pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Enter a valid email address"
                  }
                })} 
                placeholder='email' 
              />
              {errors.email && <p>{errors.email.message}</p>}
              
              <input 
                type="password" 
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
              
              <button className='btn'>Login</button>
            </form>
            <p>Don't have an account? <button className='btn' onClick={handleRegisterRedirect}>Register</button></p>
          </div>
          <div className="col-2">
            <img src={bgImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
