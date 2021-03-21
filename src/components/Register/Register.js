import React from 'react';
import Header from '../Header/Header';
import '../Login/Login.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (

        <div>
            <Header></Header>

            <div className="container custom-container d-flex justify-content-center align-items-center mt-5">
                <div className="card login-form">
                    <div className="card-body p-4">
                        <h3 className="card-title text-center">Login</h3>
                        <div className="card-text">
                            <form action="" className="">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary site-btn">Login</button>

                                <div className="sign-up m-2 text-center">
                                    Don't have an account? <Link to="/register">Create An Accont</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="mt-3 login-form">
                    <h5 style={{color: 'white'}}>or</h5>
                    <button className="w-100 btn btn-primary social-btn">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;