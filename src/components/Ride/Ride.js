import React from 'react';
import { Link } from 'react-router-dom';
import './Ride.css';

const Ride = ({ ride }) => {
    const { name, image } = ride;
    return (

        <div className="col-md-3 rides">
            <Link to={`/ride/${name}`}>
                <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-title">{name}</p>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default Ride;