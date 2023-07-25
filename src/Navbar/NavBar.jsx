import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Auth_Provider';

const NavBar = () => {
  const navigate=useNavigate()
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => { 
    logOut()
      .then(() => {
       
      })
      .catch((error) => {
        const message = error.message;
        console.log(message)
      });
     navigate("/login");
  }
    return (
      <div>
        <div className="navbar  bg-purple-600 flex flex-col  md:flex-row justify-between">
          <div className="">
            <a className="btn btn-ghost normal-case text-xl ">daisyUI</a>
            <div className=' flex flex-col md:flex-row gap-2'>
              <Link to='/'>Home</Link>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
              { user&& <Link to='/order'>Order</Link>}
              
            </div>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {
            user?<div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 ">
                    { user.email}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={()=>handleLogOut()}>Logout</button>
                </li>
              </ul>
            </div>:<Link to='/login'></Link>}
          </div>
        </div>
      </div>
    );
};

export default NavBar;