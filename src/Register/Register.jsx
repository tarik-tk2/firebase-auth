import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Auth_Provider';

const Register = () => {
    const navigate= useNavigate()
    const { createUser } = useContext(AuthContext);
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
       createUser(email, password)
         .then((result) => {
           const loggedUser = result.user;
             console.log(loggedUser);
             if (loggedUser) { 
                 navigate('/login')
             }
           form.reset();
         })
         .catch((error) => {
           console.log(error);
         });
        
     }
    return (
      <div className="hero  w-[80%] mx-auto">
        <div className="hero-content flex-col  ">
          <div className="text-center ">
            <h1 className="text-3xl font-bold">Register now!</h1>
          </div>
          <form className=" w-full max-w-lg shadow-2xl bg-base-100" onSubmit={handleRegister}>
            <div className="card-body ">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                                type="text"
                                name='name'
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                                placeholder="email"
                                name='email'
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                                placeholder="password"
                                name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register Now</button>
              </div>
              <Link className="link link-primary" to="/login">
                Already Register? Login Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Register;