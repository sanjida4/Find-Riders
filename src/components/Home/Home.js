import React from 'react';
import Rides from '../../FakeData/Rides';
import Header from '../Header/Header';
import Ride from '../Ride/Ride';
import './Home.css';

const Home = () => {

    const allRides = Rides;

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    {
                        allRides.map(ride => <Ride key={ride.name} ride={ride} />)
                    }
                </div>
            </div>
        </div >
    );
};

export default Home;